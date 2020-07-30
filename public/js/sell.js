$(document).ready(function() {

  /* eslint-disable no-unused-vars */
  // var loadFile = function(event) {
  //   var image = document.getElementById("output");
  //   image.src = URL.createObjectURL(event.target.files[0]);
  // };

  var sellerForm = $("form.selling");
  var plantNameInput = $("input#title");
  var priceInput = $("input#price");
  var descriptionInput = $("textarea#description");
  var imgUrlInput = $("input#imgURL");

  sellerForm.on("submit", function(event) {
    event.preventDefault();
    var itemData = {
      plantName: plantNameInput.val().trim(),
      price: priceInput.val().trim(),
      description: descriptionInput.val().trim(),
      imgUrl: imgUrlInput.val().trim()
    };
    console.log(itemData);

    document.getElementById("sellForm").reset();

    
    $.post("/api/sell", itemData);
    // On success, run the following code
    console.log("postin");
  });

});
  






