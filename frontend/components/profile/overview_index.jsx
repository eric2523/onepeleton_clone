import React from 'react'
import ProfileNavbar from './profile_navbar'
import UserBioIndex from './user_bio_index'
import UserTotalWorkoutsIndex from './user_total_workouts_index'

class OverviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(".session-background").addClass("main-light-grey-background");
  }

  render() {
    return (
      <div>
        <header>
          <ProfileNavbar />
        </header>

        <UserBioIndex />
        <UserTotalWorkoutsIndex />
      </div>
    );
  }
}

export default OverviewIndex