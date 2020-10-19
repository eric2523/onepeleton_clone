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
    this.props.fetchUsersClasses()
  }

  componentWillUnmount(){
     $(".session-background").removeClass("main-light-grey-background");
  }

  render() {
    // debugger
    return (
      <div className="user-overview">
        <header>
          <ProfileNavbar />
        </header>

        <UserBioIndex 
          userFollows={this.props.userFollows}
          currUser={this.props.currUser}
          fetchUsersFollows={this.props.fetchUsersFollows}
        />
        <UserTotalWorkoutsIndex 
          userClasses={this.props.userClasses}
          workoutClasses={this.props.workoutClasses}
        />
      </div>
    );
  }
}

export default OverviewIndex