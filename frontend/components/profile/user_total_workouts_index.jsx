import React from 'react'
import ProfCategoryList from './prof_category_list';

class UserTotalWorkoutsIndex extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
  }

  render(){
    let workoutCounts = Object.keys(this.props.userClasses).length

    return (
      <div className="total-workouts-outmost-div">
        <div className="total-workouts-div">
          <div className="prof-workouts-top">
            <div className="total-workouts-count">
              <span className="followers-count workouts-count">
                {workoutCounts}
              </span>
              <h1 className="prof-follows">
                Total Workouts
              </h1>
            </div>
          </div>

          <div className="prof-workouts-bottom">
            <ProfCategoryList workoutClasses={this.props.workoutClasses}/>
          </div>
        </div>
      </div>
    );
  }
}

export default UserTotalWorkoutsIndex;