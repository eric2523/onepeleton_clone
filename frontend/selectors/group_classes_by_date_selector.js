export const groupClassesByDate = (workoutClasses) => {
  let groupedClasses = {}

  for (let i = 0; i < workoutClasses.length; i++) {
    let workoutClass = workoutClasses[i]
    let id = workoutClasses[i].id 
    let date = workoutClasses[i].date 
    
    if (!groupedClasses[date]){
      groupedClasses[date] = {}
    }

    groupedClasses[date][id] = workoutClass
  }

  return groupedClasses
}

export const sortByDate = (dates) => {
  let sortedDates = null;
  if (dates[0] instanceof String) {
    sortedDates = dates.slice().sort((a,b) => {
      return new Date(a) - new Date(b)
    })
  } else {
    sortedDates = dates.slice().sort((a, b) => {
      return new Date(a.date) - new Date(b.date)
    })
  }

  return sortedDates
}

