const localStorageKey = "cities";

export const saveSearchesInLocalStorage = (doneSearches) => {
  const favouritesSearches = doneSearches.filter(
    ({ favourite }) => favourite === true
  );
  localStorage.setItem(localStorageKey, JSON.stringify(favouritesSearches));
};
export const getSearchesFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || [];
