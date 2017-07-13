import axios from 'axios';

const initUserState = {
  user: null,
  fetchingUser: false,
  fetchedUser: false,
  fetchError: null
};

const userReducer = (state = initUserState, action) => {
  switch (action.type) {
  case 'FETCH_USER_PENDING':
    return {
      ...state,
      fetchingUser: true,
      fetchedUser: false
    };
  case 'FETCH_USER_FUFILLED':
    return {
      ...state,
      fetchingUser: false,
      fetchedUser: true,
      user: action.payload
    };
  case 'FETCH_USER_REJECTED':
    return {
      ...state,
      fetchingUser: false,
      fetchedUser: true,
      fetchError: action.payload
    };
  default:
    return state;
  }
};

export default userReducer;
