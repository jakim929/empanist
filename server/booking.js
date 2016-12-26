import { Meteor } from 'meteor/meteor';
import { BasicProfiles } from '../collections/basicProfiles.js'
import { MusicProfiles } from '../collections/musicProfiles.js'
import { AccompanistProfiles } from '../collections/accompanistProfiles.js'
import { Transactions } from '../collections/transactions.js'
import { Sessions } from '../collections/transactions.js'
import { Data } from '../collections/profileData.js'

import accounting from 'accounting'

Meteor.methods({
  makeFirstTransactionRequest: function(transaction, firstSession){
    console.log(moment(transaction.endDate).isBefore(moment()))
    if(Meteor.userId() != transaction.musician){
      throw new Meteor.Error("You don't have valid permissions to make this request");
    }
    if(!Roles.userIsInRole(Meteor.userId(), 'bookAccompanist')){
      throw new Meteor.Error("You don't have valid permissions, please complete music profile");
    }
    if(moment(transaction.endDate).isBefore(moment())){
      throw new Meteor.Error("Invalid final event date, should be after today");
    }
    if(moment(transaction.endDate).isBefore(moment(transaction.startDate))){
      throw new Meteor.Error("Invalid start/end date");
    }
    transaction.status = "Making";
    console.log(transaction)
    if(transaction._id){
      var id = transaction._id
      TransactionSchema.clean(transaction)
      var transactionId = Transactions.update({_id : id}, {$set: transaction});
      return id
    }else{
      var transactionId = Transactions.insert(transaction);
      return transactionId;
    }

  },

  getReceipt: function(transactionId){
    var transaction = Transactions.findOne(transactionId)
    if (transaction){
      var accompanist = AccompanistProfiles.findOne({Id: transaction.accompanist})
      if(accompanist){
        sessionCount = transaction.sessionCount
        rehearsalSessionCount = sessionCount - 1;
        finalSessionCount = 1;

// CHECK OVER WITH FRESH EYES FIX

        sessionChargePreService = accompanist.charge
        sessionTotalPreService = sessionChargePreService * sessionCount
        sessionServiceFee = sessionChargePreService * 0.05
        sessionChargePostService = sessionChargePreService + sessionServiceFee

        finalSessionFee = sessionChargePreService * 0.8
        finalSessionPreService = finalSessionFee + sessionChargePreService
        finalSessionServiceFee = finalSessionPreService * 0.05
        finalSessionPostService = finalSessionPreService + finalSessionServiceFee

        totalPreService =  sessionTotalPreService + finalSessionFee
        totalServiceFee = totalPreService * 0.05
        totalPostService = totalPreService + totalServiceFee

        return {
                performanceType: transaction.performanceType,
                sessionCount: sessionCount,
                rehearsalSessionCount: rehearsalSessionCount,
                finalSessionCount: finalSessionCount,
                sessionChargePreService: accounting.formatMoney(sessionChargePreService),
                sessionTotalPreService: accounting.formatMoney(sessionTotalPreService),
                sessionServiceFee: accounting.formatMoney(sessionServiceFee),
                sessionChargePostService: accounting.formatMoney(sessionChargePostService),
                finalSessionFee: accounting.formatMoney(finalSessionFee),
                finalSessionPreService: accounting.formatMoney(finalSessionPreService),
                finalSessionServiceFee: accounting.formatMoney(finalSessionServiceFee),
                finalSessionPostService: accounting.formatMoney(finalSessionPostService),
                totalPreService: accounting.formatMoney(totalPreService),
                totalServiceFee: accounting.formatMoney(totalServiceFee),
                totalPostService: accounting.formatMoney(totalPostService)
              }
      }else{
        throw new Meteor.Error("Unable to find transaction accompanist")
      }

    }else{
      throw new Meteor.Error("Unable to find transaction")
    }
  },

  linkPaymentMethod: function(transaction, firstSession){

  }
})
