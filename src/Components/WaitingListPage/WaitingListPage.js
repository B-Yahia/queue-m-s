import React from "react";
import "./WaitingListPage.css";
import { useStateValue } from "../StateProvider/StateProvider";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid'

const WaitingListPage = () => {
  const [{ waitingList , serviceList }, dispatch] = useStateValue();
  const waitingCustomerList = waitingList.map((item, index) => (
    <h4>
      {index + 1} - {item.name}
    </h4>
  ));
  console.log(waitingCustomerList);

  return (
    <div className="waitingPage__container">
      <h1>Waiting List</h1>
      <div className="waitingPage">
        <Link to="/" className="back__home">
          Back to home
        </Link>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className="waitingList">
              {waitingList.length !== 0 ? (
                waitingList.map((item, index) => (
                  <h3 key={item.id} className="waitingList__item">
                    {index + 1} - {item.name}
                  </h3>
                ))
              ) : (
                <h2 className="empty__list">Waiting List is empty</h2>
              )}
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="cins">
              <h3>Please go to Counter</h3>
                <h2 className="empty__list">{serviceList.length !==0 ?(
                  serviceList.map((item) => (
                    
                    <h1 className="cins1" key={item.id}>{item.name}</h1>
                  ))
                ) : (
                  <h2>Please get ready</h2>
                )}</h2>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default WaitingListPage;
