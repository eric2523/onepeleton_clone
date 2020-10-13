import React from 'react';

const ClassIndexItem = (props) => {
  return (
    <li className="class-category-item">
      <div className={`cc-item cc-item-${props.category.name.toLowerCase()}`}>
        <h2 className="category-item-title">{props.category.name}</h2>
      </div>
    </li>
  );
}

export default ClassIndexItem;