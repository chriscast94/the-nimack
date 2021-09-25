
var recipeImage = document.getElementById("food-img");
recipeImage.src = data.meals[0].strMealThumb + "/preview";

var homeBtn = document.getElementById("home-button");
var recipeBtn = document.getElementById("food-btn");

// Calls API and develops ingredients list and instruction
function getApi() {

  var requestURL = "https://www.themealdb.com/api/json/v1/1/random.php";

  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var ingredientArea = document.getElementById("ingredients");
      var instructionsArea = document.getElementById("instructions");
      var recipeName = document.getElementById("food-title");

      recipeBtn.addEventListener("click", getApi);
      var recipeImage = document.getElementById("food-img");
      recipeImage.src = data.meals[0].strMealThumb + "/preview";

      // Ingredients List items
      var ingredientList = [
        " " + data.meals[0].strIngredient1,
        " " + data.meals[0].strIngredient2,
        " " + data.meals[0].strIngredient3,
        " " + data.meals[0].strIngredient4,
        " " + data.meals[0].strIngredient5,
        " " + data.meals[0].strIngredient6,
        " " + data.meals[0].strIngredient7,
        " " + data.meals[0].strIngredient8,
        " " + data.meals[0].strIngredient9,
        " " + data.meals[0].strIngredient10,
        " " + data.meals[0].strIngredient11,
        " " + data.meals[0].strIngredient12,
        " " + data.meals[0].strIngredient13,
        " " + data.meals[0].strIngredient14,
        " " + data.meals[0].strIngredient15,
        " " + data.meals[0].strIngredient16,
        " " + data.meals[0].strIngredient17,
        " " + data.meals[0].strIngredient18,
        " " + data.meals[0].strIngredient19,
        " " + data.meals[0].strIngredient20,
      ];

      // Function and variable to remove empty or null strings
      var realIngredients = ingredientList.filter(function (e) {
        return e !== null;
      });

      console.log(realIngredients);

      recipeName.innerHTML = data.meals[0].strMeal;
      instructionsArea.innerHTML = data.meals[0].strInstructions;
      ingredientArea.innerHTML = ingredientList;
    });
}

    var requestURL = "https://www.themealdb.com/api/json/v1/1/random.php";

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var ingredientArea = document.getElementById("ingredients");
            var instructionsArea = document.getElementById("instructions");
            var recipeName = document.getElementById("food-title");

            // Creates image
            var recipeImage = document.getElementById("food-img");
            recipeImage.src = data.meals[0].strMealThumb + "/preview";


            // Ingredients list items and measurements
            var ingredientList =
                [data.meals[0].strIngredient1,
                 " " + data.meals[0].strIngredient2,
                " " + data.meals[0].strIngredient3,
                " " + data.meals[0].strIngredient4,
                " " + data.meals[0].strIngredient5,
                " " + data.meals[0].strIngredient6,
                " " + data.meals[0].strIngredient7,
                " " + data.meals[0].strIngredient8,
                " " + data.meals[0].strIngredient9,
                " " + data.meals[0].strIngredient10,
                " " + data.meals[0].strIngredient11,
                " " + data.meals[0].strIngredient12,
                " " + data.meals[0].strIngredient13,
                " " + data.meals[0].strIngredient14,
                " " + data.meals[0].strIngredient15,
                " " + data.meals[0].strIngredient16,
                " " + data.meals[0].strIngredient17,
                " " + data.meals[0].strIngredient18,
                " " + data.meals[0].strIngredient19,
                " " + data.meals[0].strIngredient20];


            var filteredIngredients = [];
                        // const regex = /\s+/;

            for (let i =0; i<ingredientList.length; i++) {
                if (ingredientList[i] !== " ") {
                    filteredIngredients.push(ingredientList[i]);
                }
            }
           // console.log(filteredIngredients);

            recipeName.innerHTML = data.meals[0].strMeal;
            instructionsArea.innerHTML = data.meals[0].strInstructions;
            ingredientArea.innerHTML = filteredIngredients;


        });
}

recipeBtn.addEventListener("click", getApi);

