import React from 'react'
import LoginFormContainer from './login_form/login_form_container'
import SignUpFormContainer from './signup_form/signup_form_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import {Route, Switch} from 'react-router-dom'
import ClassContainer from './classes/class_container'
import LightIconIndex from './social_media_icons/light_icon_index'
import MainNavigationBarContainer from './navbar/main_navigationbar'

const App = () => {
  return (
    <div className="session-background">
      <header>
        {/* going to need a switch case here later  */}
        <Route path="/" component={MainNavigationBarContainer} />
      </header>

      <div className="component-body">
        <Switch>
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignUpFormContainer} />
          <ProtectedRoute path="/classes" component={ClassContainer} />
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