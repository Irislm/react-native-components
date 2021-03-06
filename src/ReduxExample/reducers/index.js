import { combineReducers } from 'redux';
import passengers from './passengers';
import pageHeader from './pageHeader';
import posts from './posts';
import selectedSubreddit from './selectedSubreddit';

const selectReducers = (reducers, initialState) => (state = initialState, action) => {
  const func = reducers[action.type];
  if (func) {
    return func(state, action);
  }
  return state;
};

export default combineReducers({
  passengers: selectReducers(passengers, [{
    name: '卢卡斯',
    id: 1,
    selected: false,
  }, {
    name: 'lili',
    id: 2,
    selected: false,
  }, {
    name: 'candy',
    id: 3,
    selected: false,
  }]),
  pageHeader: selectReducers(pageHeader, {
    title: 'iris',
  }),
  posts: selectReducers(posts, {
    isFetching: false,
    didInvalidate: false,
    items: [],
  }),
  selectedSubreddit: selectReducers(selectedSubreddit, 'reactjs'),
});
