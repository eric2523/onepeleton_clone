import React from 'react'
import {
  StrengthSVG, 
  YogaSVG, 
  MeditationSVG,
  CardioSVG,
  CyclingSVG,
  StretchingSVG
} from '../svgs/categories_svg'

class ProfCategoryList extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <ul className="prof-workouts-category-list">
          <li key={0} className="prof-workout-c-li">
              <StrengthSVG />
              <h3>Strength</h3>
          </li>
          <li key={1} className="prof-workout-c-li">
              <YogaSVG />
              <h3>Yoga</h3>
          </li>
          <li key={2} className="prof-workout-c-li">
              <MeditationSVG />
              <h3>Meditation</h3>
          </li>
          <li key={3} className="prof-workout-c-li">
              <CardioSVG />
              <h3>Cardio</h3>
          </li>
          <li key={4} className="prof-workout-c-li">
              <StretchingSVG />
              <h3>Stretching</h3>
          </li>
          <li key={5} className="prof-workout-c-li">
              <CyclingSVG />
              <h3>Cycling</h3>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProfCategoryList;