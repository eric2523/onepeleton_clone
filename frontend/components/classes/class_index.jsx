import React from 'react'

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
    return (
    <div className="class-category-div">
      <h2 className="class-category-header">{ this.categoryName.toUpperCase() }</h2>
    </div>
    )
  }
}

export default ClassIndex;