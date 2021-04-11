import { apiDelete, apiGet, apiPost, apiPut, clearUserData, getItem, getUserData, setItem, setUserData , } from '../../utils/utils';
import { OTP_VERIFY ,LOGIN ,USER_SEARCH,SEARCH,CHAT_API,GET_USER_MESSAGE} from '../../config/urls';
import types from '../types';
import store from '../store';

const {dispatch}=store;
export function loginWithOTP(data = {}) {
  return new Promise((resolve, reject) => {
    apiPost(LOGIN, data).then(res => {
      resolve(res);
    }).catch(error => {
      reject(error);
    })
  })

}
// export function search(searchText,location) {
// let geturl=`${SEARCH}`+"?name="+`${searchText}`
//    return apiGet(geturl)
// }
// export function searchNearMe(location) {
//   let geturl=`${SEARCH}`+`?coordinates=["${location.longitude}","${location.latitude}"]`
//      return apiGet(geturl)
//   }
//   export function chatApi() {
//     let geturl=`${CHAT_API}`+`?limit=${5}&skip=${0}`
//     console.log(geturl,'this is url')
//        return apiGet(geturl)
//     }
//     export function getUserMessgeOneToOne(commonConversationId) {
//       let geturl=`${GET_USER_MESSAGE}`+`?commonConversationId=${commonConversationId}`
//       console.log(geturl,'this is url')
//          return apiGet(geturl)
//       }
export function OTPVerify(data = {}) {
  return new Promise((resolve, reject) => {
    apiPost(OTP_VERIFY, data).then(res => {
    
      setUserData(res.data).then(suc=>{
      
          dispatch({
              type:types.OTP_VERIFY,
              payload:res.data
          })
      })
      resolve(res);
    }).catch(error => {
      reject(error);
    })
  })
}
export const onLogout=()=>{
  clearUserData();
  dispatch({
  type:types.ON_LOGOUT,
})

}
export function UserData(data = {}) {
  return new Promise((resolve, reject) => {
    apiPost(USER_SEARCH , data).then(res => {
    
      console.log(res , "User Data")

      resolve(res);
    }).catch(error => {
      reject(error);
    })
  })

}
// export function ChangeThemeColor(themeColorId) {
//   dispatch({
//     type:types.CHANGE_THEME_COLOR,
//     payload:themeColorId
//   })
// }




