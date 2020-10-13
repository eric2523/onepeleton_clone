import React from 'react'
import ClassIndexItem from './class_index_item';

class ClassIndex extends React.Component {
  constructor(props) {
    super(props);
    this.categoryName = this.props.match.params.category
  }

  componentDidMount() {
    $(".session-background").addClass("main-light-grey-background");
    this.props.fetchCategoryClasses(this.categoryName)
  }

  componentWillUnmount() {
    $(".session-background").removeClass("main-light-grey-background");
  }

  render() {
    let classItems = Object.values(this.props.workoutClasses)
      .map((workoutClass) => (
        <ClassIndexItem 
          key={workoutClass.id} 
          workoutClass={workoutClass} />)
      )

    return (
    <div className="class-category-div">
      <h2 className="class-category-header">{ this.categoryName.toUpperCase() }</h2>
      <ul className="class-category-list">
        {classItems}
      </ul>
    </div>
    )
  }
}

export default ClassIndex;