Meteor.startup(function() {  
    Meteor.methods({
        sendEmail: function (mailFields) {
            console.log("about to send email...");
            check([mailFields.to, mailFields.from, mailFields.subject, mailFields.text, mailFields.html], [String]);
            this.unblock();

            Meteor.Mailgun.send({
                to: mailFields.to,
                from: mailFields.from,
                subject: mailFields.subject,
                text: mailFields.text,
                html: mailFields.html
            });
        },

        addMusicRole: function (userId) {
            console.log("Add Access to MusicPrograms which gives main access to the website")
            // This is not fully functional
            Roles.addUsersToRoles(userId, "makeMusicProfile") 
        },

        sendVerificationLink: function(userId, email, err) {
            Accounts.emailTemplates.siteName = "Empanist";
            Accounts.emailTemplates.from     = "Empanist Verification <verify@empanist.com>";

            Accounts.emailTemplates.verifyEmail = {
              subject() {
                return "[Empanist] Verify Your Email Address";
              },
              text( user, url ) {
                let emailAddress   = email,
                    urlWithoutHash = url.replace( '#/', '' ),
                    supportEmail   = "support@empanist.com",
                    emailBody      = `To verify your email address (${emailAddress}) visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

                return emailBody;
              }
            };

            Accounts.sendVerificationEmail(userId, email)
        }
    });   
});

Meteor.users.after.insert(function (userId, doc){
  
    // Verify Email

    Accounts.emailTemplates.siteName = "Empanist";
    Accounts.emailTemplates.from     = "Empanist Verification <verify@empanist.com>";

    Accounts.emailTemplates.verifyEmail = {
      subject() {
        return "[Empanist] Verify Your Email Address";
      },
      text( user, url ) {
        let emailAddress   = doc.emails[0].address,
            urlWithoutHash = url.replace( '#/', '' ),
            supportEmail   = "support@empanist.com",
            emailBody      = `To verify your email address (${emailAddress}) visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

        return emailBody;
      }
    };

  Accounts.sendVerificationEmail(doc._id, doc.emails[0].address)
  
});

 