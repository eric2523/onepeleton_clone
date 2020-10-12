import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'

//testing thunk action creators
import { signup, login, logout } from './actions/session_actions/session_actions'

//testing ajax calls
// import * as UserAPIUtil from './util/user_api_util/user_api_util'
import { fetchAllUsers } from './actions/user_actions/user_actions'

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
  window.signup = signup
  window.login = login
  window.logout = logout
  window.fetchAllUsers = fetchAllUsers
  // window.fetchUser = UserAPIUtil.fetchUser
})