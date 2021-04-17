import React from "react";
import fromUnixTime from "date-fns/fromUnixTime";

function TableComp(props) {
  let time1 = String(fromUnixTime(props.selectedzone.timestamp));
  return (
    <div style={{ fontSize: "20px" }}>
      <p>Below are Zone Details:---- </p>
      {props.selectedzone.timestamp && props.selectedzone.timestamp !== 0 && (
        <table className="table table-condensed table-hover table-striped">
          <thead>
            <tr>
              <th>TimeStamp</th>
              <th>Date</th>
              <th>CountryName</th>
              <th>CountryCode</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{props.selectedzone.timestamp}</td>
              <td>{time1}</td>
              <td>{props.selectedzone.countryName}</td>
              <td>{props.selectedzone.countryCode}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableComp;
