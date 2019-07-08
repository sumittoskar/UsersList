
export function loadingUsers(loading) {
    return {
      type: "SET_LOADING",
      payload: loading
    };
  }
  
  
  export function getUsers(users) {
      return {
        type: "GET_USERS",
        payload: users
      };
    }
  
    export function errorMessage() {
      return {
        type: "ERROR_USERS"
      };
    }
    
    export function setSidebar(usersData) {
      return {
        type: "SET_SIDEBAR",
        payload: usersData
      };
    }
  
    export function closeSidebar() {
      return {
        type: "CLOSE_SIDEBAR"
      };
    }
      