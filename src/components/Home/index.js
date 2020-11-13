import React, { useEffect, useState, useCallback } from "react";

import ProgramCard from "../ProgramCard";
import FilterNav from "../FilterNav";

//Import Api service to call apis
import apiService from "./apiService";

//import css
import "./home.css";

const HomePage = () => {
  const [programs, setPrograms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //Fetch the programs list to render
  const fetchData = useCallback(() => {
    setIsLoading(true);
    apiService
      .getAllPrograms()
      .then((res) => {
        setIsLoading(false);
        setPrograms(res?.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("err", err);
      });
  }, []);

  //fetch data after filtering
  const fetchFilteredData = (params) => {
    setIsLoading(true);
    apiService
      .getFilteredPrograms(params)
      .then((res) => {
        setIsLoading(false);
        setPrograms(res?.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("err", err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <main className="main-container">
      <p>SpaceX Launch Programs</p>
      <section className="container">
        <section className="left-filter-nav">
          <FilterNav fetchFilteredData={fetchFilteredData} />
        </section>
        <section className="right-launch-programs-container">
          {isLoading ? <h2>Loading.......</h2> : null}
          {programs && programs?.length === 0 && !isLoading ? (
            <p>Looks like there is no programs ! </p>
          ) : (
            !isLoading &&
            programs.map((item, index) => (
              <div className="card-container" key={index + item.mission_name}>
                <ProgramCard programDetails={item} />
              </div>
            ))
          )}
        </section>
      </section>
    </main>
  );
};
export default HomePage;
