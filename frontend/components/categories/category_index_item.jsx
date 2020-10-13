import React from 'react';

class CategoryIndexItem extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.categoryName = this.props.category.name.toLowerCase();
  }

  handleClick(e) {
    let currPath = this.props.ownProps.match.path 
    let nextPath = currPath.concat(`/${this.categoryName}`)
    this.props.ownProps.history.push(nextPath)
  }

  render() {
    return (
      <li onClick={this.handleClick} className="class-category-item">
        <div className={`cc-item cc-item-${this.categoryName}`}>
          <h2 className="category-item-title">{this.props.category.name}</h2>
        </div>
      </li>
    );

  }
}

export default CategoryIndexItem;