import axiosClient from "../axiosClient.js";

export function searchMeals({ commit }, keyword) {
  console.log(`search.php?s=${keyword}`);
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedMeals", data.meals);
  });
}
