import React, { useState } from "react";
import { useStateValue } from "../StateProvider/StateProvider";
import { Link } from "react-router-dom";
import "./WelcomePage.css";

const WelcomePage = () => {
  const [{ waitingList, customer }, dispatch] = useStateValue();
  const [customerName, setCustomerName] = useState("");

  console.log("waitList", waitingList);

  const addToQueue = (event) => {
    event.preventDefault();
    const newCustomer = {
      ...customer,
      id: Date.now(),
      name: customerName,
      arrivingDate: new Date(Date.now()),
      arrivingTime: Date.now(),
    };
    if (newCustomer.name !== "") {
      const updateWaitingList = [...waitingList, newCustomer];
      console.log(updateWaitingList);
      dispatch({
        type: "ADD_COSTUMER",
        waitingList: updateWaitingList,
      });
      setCustomerName("");
    } else {
      window.alert("The input field is empty.Please write your name");
    }
  };
  return (
    <div className="welcomePage__container">
      <h1>Welcome in "The company name"</h1>
      <div className="welcomePage">
        <Link to="/" className="back__home">
          Back to home
        </Link>

        <form className="welcomePage__form" onSubmit={addToQueue}>
          <input
            placeholder="Type your name"
            className="form__input"
            value={customerName}
            onChange={(event) => setCustomerName(event.target.value)}
          />
          <button type="submit" className="form__button">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default WelcomePage;
