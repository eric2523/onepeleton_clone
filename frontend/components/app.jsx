import React from 'react'
import LoginFormContainer from './login_form/login_form_container'
import SignUpFormContainer from './signup_form/signup_form_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import {Route, Switch} from 'react-router-dom'
import ClassContainer from './classes/classes_container'
import LightIconIndex from './social_media_icons/light_icon_index'
import MainNavigationBarContainer from './navbar/main_navigationbar'
import CategoryContainer from './categories/category_container'

const App = () => {
  return (
    <div className="session-background">
      <header>
        <ProtectedRoute path="/" component={MainNavigationBarContainer} />
      </header>
      {/* need to dry up main containers through root file container or something like that */}
      <div className="component-body">
        <Switch>
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignUpFormContainer} />
          <Route path="/classes/:category" component={ClassContainer} />
          <ProtectedRoute path="/classes" component={CategoryContainer} />
          <ProtectedRoute path="/" component={ClassContainer} />
        </Switch>
      </div>

      <footer className="media-icon-div">
        <LightIconIndex />
      </footer>
    </div>
  );
}

export default App;