import ActionTypes from '../types';

const initialState = {
  themeColor: '',
};
export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_THEME_COLOR: {
      const themeColorId = action.payload;

      return {...state, themeColor: themeColorId};
    }

    default: {
      return {...state};
    }
  }
}
