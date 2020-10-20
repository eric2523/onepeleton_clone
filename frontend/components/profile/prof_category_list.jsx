import React from 'react'
import {
  StrengthSVG, 
  YogaSVG, 
  MeditationSVG,
  CardioSVG,
  CyclingSVG,
  StretchingSVG
} from '../svgs/categories_svg'
import { categoryCountSelector } from '../../selectors/category_count_selector';
import { connect } from 'react-redux'

class ProfCategoryList extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <ul className="prof-workouts-category-list">
          <li key={0} className="prof-workout-c-li">
            <div className="prof-category-svg-div">
              <StrengthSVG />
              <h3 className="prof-workout-c-title">Strength</h3>
            </div>
            <h3 className="category-count-num">
              {this.props.categoryCount[1]}
            </h3>
          </li>
          <li key={1} className="prof-workout-c-li">
            <div className="prof-category-svg-div">
              <CyclingSVG />
              <h3 className="prof-workout-c-title">Cycling</h3>
            </div>
            <h3 className="category-count-num">
              {this.props.categoryCount[2]}
            </h3>
          </li>
          <li key={2} className="prof-workout-c-li">
            <div className="prof-category-svg-div">
              <MeditationSVG />
              <h3 className="prof-workout-c-title">Meditation</h3>
            </div>
            <h3 className="category-count-num">
              {this.props.categoryCount[3]}
            </h3>
          </li>
          <li key={3} className="prof-workout-c-li">
            <div className="prof-category-svg-div">
              <CardioSVG />
              <h3 className="prof-workout-c-title">Cardio</h3>
            </div>
            <h3 className="category-count-num">
              {this.props.categoryCount[4]}
            </h3>
          </li>
          <li key={4} className="prof-workout-c-li">
            <div className="prof-category-svg-div">
              <YogaSVG />
              <h3 className="prof-workout-c-title">Yoga</h3>
            </div>
            <h3 className="category-count-num">
              {this.props.categoryCount[5]}
            </h3>
          </li>
          <li key={5} className="prof-workout-c-li">
            <div className="prof-category-svg-div">
              <StretchingSVG />
              <h3 className="prof-workout-c-title">Stretching</h3>
            </div>
            <h3 className="category-count-num">
              {this.props.categoryCount[6]}
            </h3>
          </li>
        </ul>
      </div>
    );
  }
}

const mSTP = (state, ownProps) => {
  return {
    categoryCount: categoryCountSelector(
      ownProps.workoutClasses,
      ownProps.categories
    ),
  };
}

export default connect(mSTP, null)(ProfCategoryList);
