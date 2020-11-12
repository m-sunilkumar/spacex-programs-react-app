import React from "react";
import PropTypes from "prop-types";
import FalconlaunchImage from "../../assets/spaceX.jpg";

//import styles
import "./programCard.css";
const ProgramCard = (props) => {
  const { programDetails } = props;
  return (
    <div className="program-card-container">
      <div className="image-wrapper">
        <img alt="rocket-img" src={FalconlaunchImage} />
      </div>
      <div className="program-mission-name">{programDetails.mission_name}</div>
      <div className="program-details-container">
        <div className="program-details">
          <span>Mission Ids:</span> {programDetails.mission_id}
        </div>
        <div className="program-details">
          <span>Launch Year:</span>
          {programDetails.launch_year}
        </div>
        <div className="program-details">
          <span>Successfull Launch:</span> {programDetails.launch_success}
        </div>
        <div className="program-details">
          <span>Successfull landing:</span> {programDetails.mission_id}
        </div>
      </div>
    </div>
  );
};

ProgramCard.propTypes = {
  programDetails: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default ProgramCard;
