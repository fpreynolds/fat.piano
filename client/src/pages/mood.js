import Select from "react-select";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import {ADD_MOOD} from "../utils/mutations";
import Auth from "../utils/auth";

function Mood() {
  const [addMood] = useMutation(ADD_MOOD);  
  const [selectedOption, setSelectedOption] = useState();
  const options = [
    {
      value: "thumbsUp",
      label: (
        <div>
         👍
        </div>
      )
    },
    {
      value: "meh",
      label: (
        <div>
          😐
        </div>
      )
    },
    {
      value: "thumbsDown",
      label: (
        <div>
          👎
        </div>
      )
    }
  ];

  const clickSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(selectedOption);
      const uid = Auth.getToken();
      const now = Date.now();
  
      const {data} = await addMood({
        variables: {uid,selectedOption,now},
      });
      console.log(uid);
      //const { token, mood } = data.addMood;
      //store mood or data token for chart etc???
    } catch (e) {
      console.log(e);
    }
  }
  const handleChange = e => {
      setSelectedOption(e.value);
  }
 
  return (
    <div className="App">
      <h3 className="mood">What is your mood today?</h3>
      <Select options={options} 
          value={options.find(obj => obj.value === selectedOption)} 
          onChange={handleChange}
      />
      <button type="submit" onClick={clickSubmit}>Submit Mood</button>
    </div>
  );
}
export default Mood;

/*
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { useMutation } from "@apollo/client";
import { ADD_MOOD } from "../utils/mutations";

function Mood({ close, show, mood, addMood }) {
  const [currentMood, setCurrentMood] = useState([
    <span class="thumbsUp">👍</span>,
    <span class="meh">😐</span>,
    <span class="thumbsDown">👎</span>,
  ]);

  return (
    <Modal show={show} onHide={close}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Current Mood</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mood">What is your mood today?</div>
          <p className="card-text">{mood}</p>
          <ul>
            <li>
              <Button class="up" onClick={() => addMood(3)}>
                {currentMood[0]}
              </Button>{" "}
            </li>
            <br />
            <li>
              <Button class="eh" onClick={() => addMood(2)}>
                {currentMood[1]}
              </Button>{" "}
            </li>
            <br />
            <li>
              <Button class="down" onClick={() => addMood(1)}>
                {currentMood[2]}{" "}
              </Button>{" "}
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={close}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

export default Mood;
*/