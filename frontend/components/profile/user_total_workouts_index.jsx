import React from 'react'
import ProfCategoryList from './prof_category_list';
import {carrotRightSVG} from '../svgs/profile_over_svg'
import { Link } from 'react-router-dom'

class UserTotalWorkoutsIndex extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchAllCategories()
  }

  render(){
    let workoutCounts = Object.keys(this.props.userClasses).length
    let linkpath = "/profile/workouts";
    if (this.props.currUser !== this.props.sessionUser){
      linkpath = `/profile/workouts/${this.props.currUser.id}`
    }

    return (
      <div className="total-workouts-outmost-div">
        <div className={"total-workouts-div"}>
          <Link to={linkpath}>
            <div className="prof-workouts-top">
              <div className="total-workouts-count">
                <span className="followers-count workouts-count">
                  {workoutCounts}
                </span>
                <h1 className="prof-follows">
                  Total Workouts
                </h1>
              </div>

              <div className="view-workouts-div">
                <span className="view-workouts-title">View Workouts</span>
                <span className="carrot-svg">{ carrotRightSVG() }</span>
              </div>
            </div>
          </Link>

          <div className="prof-workouts-bottom">
            <ProfCategoryList 
              categories={this.props.categories} 
              workoutClasses={this.props.workoutClasses}
              fetchAllCategories={this.props.fetchAllCategories}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default UserTotalWorkoutsIndex;