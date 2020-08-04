function placePlants(where, plant) {
    console.log(plant);
    let plantCard = $("<div>").attr({ class: "card", "data-id": plant.id, style: "width: 15em;" })
    $(where).append(plantCard);

    let cardImg = $("<img>").addClass("card-img-top").attr("src", plant.imgURL);
    $(plantCard).append(cardImg);

    let plantInfo = $("<div>").addClass("card-body d-flex flex-column");
    $(plantCard).append(plantInfo);

    let name = $("<h2>").addClass("card-title").text(plant.plantName);
    $(plantInfo).append(name);

    let plantPrice = $("<h4>").text("$ " + plant.price);
    $(plantInfo).append(plantPrice);

    let plantDesc = $("<p>").addClass("card-text").text(plant.description);
    $(plantInfo).append(plantDesc);

    $(plantCard).appendTo(where);

}

function readyPlants(where, plant) {
    console.log(plant);
    let plantCard = $("<div>").attr({ class: "card", "data-id": plant.id, style: "width: 15em;" })
    $(where).append(plantCard);

    let cardImg = $("<img>").addClass("card-img-top").attr("src", plant.imgURL);
    $(plantCard).append(cardImg);

    let plantInfo = $("<div>").addClass("card-body d-flex flex-column");
    $(plantCard).append(plantInfo);

    let name = $("<h2>").addClass("card-title").text(plant.plantName);
    $(plantInfo).append(name);

    let plantPrice = $("<h4>").text("$ " + plant.price);
    $(plantInfo).append(plantPrice);

    let plantDesc = $("<p>").addClass("card-text").text(plant.description);
    $(plantInfo).append(plantDesc);

    let buyButton = $("<button>").attr({ class: "btn buy-btn mt-auto", "data-id": plant.id }).text("Gimme Green");
    $(plantInfo).append(buyButton);

    $(plantCard).appendTo(where);

}





