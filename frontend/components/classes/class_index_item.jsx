import React from 'react';

class ClassIndexItem extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <li className="class-category-item">
        <div className={`cc-item `}>
          <h2>{this.props.workoutClass.name}</h2>
          <h2>{this.props.workoutClass.date}</h2>
          <h2>{this.props.workoutClass.skillLevel}</h2>
        </div>
      </li>
    )
  }
}

export default ClassIndexItem;