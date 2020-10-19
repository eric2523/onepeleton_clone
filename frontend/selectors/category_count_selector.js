export const categoryCountSelector =  (workoutClasses, categories) => {
  let categoryCount = {}
  let categoriesValues = Object.values(categories)
  let workoutClassesValues = Object.values(workoutClasses)

  if (categoriesValues.length){
    categoriesValues.forEach((category) => {
      categoryCount[category.id] = 0;
    });
  }

  if (workoutClassesValues.length) {
    workoutClassesValues.forEach((workoutClass) => {
      categoryCount[workoutClass.categoryId] += 1;
    });
  }

  return categoryCount;

}