import React from "react";
import LineChart from "../components/Chart-Demo";
import auth from "../utils/auth";
import lineChart from "../components/Chart-Demo";

const Profile = () => {
  return (
    <div className="container">
      <h1>User Profile</h1>
      <div className="container">
        <h2>User Data</h2>
        <LineChart />
        <p>
          This is your data from the last seven days, graphed so you can see how
          youre doing!
        </p>
      </div>
    </div>
  );
};

export default Profile;
