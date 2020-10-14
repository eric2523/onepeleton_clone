import React from 'react';
import {StrengthSVG, YogaSVG, MeditationSVG, CardioSVG, StretchingSVG, CyclingSVG} from '../svgs/categories_svg'
import { NavLink } from 'react-router-dom';

class CategoryNavbar extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchAllCategories();
  }

  render() {
    return (
      <div className="category-nav-div">
        <ul className="category-svg-list">
          <li key={0} className="svg-list-items">
            <NavLink to="/classes/strength" activeClassName="svg-active">
              <StrengthSVG />
              <h3 className="svg-title">Strength</h3>
            </NavLink>
          </li>
          <li key={1} className="svg-list-items">
            <NavLink to="/classes/yoga" activeClassName="svg-active">
              <YogaSVG />
              <h3 className="svg-title">Yoga</h3>
            </NavLink>
          </li>
          <li key={2} className="svg-list-items">
            <NavLink to="/classes/meditation" activeClassName="svg-active">
              <MeditationSVG />
              <h3 className="svg-title">Meditation</h3>
            </NavLink>
          </li>
          <li key={3} className="svg-list-items">
            <NavLink to="/classes/cardio" activeClassName="svg-active">
              <CardioSVG />
              <h3 className="svg-title">Cardio</h3>
            </NavLink>
          </li>
          <li key={4} className="svg-list-items">
            <NavLink to="/classes/stretching" activeClassName="svg-active">
              <StretchingSVG />
              <h3 className="svg-title">Stretching</h3>
            </NavLink>
          </li>
          <li key={5} className="svg-list-items">
            <NavLink to="/classes/cycling" activeClassName="svg-active">
              <CyclingSVG />
              <h3 className="svg-title">Cycling</h3>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default CategoryNavbar