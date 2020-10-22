import React from 'react'
import { connect } from 'react-redux'
import { ThumbsUpSVG } from '../../components/svgs/modal_svg'
import { followClass, unfollowClass, fetchUsersClasses } from '../../actions/user_workout_classes_actions/user_workout_classes_action';
import { fetchClassSongs } from '../../actions/songs_actions/songs_action';
import { fetchSong } from '../../actions/spotify_api_actions';
import ModalSongsContainer from './songs_container'
import { fetchCategoryClasses } from '../../actions/class_actions/class_actions';

class ClassDetailsModal extends React.Component {
  constructor(props){
    super(props)
    this.state = { followsClass: null, loaded: false }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    let that = this;
    
    this.props.fetchUsersClasses(this.props.currUser.id)
    .then(() => {
      let followsClass = Object.keys(that.props.userClasses).includes(that.props.classId);
      that.setState({followsClass})
      this.props.fetchClassSongs(this.props.classId)  
    })
  }

  componentDidUpdate(prevProps){
    if (this.props.workoutClassSongs !== prevProps.workoutClassSongs) {
      this.setState({loaded: true})
    }
  }

  componentWillUnmount(){
    debugger
  }

  handleClick(e) {
    if (this.state.followsClass) {
      this.setState({followsClass: false})
      this.props.unfollowClass(this.props.classId)
    } else {
      this.setState({followsClass: true})
      this.props.followClass(this.props.classId)
    }
  }

  render(){
    let date = new Date(this.props.workoutClass.date).toUTCString();
    const divStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${this.props.workoutClass.photoUrl})`,
    };

    let btnContent = "";
    (this.state.followsClass) ? (btnContent = "CANCEL") : (btnContent = "JOIN");

    let modalSongs = null;
    if (this.state.loaded) {
      modalSongs = (
        <ModalSongsContainer
          classSongs={Object.values(this.props.workoutClassSongs)}
        />
      );
    }

    return (
      <div className="class-details-modal">
        <div className="class-detail-hero-img" style={divStyle}>
          <div className="class-content-items modal-content-items">
            <h2>{this.props.workoutClass.skillLevel.toUpperCase()}</h2>
            <h2>{this.props.workoutClass.name}</h2>
            <h2>{this.props.category.name.toUpperCase()}</h2>
            <h2>{date}</h2>
          </div>
          <button onClick={this.handleClick} className="submit-btn">
            {btnContent}
          </button>
        </div>
        <div className="modal-main-content">
          <ModalClassRatings />
          <ModalClassDescription
            description={this.props.workoutClass.description}
          />
          {modalSongs}
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
    userClasses: state.entities.userClasses,
    workoutClassSongs: state.entities.workoutClassSongs,
    spotifySongs: state.entities.songs,
    accessToken: window.localStorage.spotToken,
    currUser: state.entities.users[state.session.id]
  })
}

const mDTP = (dispatch) => {
  return {
    followClass: (classId) => dispatch(followClass(classId)),
    unfollowClass: (classId) => dispatch(unfollowClass(classId)),
    fetchUsersClasses: (userId) => dispatch(fetchUsersClasses(userId)),
    fetchClassSongs: (classId) => dispatch(fetchClassSongs(classId)),
    fetchSpotifySong: (accessToken, songTitle) => dispatch(fetchSong(accessToken, songTitle)),
    fetchCategoryClasses: (categoryname) => dispatch(fetchCategoryClasses(categoryName))
  };
} 

export default connect(mSTP, mDTP)(ClassDetailsModal)