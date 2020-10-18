import React from 'react'
import ClassIndexItem from './class_index_item';
import CategoryNavbar from './category_navbar';
import { CategoryNavContainer } from '../categories/category_container';

class ClassIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(".session-background").addClass("main-light-grey-background");
    this.props.fetchCategoryClasses(this.props.match.params.category);
  }

  componentDidUpdate(prevProps){
    if (this.props.match.url !== prevProps.match.url ) {
      this.props.fetchCategoryClasses(this.props.match.params.category);
    }
  }

  componentWillUnmount() {
    $(".session-background").removeClass("main-light-grey-background");
  }

  render() {
    let classItems = Object.values(
      this.props.workoutClasses
    ).map((workoutClass) => (
      <ClassIndexItem
        key={workoutClass.id}
        workoutClass={workoutClass}
        classId={workoutClass.id}
        category={this.props.match.params.category}
        openModal={this.props.openModal}
        ownProps={this.props.ownProps}
      />
    ));

    return (
      <div className="class-category-div">
        <header>
          <CategoryNavContainer />
        </header>
        <h2 className="class-category-header">
          {this.props.match.params.category.toUpperCase()}
        </h2>
        <div className="class-category-list-div">
          <ul className="class-category-list">{classItems}</ul>
        </div>
      </div>
    );
  }
}

export default ClassIndex;