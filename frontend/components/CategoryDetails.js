import React, { Fragment } from 'react';
import { useHistory } from 'react-router';
import './CategoryDetails.scss';
const CategoryDetails = ({ categoryList }) => {
  const history = useHistory();
  return (
    <div className="category-details">
      {categoryList
        .filter((category) => category.enabled === true)
        .map((category) => (
          <div key={category.key} className="category">
            <img src={category.imageUrl} alt={category.name} />
            <div className="category-info">
              <h2>{category.name}</h2>
              <p>{category.description}</p>
              <button
                disabled={!category.enabled}
                onClick={() => history.push(`/products?section=${category.id}`)}
              >{`Explore ${category.name}`}</button>
            </div>
            <div className="bottom-gradient"></div>
          </div>
        ))}
    </div>
  );
};

export default CategoryDetails;
