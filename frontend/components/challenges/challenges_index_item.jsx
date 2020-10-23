import React from "react";
import {
  fetchUsersChallenges,
  createUsersChallenge,
  removeUsersChallenge,
} from "../../actions/user_challenges/user_challenges_actions";
import { connect } from "react-redux";

class ChallengesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userChallengeId: null };
    this.calculateDaysLeft = this.calculateDaysLeft.bind(this);
    this.isFollowingChallenge = this.isFollowingChallenge.bind(this);
    this.findUserChallengeId = this.findUserChallengeId.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsersChallenges(this.props.sessionUser.id);
  }

  isFollowingChallenge() {
    let userChallenges = Object.values(this.props.userChallenges);
    for (let i = 0; i < userChallenges.length; i++) {
      if (userChallenges[i].challengeId === this.props.challenge.id) {
        return true;
      }
    }
    return false;
  }

  findUserChallengeId(){
    let userChallenges = Object.values(this.props.userChallenges)
    for (let i = 0; i < userChallenges.length; i++) {
      if (userChallenges[i].challengeId === this.props.challenge.id) {
        return userChallenges[i].id
      }
    }
    return null;
  }

  handleClick(type) {
    return (e) => {
      if (type === "create") {
        this.props.createUsersChallenge(this.props.challenge.id);
      } else {
        let userChallengeId = this.findUserChallengeId()
        this.props.removeUsersChallenge(userChallengeId)
      }
    };
  }

  calculateDaysLeft() {
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    let difference =
      new Date(this.props.challenge.endDate) -
      new Date(this.props.challenge.startDate);
    return Math.round(difference / millisecondsPerDay);
  }

  render() {
    let btnContext = "JOIN";
    let processBtnType = "create";
    if (this.isFollowingChallenge()) {
      btnContext = "CANCEL";
      processBtnType = "delete";
    }

    return (
      <div className={"slide"}>
        <div className={`slide-content slide-${this.props.idx}`}>
          <div className="slide-content-top">
            <div className="challenge-img">
              <img src={this.props.challenge.challengeIcon} alt="" />
            </div>
            <h1 className="challenge-days-left">
              {this.calculateDaysLeft()} DAYS LEFT
            </h1>
            <h2 className="challenge-name">{this.props.challenge.name}</h2>
            <h2 className="challenge-descr">
              {this.props.challenge.description}
            </h2>
          </div>
          <div className="slide-content-bottom">
            <button
              onClick={this.handleClick(processBtnType)}
              className="submit-btn challenge-submit-btn"
            >
              {btnContext}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mSTP = (state) => {
  return {
    userChallenges: state.entities.userChallenges,
    sessionUser: state.entities.users[state.session.id],
  };
};

const mDTP = (dispatch) => {
  return {
    fetchUsersChallenges: (userId) => dispatch(fetchUsersChallenges(userId)),
    createUsersChallenge: (challengeId) =>
      dispatch(createUsersChallenge(challengeId)),
    removeUsersChallenge: (userChallengeId) =>
      dispatch(removeUsersChallenge(userChallengeId)),
  };
};

export default connect(mSTP, mDTP)(ChallengesIndexItem);
// export default ChallengesIndexItem;
