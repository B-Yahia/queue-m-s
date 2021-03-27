export const initialState = {
    waitingList: [],
    serviceList: [],
    servedList: [],
    customer: {
      id: "",
      name: "",
      arrivingDate: "",
      arrivingTime: 0,
      serviceStartedTime: 0,
      serviceFinishedTime: 0,
      leavingTime: 0,
      waitingDuration: 0,
      serviceDuration: 0,
      servedBy: "",
    },
    servedCustomers: {
      numberOfCustomersServed: 0,
      averageWaitingDuration: 0,
      averageServiceDuration: 0,
      totalWaitingTime: 0,
      totalServiceTime: 0,
    },
  };
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_COSTUMER":
        return {
          ...state,
          waitingList: action.waitingList,
        };
        break;
      case "MOVE_TO_SERVICE":
        return {
          ...state,
          waitingList: action.waitingList,
          serviceList: action.serviceList,
        };
        break;
      case "REMOVE_FROM_SERVICE":
        return {
          ...state,
          serviceList: action.serviceList,
          servedList: action.servedList,
        };
      case "SERVED_COSTUMERS_DETAILS":
        return {
          ...state,
          servedCustomers: action.servedCustomers,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  