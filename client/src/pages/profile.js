import React from "react";
import LineChart from "../components/Chart-Demo";
import Auth from "../utils/auth";
import lineChart from "../components/Chart-Demo";
// import ListTracker from "../components/TrackerList";
import NewTracker from "../components/NewTracker";

const Profile = () => {
  return (
    <div className="container">
      <h1>User Profile</h1>
      <div className="container">
        <h2>Trackers</h2>
        {/* <ListTracker /> */}
        <NewTracker />
      </div>
      <div className="container">
        <LineChart />
      </div>
    </div>
  );
};

export default Profile;
