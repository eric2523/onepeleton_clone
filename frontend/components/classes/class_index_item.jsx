import React from 'react';

class ClassIndexItem extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.props.ownProps.history.push({
      pathname: `/classes/${this.props.category}/classDetails/${this.props.classId}`
    })
    this.props.openModal()
  }

  
  render(){
    let path = this.props.category.concat(this.props.classId)
    let date = new Date(this.props.workoutClass.date).toUTCString()

    return(
      <li onClick={this.handleClick} className="class-category-item class-list-cc">
        <div className={`cc-item-class cc-item-${path}`}>
          <div className="class-content-items">
            <h2>{this.props.workoutClass.skillLevel.toUpperCase()}</h2>
            <h2>{this.props.workoutClass.name}</h2>
            <h2>{this.props.category.toUpperCase()}</h2>
            <h2>{date}</h2>
          </div>
        </div>
      </li>
    )
  }
}

export default ClassIndexItem;