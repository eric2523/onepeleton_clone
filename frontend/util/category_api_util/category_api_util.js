export const fetchAllCategories = () => {
  return $.ajax({
    method: "get",
    url: "/api/categories"
  });
}

export const fetchCategoryClasses = (categoryName) => {
  return $.ajax({
    method: "get",
    url: `/api/classes/categories/${categoryName}`,
  });
}

