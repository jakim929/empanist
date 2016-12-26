Meteor.startup(function() {  
    Meteor.methods({
        // emailFeedback: function (body, any_variable) {

        //     // Don't wait for result
        //     this.unblock();

        //     // Define the settings
        //     var postURL = process.env.MAILGUN_API_URL + '/' + process.env.MAILGUN_DOMAIN + '/messages';
        //     var options =   {
        //                         auth: "api:" + process.env.MAILGUN_API_KEY,
        //                         params: {
        //                             "from":"Movie at My Place <postmaster@empanist.com>",
        //                             "to":['ajamjoom@college.harvard.edu'],
        //                             "subject": 'movieatmyplace.com quick feedback',
        //                             "html": body,
        //                         }
        //                     }
        //     var onError = function(error, result) {
        //                       if(error) {console.log("Error: " + error)}
        //                   }

        //     // Send the request
        //     Meteor.http.post(postURL, options, onError);
        //     console.log("post request should be sent")
        // },

  //       Email.send({
  //   from: fromEmail,
  //   to: "ajamjoom@college.harvard.edu",
  //   replyTo: fromEmail,
  //   subject: "That was easy",
  //   text: "If you're reading this, sending an email through Meteor really was that easy"
  // });


// sendEmail: function (to, subject, text) {
//     // Let other method calls from the same client start running,
//     // without waiting for the email sending to complete.
//     this.unblock();

//     // and here is where you can throttle the number of emails this user
//     // is allowed to send per day

//     Email.send({
//       to: to,
//       from: "ajamjoom@empanist.com",
//       subject: subject,
//       text: text
//     });
//   }


    sendEmail: function (mailFields) {
        console.log("about to send email...");
        check([mailFields.to, mailFields.from, mailFields.subject, mailFields.text, mailFields.html], [String]);

        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();

        Meteor.Mailgun.send({
            to: mailFields.to,
            from: mailFields.from,
            subject: mailFields.subject,
            text: mailFields.text,
            html: mailFields.html
        });
        console.log("email sent!");
    }


    });
});