

Template.ImagesLayout.helpers({
  allImages(){
    var allImages = UserImages.find({userId: Meteor.userId(), isThumbnail:false}, {url:1}).fetch();
    console.log(allImages)
    return allImages
  }
})

Template.ImagePicker.helpers({
  imageArray(){
    console.log(Template.instance().imageArray.get())
    return Template.instance().imageArray.get()
  }
});

Template.ImagePicker.onRendered(function() {
  console.log($('.materialboxed'))
})

Template.ImagePicker.events({
  'click .image-selection' (event, template){
    var currentTarget = $(event.target);

    if(currentTarget.hasClass('unselected-border')){
      $(event.target).removeClass('unselected-border')
      $(event.target).addClass('selected-border');
    }else{
      $(event.target).removeClass('selected-border')
      $(event.target).addClass('unselected-border');
    }

  }
});

Template.ImagePicker.onCreated(function(){
  console.log(this.data)
  var imageList = this.data.map(function(element){
    element.selected = false;
    return element
  });
  console.log(imageList)
  this.imageArray = new ReactiveVar(imageList)
});
