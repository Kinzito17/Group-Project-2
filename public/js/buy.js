
/* eslint-disable quotes */
/* eslint-disable unexpected character */
$(document).ready(function () {


  getPlants();

  // $("#searchBarFilt").on("keyup", function() {
  //   var value = $(this).val().toLowerCase();
  //   $(".card").filter(function() {
  //     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  //     });
  // });

 

// If purchase btn clicked
// $(document).on("click",".buy-btn", function(){

//   var id = this.id;
//   console.log(id);

//   $.ajax({
//     method: "DELETE",
//     url: "/api/buy/" + id
//   }).then(getPlants);

// });

//if purchased change sold to true
$(document).on("click", ".buy-btn", function() {

  var id = this.id;
  console.log(id);

  $.ajax({
    method: "PUT",
    url: "/api/buy/" + id
  }).then(getPlants);

});

// This function grabs plants from the database and updates the view
function getPlants() {

  $("#plant-name").text("");
  $.get("/api/sell_data").then(function (data) {

    var html = "";

    // if (data.sold === 0) {
    for (var a = 0; a < data.length; a++) {

      var templateString = '<h2>' + (Object.values(data[a].plantName).join('')) + '</h2><h4> $ ' + Object.values(data[a].price).join('') + '</h4><p>' + Object.values(data[a].description).join('');
      var newImg = (Object.values(data[a].imgURL).join(''));
      var newId = data[a].id;

      html += `      
           <div class="col-4">
            <div class="card" style="width:20em;text-align:center;display:inline-block;"  id = "generatedCards">
            <img class = "card-img-top" src = "`+ newImg +`">
                 <div class="card-body">
                 `+ templateString + `
                 <br>
                 <button class="btn buy-btn" id = "`+newId+`">Purchase</button>
                </div>
              </div>
        </div>`;
    };
    $('#plant-name').append(`<div class="row">`+ html +`</div>`);
  }); 
//   else {
//     for (var a = 0; a < data.length; a++) {

//       var templateString = '<h2>' + (Object.values(data[a].plantName).join('')) + '</h2><h4> $ ' + Object.values(data[a].price).join('') + '</h4><p>' + Object.values(data[a].description).join('');
//       var newImg = (Object.values(data[a].imgURL).join(''));
//       var newId = data[a].id;

//       html += `      
//            <div class="col-4">
//             <div class="card" style="width:20em;text-align:center;display:inline-block;"  id = "generatedCards">
//             <img class = "card-img-top" src = "`+ newImg +`">
//                  <div class="card-body">
//                  `+ templateString + `
//                  <br>
//                  <button class="btn buy-btn" id = "`+newId+`">Purchase</button>
//                 </div>
//               </div>
//         </div>`;
//     };
//     $('#sold-plant').append(`<div class="row">`+ html +`</div>`);

// }

// });
// }
}
});