//! Global state not used in current build
// import React, { createContext, useContext } from "react";
// import { useTrackerReducer } from "./reducers";

// const StoreContext = createContext();
// const { Provider } = StoreContext;

// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useTrackerReducer({
//     trackers: [],
//     keys: [],
//   });

//   return <Provider value={[state, dispatch]} {...props} />;
// };

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };
