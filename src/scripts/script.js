document
  .getElementById("open-menu-button")
  .addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.remove("hidden");
  });

document
  .getElementById("close-menu-button")
  .addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.add("hidden");
  });

async function getCalories() {
  const response = await fetch(
    "curl https://api.nal.usda.gov/fdc/v1/foods/list?api_key={DEMO-KEY}"
  );
  const data = await response.json();

  console.log(data);

  const calories = data.calories;
  const caloriesElement = document.getElementById("calories");
  caloriesElement.innerText = calories;
}

async function searchFood() {
  document.getElementById("resultsSection").style.display = "block";
  const query = document.getElementById("searchInput").value;
  const response = await fetch(
    `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=8jZmK3CrcX8CddkYCGwhyLcGEGWxnJAMDQ7mGxuo&query=${encodeURIComponent(
      query
    )}&pageSize=1`
  );
  const data = await response.json();

  console.log(data);

  if (data.foods && data.foods.length > 0) {
    const food = data.foods[0];
    const calories = food.foodNutrients.find(
      (nutrient) => nutrient.nutrientName === "Energy"
    ).value; // Find the calories
    const caloriesElement = document.getElementById("calories");
    caloriesElement.innerText = `Calories: ${calories}`;
  } else {
    document.getElementById("calories").innerText = "No results found.";
  }
}

function clearSearch() {
  document.getElementById("calories").innerText = "";
  document.getElementById("searchInput").value = "";
  document.getElementById("resultsSection").style.display = "none";
}
