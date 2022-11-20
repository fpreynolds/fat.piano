import Select from "react-select";
import React, { useState } from "react";

  function Mood() {
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

  return (
    <div className="App">
      <Select value={selectedOption} options={options} />
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