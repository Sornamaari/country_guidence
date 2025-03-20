const countryDetails = {
  "Germany": {
    "touristPlaces": ["Brandenburg Gate", "Neuschwanstein Castle", "Cologne Cathedral"],
    "famousFoods": ["Sauerbraten", "Bratwurst", "Pretzels"],
    "topUniversities": ["LMU Munich", "Heidelberg University", "University of Freiburg"]
  },
  "China": {
    "touristPlaces": [ "Great Wall of China", "Forbidden City", "Terracotta Army"],
    "famousFoods": ["Peking Duck","Dim Sum", "Hot Pot"],
    "topUniversities": ["Peking University", "Tsinghua University", "Fudan University"]
  },
  "United States of America": {
    "touristPlaces": ["Statue of Liberty", "Grand Canyon", "Yellowstone National Park"],
    "famousFoods": ["Burgers", "Hot Dogs", "Apple Pie"],
    "topUniversities": ["Harvard University", "Stanford University", "MIT"]
  },
  "India": {
    "touristPlaces": ["Taj Mahal", "Qutub Minar", "Golden Temple"],
    "famousFoods": ["Biryani", "Butter Chicken", "Dosa"],
    "topUniversities": ["Indian Institute of Technology (IIT) Bombay", "University of Delhi", "Indian Institute of Science (IISc)"]
  },
  "Italy": {
    "touristPlaces": ["Colosseum", "Leaning Tower of Pisa", "Venice Canals"],
    "famousFoods": ["Pizza", "Pasta", "Gelato"],
    "topUniversities": ["University of Bologna", "Sapienza University of Rome", "University of Milan"]
  },
  "Japan": {
    "touristPlaces": ["Mount Fuji", "Tokyo Tower", "Kyoto Temples"],
    "famousFoods": ["Sushi", "Ramen", "Tempura"],
    "topUniversities": ["University of Tokyo", "Kyoto University", "Osaka University"]
  },
  "France": {
    "touristPlaces": ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
    "famousFoods": ["Croissants", "Escargot", "Ratatouille"],
    "topUniversities": ["Universite PSL", "Sorbonne University", "Polytechnic Institute of Paris"]
  },
  "Australia": {
    "touristPlaces": ["Sydney Opera House", "Great Barrier Reef", "Uluru"],
    "famousFoods": ["Meat Pie", "Vegemite", "Lamingtons"],
    "topUniversities": ["Australian National University", "University of Melbourne", "University of Sydney"]
  },
  "United Kingdom": {
    "touristPlaces": ["Big Ben", "Stonehenge", "Buckingham Palace"],
    "famousFoods": ["Fish and Chips", "Full English Breakfast", "Sunday Roast"],
    "topUniversities": ["University of Oxford", "University of Cambridge", "Imperial College London"]
  },
  "South Korea": {
    "touristPlaces": ["Gyeongbokgung Palace", "Seoraksan National Park", "Namsan Seoul Tower"],
    "famousFoods": ["Kimchi", "Bibimbap", "Bulgogi"],
    "topUniversities": ["Seoul National University", "KAIST", "POSTECH"]
  },
  "Brazil": {
    "touristPlaces": ["Christ the Redeemer", "Iguazu Falls", "Copacabana Beach"],
    "famousFoods": ["Feijoada", "Pão de Queijo", "Churrasco"],
    "topUniversities": ["University of São Paulo", "University of Campinas", "Federal University of Rio de Janeiro"]
  },
  "Mexico": {
    "touristPlaces": ["Chichen Itza", "Cozumel", "Teotihuacan Pyramids"],
    "famousFoods": ["Tacos", "Enchiladas", "Guacamole"],
    "topUniversities": ["National Autonomous University of Mexico", "Monterrey Institute of Technology", "Autonomous University of Barcelona"]
  },
  "Russia": {
    "touristPlaces": ["Red Square", "Saint Basil's Cathedral", "Lake Baikal"],
    "famousFoods": ["Borscht", "Pelmeni", "Caviar"],
    "topUniversities": ["Lomonosov Moscow State University", "Saint Petersburg State University", "Tomsk State University"]
  },
  "Canada": {
    "touristPlaces": ["Niagara Falls", "Banff National Park", "CN Tower"],
    "famousFoods": ["Poutine", "Maple Syrup", "Butter Tarts"],
    "topUniversities": ["University of Toronto", "University of British Columbia", "McGill University"]
  },
  "Spain": {
    "touristPlaces": ["Sagrada Familia", "Park Guell", "Alhambra"],
    "famousFoods": ["Paella", "Tortilla Española", "Gazpacho"],
    "topUniversities": ["University of Barcelona", "Autonomous University of Madrid", "Complutense University of Madrid"]
  },
  "Egypt": {
    "touristPlaces": ["Pyramids of Giza", "Luxor", "The Sphinx"],
    "famousFoods": ["Koshari", "Fatta", "Foul Medames"],
    "topUniversities": ["Cairo University", "Ain Shams University", "Alexandria University"]
  },
  "Turkey": {
    "touristPlaces": ["Hagia Sophia", "Blue Mosque", "Cappadocia"],
    "famousFoods": ["Kebabs", "Baklava", "Pide"],
    "topUniversities": ["Boğaziçi University", "Koç University", "Middle East Technical University"]
  },
  "Thailand": {
    "touristPlaces": ["Grand Palace", "Phi Phi Islands", "Wat Pho"],
    "famousFoods": ["Pad Thai", "Tom Yum Goong", "Green Curry"],
    "topUniversities": ["Chulalongkorn University", "Mahidol University", "Kasetsart University"]
  },
  "Argentina": {
    "touristPlaces": ["Iguazu Falls", "Buenos Aires", "Mendoza Vineyards"],
    "famousFoods": ["Asado", "Empanadas", "Milanesa"],
    "topUniversities": ["University of Buenos Aires", "National University of Córdoba", "National University of La Plata"]
  },
  "South Africa": {
    "touristPlaces": ["Table Mountain", "Kruger National Park", "Robben Island"],
    "famousFoods": ["Biltong", "Bobotie", "Braaivleis"],
    "topUniversities": ["University of Cape Town", "University of the Witwatersrand", "Stellenbosch University"]
  },
  "Saudi Arabia": {
    "touristPlaces": ["Mecca", "Medina", "Al-Ula"],
    "famousFoods": ["Kabsa", "Jareesh", "Mandi"],
    "topUniversities": ["King Abdulaziz University", "King Saud University", "King Fahd University of Petroleum and Minerals"]
  },
  "Indonesia": {
    "touristPlaces": ["Bali", "Borobudur Temple", "Komodo Island"],
    "famousFoods": ["Nasi Goreng", "Satay", "Rendang"],
    "topUniversities": ["University of Indonesia", "Gadjah Mada University", "Bandung Institute of Technology"]
  },
  "Vietnam": {
    "touristPlaces": ["Halong Bay", "Hue Citadel", "Mekong Delta"],
    "famousFoods": ["Pho", "Banh Mi", "Spring Rolls"],
    "topUniversities": ["Vietnam National University", "Hanoi University of Science and Technology", "University of Danang"]
  },
  "New Zealand": {
    "touristPlaces": ["Sky Tower", "Fiordland National Park", "Hobbiton"],
    "famousFoods": ["Lamb", "Pavlova", "Kumara"],
    "topUniversities": ["University of Auckland", "University of Otago", "Victoria University of Wellington"]
  }
};

let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      const countryData = countryDetails[countryName];
      result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population:</h4>
                <span>${data[0].population}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency:</h4>
                <span>${
                  data[0].currencies[Object.keys(data[0].currencies)].name
                } - ${Object.keys(data[0].currencies)[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Common Languages:</h4>
                <span>${Object.values(data[0].languages)
                  .toString()
                  .split(",")
                  .join(", ")}</span>
            </div>
        </div>
        <h4>Famous Tourist Places:</h4>
        <ul>${countryData.touristPlaces.map(place => `<li>${place}</li>`).join("")}</ul>
        <h4>Famous Foods:</h4>
        <ul>${countryData.famousFoods.map(food => `<li>${food}</li>`).join("")}</ul>
        <h4>Top Universities:</h4>
        <ul>${countryData.topUniversities.map(uni => `<li>${uni}</li>`).join("")}</ul>
      `;
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3>The input field cannot be empty</h3>`;
      } else {
        result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
      }
    });
});
