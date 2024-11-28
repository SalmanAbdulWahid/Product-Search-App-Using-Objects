// Car Data

var cars = {
  vehicals: {
    civic: {
      img: "civic.jpg",
      model: 2022,
      color: "Red",
      price: 4500000
    },
    corola: {
      img: "fortunner.jpg",
      model: 2010,
      color: "Blue",
      price: 15000000
    },
    alto: {
      img: "alto.jpg",
      model: 2011,
      color: "Green",
      price: 150
    }
  },
  vehicals2: {
    civic: {
      img: "civic.jpg",
      model: 2022,
      color: "Red",
      price: 4500000
    },
    corola: {
      img: "fortunner.jpg",
      model: 2010,
      color: "Blue",
      price: 15000000
    },
    alto: {
      img: "alto.jpg",
      model: 2011,
      color: "Green",
      price: 150
    }
  },
};



// Mobile Data
var mobiles = {
  2022: {
    iphone_12: {
      img: "iphone 12.jpg",
      screen: 6.1,
      ram: "64GB",
      price: 10000,
      color: ["Red", "Green", "Blue"]
    },
    iphone_13: {
      img: "iphone.jpg",
      screen: 6.1,
      price: 15000,
      ram: "128GB",
      color: ["Red", "Green", "Blue"]
    },
    samsung_12: {
      img: "samsung.jpg",
      screen: 6.5,
      price: 12000,
      ram: "64GB",
      color: ["Black", "White"]
    }
  }, 
  2023: {
    iphone_12: {
      img: "iphone 12.jpg",
      screen: 6.1,
      ram: "64GB",
      price: 10000,
      color: ["Red", "Green", "Blue"]
    },
    iphone_13: {
      img: "iphone.jpg",
      screen: 6.1,
      price: 15000,
      ram: "128GB",
      color: ["Red", "Green", "Blue"]
    },
    samsung_12: {
      img: "samsung.jpg",
      screen: 6.5,
      price: 12000,
      ram: "64GB",
      color: ["Black", "White"]
    }
  } 
};



// Function to create and append car cards
function displayCars() {
  var container = document.getElementById("cars-container");
  container.innerHTML = ""; // Clear previous content
  for (var brand in cars) {
    for (var model in cars[brand]) {
      var car = cars[brand][model];
      var card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
              <img src="${car.img}" alt="${brand} ${car.model}">
              <h3>${brand} ${car.model}</h3>
              <p>Color: ${car.color}</p>
              <p>Price: $${car.price}</p>
          `;
      container.appendChild(card);
    }
  }
}

// Function to create and append mobile cards
function displayMobiles() {
  var container = document.getElementById("mobiles-container");
  container.innerHTML = ""; // Clear previous content
  for (var brand in mobiles) {
    for (var model in mobiles[brand]) {
      var mobile = mobiles[brand][model];
      var card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
              <img src="${mobile.img}" alt="${brand} ${model}">
              <h3>${brand} ${model}</h3>
              <p>Screen: ${mobile.screen} inches</p>
              <p>RAM: ${mobile.ram}</p>
              <p>Colors: ${mobile.color.join(", ")}</p>
          `;
      container.appendChild(card);
    }
  }
}

// Function to handle brand selection
document.getElementById("brandSelect").addEventListener("change", function () {
  var selectedBrand = this.value;

  if (selectedBrand === "cars") {
    document.getElementById("cars-container").style.display = "block";
    document.getElementById("mobiles-container").style.display = "none";
    displayCars();
  } else if (selectedBrand === "mobiles") {
    document.getElementById("cars-container").style.display = "none";
    document.getElementById("mobiles-container").style.display = "block";
    displayMobiles();
  } else if (selectedBrand === "all") {
    document.getElementById("cars-container").style.display = "block";
    document.getElementById("mobiles-container").style.display = "block";
    displayCars();
    displayMobiles();

  }
});

// Initial display
displayCars();  // Show cars by default
displayMobiles();
displayMobiles();  // Show mobiles by default
document.getElementById("mobiles-container").style.display = "none"; // Hide mobile container initially
document.getElementById("cars-container").style.display = "none"; // Hide cars container initially
