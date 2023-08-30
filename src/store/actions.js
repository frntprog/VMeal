import axiosClient from "../axiosClient.js";

export function searchMeals({ commit }, keyword) {
  console.log(`search.php?s=${keyword}`);
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedMeals", data.meals);
  });
}

export function searchMealsByLetter({ commit }, letter) {
  console.log(`search.php?f=${letter}`);
  axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    commit("setMealsByLetter", data.meals);
  });
}

export function searchMealsByIngredient({ commit }, ingredient) {
  console.log(`filter.php?i=${ingredient}`);
  axiosClient.get(`filter.php?i=${ingredient}`).then(({ data }) => {
    commit("setMealsByIngredient", data.meals);
  });
}
