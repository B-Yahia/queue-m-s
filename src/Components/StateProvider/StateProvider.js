import { createContext, useContext, useReducer } from "react";

//THIS IS A DATA LAYER
export const StateContext = createContext();

//BUILD A PROVIDER

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// THIS IS HOW WE USE IT INSIDE COMPONENT

export const useStateValue = () => {
  return useContext(StateContext);
};
