const localStorageKey = "cities";

export const saveSearchesInLocalStorage = (doneSearches) => {
  const favouritesSearches = doneSearches.filter(({ fav }) => fav === true);
  localStorage.setItem(localStorageKey, JSON.stringify(favouritesSearches));
};
export const getSearchesFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || [];
