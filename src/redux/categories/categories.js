// Actions
const CHECK_STATUS = 'bookStore/categories/CHECK_STATUS';

// Reducer
const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';

    default: return state;
  }
};

// Action Creators
const checkStatus = () => ({
  type: CHECK_STATUS,
});

export {
  reducer as default,
  checkStatus,
};
