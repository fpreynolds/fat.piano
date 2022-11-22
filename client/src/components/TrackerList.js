import React, { useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import Key from "../pages/key";
import { QUERY_ALL_TRACKERS } from "../utils/queries";
import Tracker from "../pages/Tracker";

// const ListTracker = () => {
//   const [state, dispatch] = useStoreContext();
//   const [getTrackers, { data }] = useLazyQuery(QUERY_ALL_TRACKERS);

//   useEffect(() => {
//     if (data) {
//     }
//   });
//   return (
//     <div className="container">
//       <h1>Tracker List goes here</h1>
//     </div>
//   );
// };

// export default ListTracker;

//!Single Tracker
// import React, { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { useStoreContext } from "../utils/GlobalState";
// import LineChart from "../components/Chart-Demo";
// import Mood from "./mood";
// import { QUERY_TRACKERS } from "../utils/queries";

// const SingleTracker = ({ theme }) => {
//   const [, dispatch] = useStoreContext();
// };
