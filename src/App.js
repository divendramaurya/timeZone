import React, { useState, useEffect, useRef } from "react";
import ZoneDropDownCom from "./components/ZoneDropDownComp";
import TimeZoneHeaderComp from "./components/TimeZoneHeaderComp";
import TableComp from "./components/TableComp";
import { getSingleZone, createSelect } from "./utils/AppUtils";
import "./App.css";

function App() {
  const [selectedzone, setselectedzone] = useState([]);
  const [Zones, setzones] = useState([]);
  const [flag, setFlag] = useState(false);
  const selectref = useRef("");

  //fetch single zone details
  const GetDetails = (e) => {
    getSingleZone(selectref.current.value)
      .then((result) => {
        setselectedzone(() => result.data);
        setFlag(true);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  //For Loading All dropdown values
  useEffect(() => {
    createSelect()
      .then((result) => {
        setzones(() => result.data.zones);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  //For showing table for particular dropdown
  useEffect(() => {
    if (selectref.current.value) {
      if (flag) {
        var interval = setInterval(() => {
          GetDetails();
        }, 5000);
      }
    }
    return () => clearInterval(interval);
  });

  return (
    <div className="App row">
      <div className="col-md-6">
        <TimeZoneHeaderComp />
        <ZoneDropDownCom
          Zones={Zones}
          clickMe={GetDetails}
          innerRef={selectref}
        />
        <TableComp selectedzone={selectedzone} />
      </div>
    </div>
  );
}

export default App;
