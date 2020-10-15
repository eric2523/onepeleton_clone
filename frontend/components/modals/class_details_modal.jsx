import React from 'react'
import { connect } from 'react-redux'
import { ThumbsUpSVG } from '../../components/svgs/modal_svg'
import { followClass, unfollowClass, fetchUsersClasses } from '../../actions/user_workout_classes_actions/user_workout_classes_action';

class ClassDetailsModal extends React.Component {
  constructor(props){
    super(props)
    this.state = { followsClass: null }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    let that = this;
    this.props.fetchUsersClasses()
      .then(() => {
        let followsClass = 
        Object.keys(that.props.userClasses)
        .includes(that.props.classId);
        that.setState({followsClass})
      });
  }

  handleClick(e) {
    if (this.state.followsClass) {
      this.setState({followsClass: false})
      this.props.unfollowClass(this.props.classId)
        // .then(() => (
        // ))
    } else {
      this.setState({followsClass: true})
      this.props.followClass(this.props.classId)
        // .then(() => (
        // ))
    }
  }

  render(){
    let date = new Date(this.props.workoutClass.date).toUTCString();
    const divStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${this.props.workoutClass.photoUrl})`,
    };

    let btnContent = "";
    (this.state.followsClass) ? (btnContent = "CANCEL") : (btnContent = "JOIN");

    return (
      <div className="class-details-modal">
        {/* need to attach img to backend to fetch correct img per class */}
        <div className="class-detail-hero-img" style={divStyle}>
          <div className="class-content-items modal-content-items">
            <h2>{this.props.workoutClass.skillLevel.toUpperCase()}</h2>
            <h2>{this.props.workoutClass.name}</h2>
            <h2>{this.props.category.name.toUpperCase()}</h2>
            <h2>{date}</h2>
          </div>
          <button onClick={this.handleClick} className="submit-btn">{btnContent}</button>
        </div>
        <div className="modal-main-content">
          <ModalClassRatings />
          <ModalClassDescription
            description={this.props.workoutClass.description}
          />
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
    category: state.entities.categories[workoutClass.categoryId],
    userClasses: state.entities.userClasses
  })
}

const mDTP = (dispatch) => {
  return ({
    followClass: (classId) => dispatch(followClass(classId)),
    unfollowClass: (classId) => dispatch(unfollowClass(classId)),
    fetchUsersClasses: () => dispatch(fetchUsersClasses())
  })
} 

export default connect(mSTP, mDTP)(ClassDetailsModal)

