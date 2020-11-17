import React from 'react'
import ReactGA from 'react-ga'
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
import ChallengesContainer from './challenges/challenges_index'

function initializeReactGA() {
  ReactGA.initialize('G-Y1J5PS6SFH');
  ReactGA.pageview('/homepage');
}

const App = () => {
  return (
    <div className="session-background">
      {/* <Modal /> */}
      <Route
        path="/classes/:category/classDetails/:classId"
        component={Modal}
      />
      <Route exact path="/profile/overview/:userId" component={Modal} />
      <Route exact path="/profile/overview" component={Modal} />
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
            exact
            path="/profile/overview"
            component={OverviewContainer}
          />
          <ProtectedRoute
            exact
            path="/profile/workouts"
            component={ProfWorkoutsContainer}
          />
          <ProtectedRoute
            path="/classes/:category"
            component={ClassContainer}
          />
          <ProtectedRoute
            path="/profile/overview/:userId"
            component={OverviewContainer}
          />
          <ProtectedRoute path="/classes" component={CategoryContainer} />
          <ProtectedRoute
            path="/profile/workouts/:userId"
            component={ProfWorkoutsContainer}
          />
          <ProtectedRoute
            path="/schedule/:category"
            component={ClassContainer}
          />
          <ProtectedRoute
            exact
            path="/challenges"
            component={ChallengesContainer}
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