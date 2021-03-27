import React from "react";
import "./AdminPage.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import numeral from "numeral";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const AdminPage = () => {
  const [{ servedList ,waitingList }, dispatch] = useStateValue();
  const totalWaitingDuration = servedList
    ?.map((item) => item.waitingDuration)
    ?.reduce((total, next) => total + next, 0);

  console.log(servedList?.map((item) => item.waitingDuration));
  const totalServiceDuration = servedList
    ?.map((item) => item.serviceDuration)
    ?.reduce((total, next) => total + next, 0);

  const avrgWaitingDuration = Math.round(
    totalWaitingDuration / servedList.length
  );
  const avrgServiceDuration = Math.round(
    totalServiceDuration / servedList.length
  );

  const servedCustomers = {
    numberOfCustomersServed: servedList.length,
    averageWaitingDuration: avrgWaitingDuration,
    averageServiceDuration: avrgServiceDuration,
    totalWaitingTime: totalWaitingDuration,
    totalServiceTime: totalServiceDuration,
  };
  console.log("servedCustomers", servedCustomers);
  // dispatch({
  //   type: "SERVED_COSTUMERS_DETAILS",
  //   servedCustomers: servedCustomers,
  // });

  const columns = [
    { id: "name", label: "Name", minWidth: 170 },
    {
      id: "arrivingDate",
      label: "Date",
      minWidth: 70,
      align: "right",
      format: (value) => value.toLocaleString(),
    },
    {
      id: "waitingDuration",
      label: "Waiting Duration",
      minWidth: 70,
      align: "right",
      format: (value) => numeral(value).format("00:00:00"),
    },
    {
      id: "serviceDuration",
      label: "Service Duration",
      minWidth: 70,
      align: "right",
      format: (value) => numeral(value).format("00:00:00"),
    },
    {
      id: "servedBy",
      label: "Server Name",
      minWidth: 70,
      align: "right",
    },
  ];

  const rows = [...servedList];

  return (
    <div className="adminPage__container">
      <h1>Admin</h1>
      <div className="adminPage">
        <Link to="/" className="back__home">
          Back to home
        </Link>
        <div className="admin">
          <div className="admin__info">
            <p className="detail-info">
              <span className="detail-info-text">The nuber of customers in the queue :</span>
              <span className="detail-info-value" >
              {waitingList.length}
              </span>
            </p>
            <p className="detail-info" >
              <span className="detail-info-text" >The Totale served cutomers for the shift is :</span>
              <span className="detail-info-value" >{servedCustomers.numberOfCustomersServed}</span>
  
            </p>
            <p className="detail-info">
              <span className="detail-info-text">The average waiting time for customers :</span>
              <span className="detail-info-value" >
              {numeral(servedCustomers.averageWaitingDuration).format("00:00:00")}
              </span>
              
            </p>
            <p className="detail-info">
              <span className="detail-info-text">The average service time for customers :</span>
              <span className="detail-info-value" >
              {numeral(servedCustomers.averageServiceDuration).format(
                "00:00:00"
              )}
              </span>
              
            </p>
            <p className="detail-info">
              <span className="detail-info-text">The total waiting time for customers :</span>
              <span className="detail-info-value" >
              {numeral(servedCustomers.totalWaitingTime).format("00:00:00")}
              </span>
              
            </p>
            <p className="detail-info">
              <span className="detail-info-text">The total service time for customers :</span>
              <span className="detail-info-value" >
              {numeral(servedCustomers.totalServiceTime).format("00:00:00")}
              </span>
              
            </p>
          </div>
        </div>
        <TableContainer className="tableContainer">
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows?.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AdminPage;
