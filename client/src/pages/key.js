import Select from "react-select";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_KEY } from "../utils/mutations";
import Auth from "../utils/auth";

function Key() {
  const [addKey] = useMutation(ADD_KEY);
  const [selectedOption, setSelectedOption] = useState();
  const options = [
    {
      value: "5",
      label: <div>👍</div>,
    },
    {
      value: 3,
      label: <div>😐</div>,
    },
    {
      value: "1",
      label: <div>👎</div>,
    },
  ];

  const clickSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(selectedOption);
      const uid = Auth.getToken();
      const timestamp = Date.now();

      const { data } = await addKey({
        variables: { uid, selectedOption, timestamp },
      });
      console.log(uid);
      //const { token, mood } = data.addMood;
      //store mood or data token for chart etc???
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = (e) => {
    setSelectedOption(e.value);
  };

  return (
    <div className="App">
      <h3 className="mood">What is your mood today?</h3>
      <Select
        options={options}
        value={options.find((obj) => obj.value === selectedOption)}
        onChange={handleChange}
      />
      <button type="submit" onClick={clickSubmit}>
        Submit Key
      </button>
    </div>
  );
}
export default Key;
