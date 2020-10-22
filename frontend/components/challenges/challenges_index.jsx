import React from "react";
import { fetchAllChallenges } from "../../actions/challenges/challenges_action";
import { connect } from "react-redux";
import ChallengesLabels from "./challenges_labels";
import ChallengesIndexItem from "./challenges_index_item";
import ChallengesInputs from "./challenges_inputs";
import { carrotRightSVG, carrotLeftSVG } from "../svgs/profile_over_svg";

class ChallengesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.throttle = this.throttle.bind(this);
  }

  componentDidMount() {
    $(".session-background").addClass("main-light-grey-background");
    this.props.fetchAllChallenges();
  }

  componentWillUnmount() {
    $(".session-background").removeClass("main-light-grey-background");
  }

  handleControl(type) {
    return (e) => {
      let marginLeft = $(".slide-inner").css("margin-left");
      let marginValue = parseInt(marginLeft);
      if (type === "right") {
        marginValue !== -1740 ? (marginValue -= 870) : (marginValue = 0);
      } else {
        marginValue !== 0 ? (marginValue += 870) : (marginValue = -1740);
      }
      $(".slide-inner").css("margin-left", marginValue);
    };
  }

  throttle(callback, limit) {
    let wait = false; 
    return function () {
      if (!wait) {
        callback.call(); 
        wait = true; 
        setTimeout(function () {
          wait = false; 
        }, limit);
      }
    };
  }

  render() {
    let challenges = Object.values(this.props.challenges);
    let challengesList = [];
    if (challenges.length) {
      challenges.forEach((challenge, idx) => {
        challengesList.push(
          <ChallengesIndexItem
            idx={idx}
            key={challenge.id}
            challenge={challenge}
          />
        );
      });
    }

    return (
      <div className="carousel-div">
        <div className="gradient-overlay">
          <section className="controls">
            <div
              onClick={this.throttle(this.handleControl("left"), 800)}
              className="slide-control-left"
            >
              {carrotLeftSVG()}
            </div>
            <div
              onClick={this.throttle(this.handleControl("right"), 800)}
              className="slide-control-right"
            >
              {carrotRightSVG()}
            </div>
          </section>
        </div>
        <div className="carousel">
          <section className="slides">
            <div className="slide-overflow">
              <div className="slide-inner">{challengesList}</div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

const mSTP = (state) => ({
  challenges: state.entities.challenges,
});

const mDTP = (dispatch) => ({
  fetchAllChallenges: () => dispatch(fetchAllChallenges()),
});

export default connect(mSTP, mDTP)(ChallengesIndex);
