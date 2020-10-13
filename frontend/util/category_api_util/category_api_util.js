export const fetchAllCategories = () => {
  return $.ajax({
    method: "get",
    url: "/api/categories"
  });
}

export const fetchCategoryClasses = (categoryId) => {
  return $.ajax({
    method: "get",
    url: `/api/classes/categories/${categoryId}`,
  });
}

