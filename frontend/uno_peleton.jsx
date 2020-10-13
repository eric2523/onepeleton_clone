import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'

//testing thunk action creators
// import { signup, login, logout } from './actions/session_actions/session_actions'

//testing ajax calls
// import * as UserAPIUtil from './util/user_api_util/user_api_util'
// import { fetchAllUsers } from './actions/user_actions/user_actions'
// import * as ClassAPIUtil from './util/class_api_util/class_api_util'
// import * as CategoryAPIUtil from './util/category_api_util/category_api_util'
// import { fetchClass, fetchCategoryClasses } from './actions/class_actions/class_actions'
import { fetchAllCategories } from './actions/category_actions/category_actions'

//testing log in form container 
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root")

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState)
    delete window.currentUser
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={ store }/>, root)

  //testing store on window
  window.getState = store.getState
  window.dispatch = store.dispatch
  // window.signup = signup
  // window.login = login
  // window.logout = logout
  // window.fetchAllUsers = fetchAllUsers
  // window.fetchUser = UserAPIUtil.fetchUser
  // window.getClass = ClassAPIUtil.getClass
  window.fetchAllCategories = fetchAllCategories
  // window.fetchCategoryClasses = CategoryAPIUtil.fetchCategoryClasses
  // window.fetchClass = fetchClass
  // window.fetchCategoryClasses = fetchCategoryClasses
})