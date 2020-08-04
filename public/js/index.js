$(document).ready(function () {

    newWallet();

    //Get the balance of the wallet and display
    function newWallet() {

        $.get("/api/wallet").then(function (data) {
            var balance = parseInt(data.wallet);
            $(".wallet-name").text("$" + balance);
        })
    };

    getPlants();

    function getPlants() {
        $.get("/api/sell_data", function (data) {
            console.log(data);
            if (data.length !== 0) {
                data.map(plant => {

                    if (plant.sold === true) {

                        let recentSold = "#recent-sold"
                        console.log(plant);

                        placePlants(recentSold, plant);

                    }
                })
            }
        })
    }
});