import React from "react";

class ChallengesInputs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let input = (
      <input
        className="slide-inputs"
        type="radio"
        name="slider"
        id={`slide-${this.props.idx}`}
      />
    );
    if (this.props.idx === 0) {
      input = (
        <input
          defaultChecked
          className="slide-inputs"
          type="radio"
          name="slider"
          id={`slide-${this.props.idx}`}
        />
      );
    }
    return (
      <>
      { input }
      </>
    );
  }
}

export default ChallengesInputs;
