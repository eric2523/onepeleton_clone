import * as CategoryAPIUtil from '../../util/category_api_util/category_api_util'
export const RECEIVE_ALL_CATEGORIES = "RECEIVE_CATEGORIES";

const receiveAllCategories = (categories) => {
  return ({
    type: RECEIVE_ALL_CATEGORIES,
    categories
  })
}

export const fetchAllCategories = () => {
  return (dispatch) => {
    return CategoryAPIUtil.fetchAllCategories()
      .then((categories) => dispatch(receiveAllCategories(categories)))
  }
}