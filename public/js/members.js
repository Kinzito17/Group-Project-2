$(document).ready(function () {

  let userid = 0;

  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/wallet").then(function (data) {
    $(".wallet-name").text("$" + data.wallet);
  });

  $.get("api/user_data").then(function (data) {
    userid = data.id;
  })

  $.get("/api/sell_data", function (data) {
    console.log(data);
    if (data.length !== 0) {
      data.map(plant => {

        if (userid === parseInt(plant.buyerId)) {

          let boughtPlant = ".bought-plant"
          console.log(plant);

          placePlants(boughtPlant, plant);

        }
      })
    }
  })

  $.get("/api/sell_data", function (data) {
    console.log(data);
    if (data.length !== 0) {
      data.map(plant => {

        if (plant.sold === true && userid === plant.UserId) {

          let soldPlant = ".sold-plant"

          placePlants(soldPlant, plant);

        }
      })
    }
  })

});
