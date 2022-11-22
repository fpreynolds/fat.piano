import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import LineChart from "../components/Chart-Demo";
import Key from "./key";
const Tracker = () => {
  return (
    <div className="container">
      <h1>Trackers</h1>
      <LineChart />
    </div>
  );
};

export default Tracker;
