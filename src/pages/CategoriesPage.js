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
    <div className="cat-page">
      <button className="roboto-700 enfasis-button check-button" type="button" onClick={checkStatusHandler}>CHECK STATUS</button>
      <p className="montserrat-700 cat-msg">{categories}</p>
    </div>
  );
};

export default CategoriesPage;
