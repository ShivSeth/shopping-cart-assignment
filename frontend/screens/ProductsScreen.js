import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../actions/productsAction';
import { fetchCategory } from '../actions/categoryActions';
import './ProductsScreen.scss';
import { useHistory, useLocation } from 'react-router';
import Dropdown from '../components/Dropdown';

const ProductsScreen = () => {
  const history = useHistory();
  const location = useLocation();

  const products = useSelector((state) => state.products);
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const [selected, setSelected] = useState({ name: 'Select Category' });

  let sectionId = location.search.split('=')[1];
  let { categoryList } = category;
  let { error, loading, productsList } = products;

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchProducts());

    if (selected.id) {
      history.push(`?section=${selected.id}`);
    }
  }, [dispatch, selected]);
  return (
    <div className="products-page">
      <div className="side-menu">
        <ul className="menu-options">
          {categoryList ? (
            categoryList
              .filter((category) => category.enabled)
              .map((category) => (
                <li
                  tabIndex={0}
                  className={category.id === sectionId ? 'active-section' : ''}
                  key={category.id}
                  onClick={() => {
                    if (sectionId && sectionId === category.id) {
                      history.push('/products');
                    } else {
                      history.push(`?section=${category.id}`);
                    }
                  }}
                >
                  {category.name}
                </li>
              ))
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </div>
      <div className="side-menu-dropdown">
        {categoryList ? (
          <Dropdown
            selected={selected.name}
            setSelected={setSelected}
            dropdownOptions={categoryList.filter((c) => c.enabled)}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="product-content">
        {productsList ? (
          <div className="products-list">
            {productsList
              .filter((product) => {
                return sectionId ? sectionId === product.category : product;
              })
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        ) : error ? (
          <p>Error</p>
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
};

export default ProductsScreen;
