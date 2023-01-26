import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const CategoriesPage = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const checkStatusHandler = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <button type="button" onClick={checkStatusHandler}>CHECK STATUS</button>
      <p>{categories}</p>
    </div>
  );
};

export default CategoriesPage;
