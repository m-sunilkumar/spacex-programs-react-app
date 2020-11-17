import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

//import css here
import "./filterNav.css";

const FilterNavigation = (props) => {
  const { fetchFilteredData } = props;

  const [filterYear, setFilterYear] = useState("");
  const [isSuccessfullLaunch, setIsSuccessfullLaunch] = useState("");
  const [isSuccessfullLanding, setIsSuccessfullLanding] = useState("");
  const history = useHistory();

  const launchYears = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];
  const launchStatus = ["true", "false"];
  const landStatus = ["true", "false"];
  /**
   * @function filterData
   * @param {any} val
   * @param {string} type
   * To filter the programs based on launch year , lanch success and land success
   */

  const filterData = (val, type) => {
    if (type === "year") {
      setFilterYear(val);
      history.push({ pathname: "/programs", search: `?launch_year=${val}` });
    }
    if (type === "launch") {
      setIsSuccessfullLaunch(val);
      history.push({
        pathname: "/programs",
        search: `?launch_success=${val}`,
      });
    }
    if (type === "land") {
      setIsSuccessfullLanding(val);
      history.push({
        pathname: "/programs",
        search: `?landing_succcess=${val}`,
      });
    }
  };

  //reset all filter Data
  const resetFilters = () => {
    setFilterYear("");
    setIsSuccessfullLaunch("");
    setIsSuccessfullLanding("");
  };

  useEffect(() => {
    setFilterYear(filterYear);
    setIsSuccessfullLanding(isSuccessfullLanding);
    setIsSuccessfullLaunch(isSuccessfullLaunch);
    const queryParams = {
      limit: 100,
      launch_success: isSuccessfullLaunch,
      land_success: isSuccessfullLanding,
      launch_year: filterYear,
    };
    fetchFilteredData(queryParams);
  }, [filterYear, isSuccessfullLanding, isSuccessfullLaunch]);

  return (
    <section className="main-filter-container">
      <div className="sub-filter-containers">
        <p>Launch Year</p>
        <div className="filter-container-years">
          {launchYears.map((yr) => (
            <div
              key={yr}
              className="launch-year"
              onClick={(e) => filterData(yr, "year")}
              style={{ background: filterYear === yr ? "#7cbb32" : "" }}
            >
              {yr}
            </div>
          ))}
        </div>
      </div>

      <div className="sub-filter-containers">
        <p> Successfull Launch</p>
        <div className="filter-checks">
          {launchStatus.map((item) => (
            <div
              key={item}
              className="launch-year"
              style={{
                background: isSuccessfullLaunch === item ? "#7cbb32" : "",
              }}
              onClick={() => filterData(item, "launch")}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="sub-filter-containers">
        <p> Successfull landing</p>
        <div className="filter-checks">
          {" "}
          {landStatus.map((item) => (
            <div
              key={item}
              style={{
                background: isSuccessfullLanding === item ? "#7cbb32" : "",
              }}
              className="launch-year"
              onClick={() => filterData(item, "land")}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <button className="sub-filter-containers" onClick={() => resetFilters()}>
        Clear All Filters
      </button>
    </section>
  );
};

FilterNavigation.propTypes = {
  fetchFilteredData: PropTypes.func.isRequired,
};

export default FilterNavigation;
