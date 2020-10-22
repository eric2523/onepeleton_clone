import React from "react";
import ProfileNavbar from "./profile_navbar";
import UserBioIndex from "./user_bio_index";
import UserTotalWorkoutsIndex from "./user_total_workouts_index";

class OverviewIndex extends React.Component {
  constructor(props) {
    super(props);
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

  componentDidUpdate(prevProps) {
    let userId = this.props.currUser.id;
    if (prevProps.location.pathname !== this.props.location.pathname) {
      if (this.props.match.path === "/profile/overview/:userId") {
        userId = this.props.match.params.userId;
      }
      let funcs = [
        this.props.fetchUsersClasses(userId),
        this.props.fetchUsersWorkoutClasses(userId),
        this.props.fetchUser(userId),
      ];

      Promise.all(funcs);
    }
  }

  componentWillUnmount() {
    $(".session-background").removeClass("main-light-grey-background");
  }

  render() {
    let user = this.props.currUser;
    if (this.props.match.path === "/profile/overview/:userId") {
      user = this.props.users[this.props.match.params.userId];
    }

    let usersTotalWorkoutsIndex = null;
    let userBioIndex = null;
    if (user) {
      userBioIndex = (
        <UserBioIndex
          currUser={user}
          fetchUsersFollows={this.props.fetchUsersFollows}
        />
      );

      usersTotalWorkoutsIndex = (
        <UserTotalWorkoutsIndex
          sessionUser={this.props.currUser}
          currUser={user}
          fetchAllCategories={this.props.fetchAllCategories}
          categories={this.props.categories}
          userClasses={this.props.userClasses}
          workoutClasses={this.props.workoutClasses}
        />
      );
    }
    return (
      <div className="user-overview">
        <header>
          <ProfileNavbar match={this.props.match} />
        </header>
        {userBioIndex}
        {usersTotalWorkoutsIndex}
      </div>
    );
  }
}

export default OverviewIndex;
