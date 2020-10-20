import React from 'react';
import {StrengthSVG, YogaSVG, MeditationSVG, CardioSVG, StretchingSVG, CyclingSVG} from '../svgs/categories_svg'
import { NavLink } from 'react-router-dom';

class CategoryNavbar extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="category-nav-div">
        <ul className="category-svg-list">
          <li key={0} className="svg-list-items">
            <NavLink
              to={this.props.categories.strength.path}
              activeClassName="svg-active"
            >
              <StrengthSVG />
              <h3 className="svg-title">
                {this.props.categories.strength.categoryName}
              </h3>
            </NavLink>
          </li>
          <li key={1} className="svg-list-items">
            <NavLink
              to={this.props.categories.yoga.path}
              activeClassName="svg-active"
            >
              <YogaSVG />
              <h3 className="svg-title">
                {this.props.categories.yoga.categoryName}
              </h3>
            </NavLink>
          </li>
          <li key={2} className="svg-list-items">
            <NavLink
              to={this.props.categories.meditation.path}
              activeClassName="svg-active"
            >
              <MeditationSVG />
              <h3 className="svg-title">
                {this.props.categories.meditation.categoryName}
              </h3>
            </NavLink>
          </li>
          <li key={3} className="svg-list-items">
            <NavLink
              to={this.props.categories.cardio.path}
              activeClassName="svg-active"
            >
              <CardioSVG />
              <h3 className="svg-title">
                {this.props.categories.cardio.categoryName}
              </h3>
            </NavLink>
          </li>
          <li key={4} className="svg-list-items">
            <NavLink
              to={this.props.categories.stretching.path}
              activeClassName="svg-active"
            >
              <StretchingSVG />
              <h3 className="svg-title">
                {this.props.categories.stretching.categoryName}
              </h3>
            </NavLink>
          </li>
          <li key={5} className="svg-list-items">
            <NavLink
              to={this.props.categories.cycling.path}
              activeClassName="svg-active"
            >
              <CyclingSVG />
              <h3 className="svg-title">
                {this.props.categories.cycling.categoryName}
              </h3>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default CategoryNavbar