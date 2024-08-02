
function myFunction() {
  var threads = GmailApp.search('from:jobs-noreply@linkedin.com');
  var appliedCount = 0;
  var rejectedCount = 0;

  threads.forEach(function(thread) {
    var messages = thread.getMessages();
    messages.forEach(function(message) {
      var subject = message.getSubject();
      var body = message.getRawContent(); // Adjust according to your email content
     
      // Example logic to determine applied vs rejected (you need to customize this)
      if (subject.includes('application was sent to')) {
        appliedCount++;
        Logger.log( "APPLIED: " + message.getDate() + subject);
        // Logger.log(body);
      } else if (subject.includes('Your application to ')) {
         Logger.log( "REJECTED: " + message.getDate() + subject);
        rejectedCount++;
      }
    });
  });

  Logger.log('Applied count: ' + appliedCount);
  Logger.log('Rejected count: ' + rejectedCount);
}
