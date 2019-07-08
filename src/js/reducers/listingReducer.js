const initialState = {
    isLoading: true,
    isError: false,
    isSidebarOpen: false,
    sidebarData: {},
    userData: []
  };
  const ListingReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_LOADING": {
        state = {
            ...state,
            isLoading : true,
          };
          break;
      }
      case "GET_USERS": {
        state = {
            ...state,
            isLoading : false,
            userData: [...action.payload]
          };
          break;
      }
      case "ERROR_USERS": {
        state = {
            ...state,
            isLoading : true,
            isError: true
          };
          break;
      }
      case "SET_SIDEBAR": {
        state = {
            ...state,
            isSidebarOpen: true,
            sidebarData: {...action.payload},
          };
          break;
      }
      case "CLOSE_SIDEBAR": {
        state = {
            ...state,
            isSidebarOpen: false
          };
          break;
      }
    }
    return state;
  };
  export default ListingReducer;
  