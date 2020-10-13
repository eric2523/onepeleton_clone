import React from 'react';

class CategoryIndexItem extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <li className="class-category-item">
        <div className={`cc-item cc-item-${this.props.category.name.toLowerCase()}`}>
          <h2 className="category-item-title">{this.props.category.name}</h2>
        </div>
      </li>
    );

  }
}

export default CategoryIndexItem;