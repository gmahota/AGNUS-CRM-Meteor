const Images = new FilesCollection({
    collectionName: 'Images',
    allowClientCode: true, // Required to let you remove uploaded file
    onBeforeUpload(file) {
      // Allow upload files under 10MB, and only in png/jpg/jpeg formats
      if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.ext)) {
        return true;
      } else {
        return 'Please upload image, with size equal or less than 10MB';
      }
    }
});
  
if (Meteor.isClient) {
    console.log('Ola Mundo');
    Meteor.subscribe('files.images.all');
    
}
  
if (Meteor.isServer) {
    console.log('Ola Mundo');
    Meteor.publish('files.images.all', () => {
      return Images.collection.find({});
      
    });
}

 