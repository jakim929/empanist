// Accounts

AccountsTemplates.configure({
  defaultLayoutType: 'blaze', // Optional, the default is 'blaze'
  defaultLayout: 'MainLayout',
  defaultLayoutRegions: {
      nav: 'Navbar'
  },
  defaultContentRegion: 'main',
  confirmPassword: false,

  texts: {
    title: {
      signIn: "Log In",
      signUp: "Sign Up",
    }
  },

  onSubmitHook: function(error, state){
    if (!error){
      if (state === "signIn"){
        console.log("Signed In")
        $('#loginModal').closeModal();
        $('#signUpModal').closeModal();
      }
      if (state === "signUp"){
        console.log("Signed Up")
        $('#signUpModal').closeModal();
        $('#loginModal').closeModal();
      }
    }
  }
});

AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');


// Account Templates
var atName =
  {
    _id: 'name',
    type: 'text',
    displayName: "Full Name",
    required: true,
    options: {
      icon: "account_circle"
    }
  };

var atFirstName =
{
  _id: 'firstName',
  type: 'text',
  displayName: "First Name",
  required: true,
  options: {
    icon: "account_circle"
  }
};

var atLastName =
{
  _id: 'lastName',
  type: 'text',
  displayName: "Last Name",
  required: true,
  options: {
    icon: "account_circle"
  }
};

var atBirthDate =
  {
    _id: 'birthDate',
    type: 'text',
    template: 'dateTemplate',
    displayName: "Birthday",
    required: true,
    negativeValidation: false,
    negativeFeedback: true,
    options: {
      custom: true,
      icon: "cake"
    }
  };

var atPhone =
{
  _id: 'phone',
  type: 'tel',
  displayName: "Mobile Number",
  required: true,
  options: {
    icon: "phone"
  }
};

var atAffiliation =
{
  _id: 'affiliation',
  type: 'text',
  displayName: "Affiliation",
  required: true,
  options: {
    icon: "school"
  }
}

var atEmail = AccountsTemplates.removeField('email');
atEmail.options = {icon: "email"}

var atPassword = AccountsTemplates.removeField('password');
atPassword.options = {icon: "lock"}

AccountsTemplates.addField(atFirstName);
AccountsTemplates.addField(atLastName);
AccountsTemplates.addField(atEmail);
AccountsTemplates.addField(atPassword);
// AccountsTemplates.addField(atAffiliation);
// AccountsTemplates.addField(atPhone);
AccountsTemplates.addField(atBirthDate);


Template.atInputWithIcon.replaces("atInput");
