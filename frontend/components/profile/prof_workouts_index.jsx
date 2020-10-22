import React from "react";
import { connect } from "react-redux";
import ProfileNavbar from "./profile_navbar";
import { fetchUsersWorkoutClasses } from "../../actions/class_actions/class_actions";
import ProfWorkoutsIndexItem from "./prof_workouts_index_item";
import { fetchAllCategories } from "../../actions/category_actions/category_actions";
import { withRouter } from "react-router-dom";

class ProfWorkoutsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(".session-background").addClass("main-light-grey-background");
    if (this.props.match.path === "/profile/workouts/:userId") {
      this.props
        .fetchUsersWorkoutClasses(this.props.match.params.userId)
        .then(() => this.props.fetchAllCategories());
    } else {
      this.props
        .fetchUsersWorkoutClasses(this.props.currUser.id)
        .then(() => this.props.fetchAllCategories());
    }
  }

  componentWillUnmount() {
    $(".session-background").removeClass("main-light-grey-background");
  }

  render() {
    let workoutCount = Object.keys(this.props.workoutClasses).length;
    let categoriesCount = Object.keys(this.props.categories).length;

    let countTitle = "Workouts";

    let workoutsList = null;
    //make sure both async requests are finished
    if (workoutCount && categoriesCount === 6) {
      workoutsList = Object.values(this.props.workoutClasses).map(
        (workoutClass) => {
          return (
            <ProfWorkoutsIndexItem
              key={workoutClass.id}
              workoutClass={workoutClass}
              category={this.props.categories[workoutClass.categoryId]}
            />
          );
        }
      );
    }

    return (
      <div className="prof-workouts-div">
        <header>
          <ProfileNavbar match={this.props.match} />
        </header>

        <div className="prof-workouts-body">
          <ul className="prof-workouts-list">
            <div className="pw-body-head-title">
              <span className="pw-wc-count">{workoutCount}</span>
              <h1>{countTitle}</h1>
            </div>

            {workoutsList}
          </ul>
        </div>
      </div>
    );
  }
}

const mSTP = (state) => {
  return {
    workoutClasses: state.entities.workoutClasses,
    categories: state.entities.categories,
    currUser: state.entities.users[state.session.id],
  };
};

const mDTP = (dispatch) => {
  return {
    fetchUsersWorkoutClasses: (userId) =>
      dispatch(fetchUsersWorkoutClasses(userId)),
    fetchAllCategories: () => dispatch(fetchAllCategories()),
  };
};

export default withRouter(connect(mSTP, mDTP)(ProfWorkoutsIndex));
