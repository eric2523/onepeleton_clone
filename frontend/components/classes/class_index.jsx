import React from 'react'
import ClassIndexItem from './class_index_item'

class ClassIndex extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    $(".session-background").addClass("main-light-grey-background")
    this.props.fetchAllCategories()
  }

  componentWillUnmount(){
    $(".session-background").removeClass("main-light-grey-background");
  }

  render(){
    let categoryItems = Object.values(this.props.categories)
      .map((category) => <ClassIndexItem key={category.id} category={category} />)

    return (
      <div className="class-category-div">
        <h2 className="class-category-header">Browse Classes</h2>
        <ul className="class-category-list">
          {categoryItems}
        </ul>
      </div>
    )
  }
}

export default ClassIndex;