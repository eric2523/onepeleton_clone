import React from 'react'
import ProfileNavbar from './profile_navbar'
import UserBioIndex from './user_bio_index'
import UserTotalWorkoutsIndex from './user_total_workouts_index'

class OverviewIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   onCurrUserProfile: Boolean(this.props.match.path !== "/profile/overview/:userId"),
    // }
  }

  componentDidMount() {
    $(".session-background").addClass("main-light-grey-background");
    if (this.props.match.path === "/profile/overview/:userId") {
      let userId = this.props.match.params.userId;
      let funcs = [
        this.props.fetchUsersClasses(userId),
        this.props.fetchUsersWorkoutClasses(userId),
        this.props.fetchUser(userId),
      ];
      
      Promise.all(funcs);
    } else {
      this.props
        .fetchUsersClasses(this.props.currUser.id)
        .then(() =>
          this.props.fetchUsersWorkoutClasses(this.props.currUser.id)
        );
    }
  }

  componentDidUpdate(prevProps){
    let userId = this.props.currUser.id
    if (
      this.props.match.path === "/profile/overview/:userId" &&
      prevProps.location.pathname !== this.props.location.pathname
    ) {
      userId = this.props.match.params.userId;
      let funcs = [
        this.props.fetchUsersClasses(userId),
        this.props.fetchUsersWorkoutClasses(userId),
        this.props.fetchUser(userId),
      ];

      Promise.all(funcs);
    } 
  }

  componentWillUnmount(){
     $(".session-background").removeClass("main-light-grey-background");
  }

  render() {
    let user = this.props.currUser
    if (
      this.props.match.path === "/profile/overview/:userId"
    ) {
      user = this.props.users[this.props.match.params.userId];
    }

    let userBioIndex = null;
    if (user) {
      userBioIndex = (
        <UserBioIndex
          currUser={user}
          fetchUsersFollows={this.props.fetchUsersFollows}
        />
      );
    }
    // debugger
    return (
      <div className="user-overview">
        <header>
          <ProfileNavbar />
        </header>
        {userBioIndex}
        <UserTotalWorkoutsIndex 
          fetchAllCategories={this.props.fetchAllCategories}
          categories={this.props.categories}
          userClasses={this.props.userClasses}
          workoutClasses={this.props.workoutClasses}
        />
      </div>
    );
  }
}

export default OverviewIndex