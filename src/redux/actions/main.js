import {apiDelete, apiGet, apiPost} from '../../utils/utils';
import {
  USER_SEARCH,
  SEARCH,
  CHAT_API,
  GET_USER_MESSAGE,
} from '../../config/urls';
import types from '../types';
import store from '../store';
const {dispatch} = store;

//===================This function search user by text=============================//
export function search(searchText) {
  let geturl = `${SEARCH}` + '?name=' + `${searchText}`;
  return apiGet(geturl);
}

//===================This function search user by live location=============================//
export function searchNearMe(location) {
  let geturl =
    `${SEARCH}` +
    `?coordinates=["${location.longitude}","${location.latitude}"]`;
  return apiGet(geturl);
}

//===================This function get user chat list =============================//
export function chatApi() {
  let geturl = `${CHAT_API}` + `?limit=${5}&skip=${0}`;
  console.log(geturl, 'this is url');
  return apiGet(geturl);
}

//===================This function use for get chat history=============================//
export function getUserMessgeOneToOne(commonConversationId) {
  let geturl =
    `${GET_USER_MESSAGE}` + `?commonConversationId=${commonConversationId}`;
  console.log(geturl, 'this is url');
  return apiGet(geturl);
}
//===================This function for change theme color=============================//
export function changeThemeColor(themeColorId) {
  dispatch({
    type: types.CHANGE_THEME_COLOR,
    payload: themeColorId,
  });
}
