import React from 'react' 
import UpcomingClassesItem from './upcoming_class_item'

class UpcomingClassesRow extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchMostRecentClasses()
      .then(() =>  this.props.fetchUsersClasses()
        .then(() => this.props.fetchAllCategories())
      );
  }

  render(){
    let upcomingClasses = null;
    if (Object.values(this.props.categories).length) {
      upcomingClasses = Object.values(this.props.workoutClasses)
        .map((workoutClass) => (
          <UpcomingClassesItem 
            key={workoutClass.id} 
            workoutClass={workoutClass} 
            categoryName={this.props.categories[workoutClass.categoryId].name}
            followingClass={Boolean(this.props.userClasses[workoutClass.id])}
            userClasses={this.props.userClasses}
            followClass={this.props.followClass}
            unfollowClass={this.props.unfollowClass}
            fetchUsersClasses={this.props.fetchUsersClasses}
          />
        ))
    }
    
    return (
      <div className="upcoming-classes-div">
        <ol className="upcoming-classes-list">
          <h1 className="upcoming-classes-header">
            Live
            <span>&amp;</span>Upcoming
          </h1>
          {upcomingClasses}
        </ol>
      </div>
    );
  }
}

export default UpcomingClassesRow;