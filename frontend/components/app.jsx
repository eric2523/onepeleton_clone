import React from 'react'
import LoginFormContainer from './login_form/login_form_container'
import SignUpFormContainer from './signup_form/signup_form_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import {Route, Switch, Redirect} from 'react-router-dom'
import ClassContainer from './classes/classes_container'
import LightIconIndex from './social_media_icons/light_icon_index'
import MainNavigationBarContainer from './navbar/main_navigationbar'
import {CategoryContainer} from './categories/category_container'
import PeletonLogo from './main_logo/main_logo'
import Modal from './modals/modal'
import OverviewContainer from './profile/overview_container'
import ProfWorkoutsContainer from './profile/prof_workouts_index'

const App = () => {
  return (
    <div className="session-background">
      {/* <Modal /> */}
      <Route
        path="/classes/:category/classDetails/:classId"
        component={Modal}
      />
      <header className="master-header-div">
        {/* <Switch> */}
        <Route path="/login" component={PeletonLogo} />
        <Route path="/signup" component={PeletonLogo} />
        <ProtectedRoute path="/" component={MainNavigationBarContainer} />
        {/* </Switch> */}
      </header>
      {/* need to dry up main containers through root file container or something like that */}
      <div className="component-body">
        <Switch>
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignUpFormContainer} />
          <ProtectedRoute
            path="/classes/:category"
            component={ClassContainer}
          />
          <ProtectedRoute path="/classes" component={CategoryContainer} />
          {/* <ProtectedRoute
            path="/profile"
            component={OverviewContainer}
          /> */}
          <ProtectedRoute
            path="/profile/overview"
            component={OverviewContainer}
          />
          <ProtectedRoute
            path="/profile/workouts"
            component={ProfWorkoutsContainer}
          />
          <ProtectedRoute exact path="/" component={CategoryContainer} />
          <Redirect to="/classes" />
        </Switch>
      </div>

      <footer className="media-icon-div">
        <LightIconIndex />
      </footer>
    </div>
  );
}

export default App;