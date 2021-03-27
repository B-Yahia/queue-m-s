import React, { useState } from "react";
import "./ServerPage.css";
import { useStateValue } from "../StateProvider/StateProvider";
import { Link } from "react-router-dom";
import numeral from "numeral";

const ServerPage = () => {
  const [{ waitingList, serviceList, servedList }, dispatch] = useStateValue();
  const [servedBy, setServedBy] = useState("");
  console.log("servedBy", servedBy);

  const moveToService = () => {
    if (waitingList.length !== 0) {
      if (serviceList.length === 0) {
        const customer = waitingList[0];
        const serviceStartedTime = Date.now();
        const updateWaitingList = waitingList.filter(
          (item) => item.id !== customer.id
        );
        const diffInSec = Math.round(
          (serviceStartedTime - customer.arrivingTime) / 1000
        );
        const updateCustomer = {
          ...customer,
          waitingDuration: diffInSec,
          serviceStartedTime: serviceStartedTime,
        };
        console.log(numeral(diffInSec).format("00:00:00"));
        const updateServiceList = [...serviceList, updateCustomer];
        dispatch({
          type: "MOVE_TO_SERVICE",
          waitingList: updateWaitingList,
          serviceList: updateServiceList,
        });
        // // servedCustomersDetails();
      } else {
        window.alert(
          "Please close the open ticket and then call another customer from the queue"
        );
      }
    } else {
      window.alert("Waiting list empty");
    }
  };

  const serviceFinished = () => {
    if (serviceList.length !== 0) {
      const customer = serviceList[0];
      const updateServiceList = serviceList.filter(
        (item) => item.id !== customer.id
      );
      const serviceFinishedTime = Date.now();
      const diffInSec = Math.round(
        (serviceFinishedTime - customer.serviceStartedTime) / 1000
      );
      const serviceDuration = diffInSec;
      const updateCustomer = {
        ...customer,
        serviceFinishedTime: serviceFinishedTime,
        serviceDuration: serviceDuration,
        servedBy: servedBy,
      };

      const updateServedList = [...servedList, updateCustomer];
      console.log("updateServedList", updateServedList);
      console.log("updateServiceList", updateServiceList);
      dispatch({
        type: "REMOVE_FROM_SERVICE",
        servedList: updateServedList,
        serviceList: updateServiceList,
      });
    } else {
      window.alert("Service List is empty");
    }
  };

  const serviceCustomerList = serviceList.map((item) => (
    <div key={item.id} className="serviceList">
      <h4>{item.name}</h4>
      <span>
        Waiting Time : {numeral(item.waitingDuration).format("00:00:00")}
      </span>
    </div>
  ));
  return (
    <div className="serverPage__container">
      <h1>Server</h1>
      <div className="serverPage">
        <Link to="/" className="back__home">
          back to home
        </Link>
        <div className="server">
          <label htmlFor="served_by" className="server__servedBy">
            Served By
            <input
              type="text"
              value={servedBy}
              onChange={(event) => setServedBy(event.target.value)}
            />
          </label>
          <div className="server__serviceClient">
            <button onClick={moveToService}>Next</button>
            {serviceCustomerList}
            <button onClick={serviceFinished}>CloseTheTicket</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServerPage;
