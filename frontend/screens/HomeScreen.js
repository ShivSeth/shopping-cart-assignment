import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryDetails from '../components/CategoryDetails';
import { fetchCategory } from '../actions/categoryActions';
import { fetchBanners } from '../actions/bannersActions';
import Carousel from '../components/Carousel';
import { isEmpty } from 'lodash';
const HomeScreen = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const banners = useSelector((state) => state.banners);
  let { error, loading, categoryList } = category;

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchBanners());
  }, [dispatch]);

  return categoryList ? (
    <>
      {!isEmpty(banners) && <Carousel banners={banners} />}
      <CategoryDetails categoryList={categoryList} />
    </>
  ) : error ? (
    <p>Error Occurred {error.toString()}</p>
  ) : (
    <p>Loading</p>
  );
};
export default HomeScreen;
