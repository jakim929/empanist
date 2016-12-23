Meteor.methods({
  makeFirstTransactionRequest: function(transaction, firstSession){
    console.log("running check for transaction no. " + transaction._id)
    TransactionSchema.clean(transaction);
    if(Meteor.userId() != transaction.musician){
      Meteor.Error("You don't have valid permissions to make this request");
    }
    if(Role.userIsInRole(Meteor.userId(), 'bookAccompanist')){
      Meteor.Error("You don't have valid permissions, please complete music profile");
    }
    if(moment(transaction.endDate).isBefore(moment())){
      Meteor.Error("Invalid final event date, should after today");
    }

    transaction.status = "Making";

  }
})
