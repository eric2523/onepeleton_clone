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
    window.setTimeout(() => (
      $(".modal-background").addClass("modal-background-color")
    ), 3)
  }

  
  render(){
    let path = this.props.category.concat(this.props.classId)
    let date = new Date(this.props.workoutClass.date).toUTCString()
    const divStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${this.props.workoutClass.photoUrl})`,
    };
    return(
      <li onClick={this.handleClick} className="class-category-item class-list-cc">
        <div className={`cc-item-class`} style={divStyle}>
          {/* <img className="cc-item-class-pic" src={this.props.workoutClass.photoUrl} alt="workoutclass"/> */}
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