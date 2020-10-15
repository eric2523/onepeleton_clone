import React from 'react'
import { connect } from 'react-redux'
import { ThumbsUpSVG } from '../../components/svgs/modal_svg'

class ClassDetailsModal extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    let date = new Date(this.props.workoutClass.date).toUTCString();
    return (
      <div className="class-details-modal">
        {/* need to attach img to backend to fetch correct img per class */}
        <div className="class-detail-hero-img cc-item-strength1">
          <div className="class-content-items modal-content-items">
            <h2>{this.props.workoutClass.skillLevel.toUpperCase()}</h2>
            <h2>{this.props.workoutClass.name}</h2>
            <h2>{this.props.category.name.toUpperCase()}</h2>
            <h2>{date}</h2>
          </div>
        </div>
        <div className="modal-main-content">
          <ModalClassRatings />
          <ModalClassDescription description={this.props.workoutClass.description} />
        </div>
      </div>
    );
  }
}

const ModalClassRatings = () => (
  <div className="modal-class-ratings">
    <LeftClassRatings />
    <RightClassRatings />
  </div>
);

const LeftClassRatings = () => (
  <div className="left-class-ratings">
    {/* need to calculate based off backend db later  */}
    <span className="percentage-num">99.4</span>
    <span className="percentage">%</span>
    <span className="thumbs-up">
      <ThumbsUpSVG />
    </span>
    {/* need to link w/ backend later for rattings */}
    <p className="class-ratings">1,613 Ratings</p>
  </div>
);

const RightClassRatings = () => (
  <div className="right-class-ratings">
    {/* need to calculate based off backend db later  */}
    <span className="percentage-num">7.3</span>
    <span className="percentage">/10</span>
    {/* need to link w/ backend later for rattings */}
    <p className="class-ratings">Difficulty</p>
  </div>
);

const ModalClassDescription = (props) => (
  <div className="class-description">
    <p className="description-content">
      {props.description}
    </p>
  </div>
)

const mSTP = (state, ownProps) => {
  let workoutClass = state.entities.workoutClasses[ownProps.classId];
  return ({
    workoutClass,
    category: state.entities.categories[workoutClass.categoryId]
  })
}

export default connect(mSTP, null)(ClassDetailsModal)

