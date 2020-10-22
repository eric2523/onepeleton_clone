import React from "react";

class ChallengesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.calculateDaysLeft = this.calculateDaysLeft.bind(this)
  }

  calculateDaysLeft(){
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    let difference = new Date(this.props.challenge.endDate) - new Date(this.props.challenge.startDate)
    return Math.round(difference / millisecondsPerDay)
  }

  render() {
    return (
      <div className={"slide"}>
        <div className={`slide-content slide-${this.props.idx}`}>
          <div className="slide-content-top">
            <div className="challenge-img">
              <img src={this.props.challenge.challengeIcon} alt=""/>
            </div>
            <h1 className="challenge-days-left">{this.calculateDaysLeft()} DAYS LEFT</h1>
            <h2 className="challenge-name">{this.props.challenge.name}</h2>
            <h2 className="challenge-descr">{this.props.challenge.description}</h2>
          </div>
          <div className="slide-content-bottom">
            <button className="submit-btn challenge-submit-btn">
              JOIN
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ChallengesIndexItem;
