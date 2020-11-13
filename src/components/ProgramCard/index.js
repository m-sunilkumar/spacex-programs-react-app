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
      <div className="program-mission-name">
        {programDetails.mission_name || "Not Available"}
      </div>
      <div className="program-details-container">
        <div className="program-details">
          <span>Mission Ids:</span>{" "}
          {programDetails?.mission_id.length
            ? programDetails.mission_id.map((id) => <span key={id}>{id}</span>)
            : "Not Available"}
        </div>
        <div className="program-details">
          <span>Launch Year:</span>
          {programDetails.launch_year || "Not Available"}
        </div>
        <div className="program-details">
          <span>Successfull Launch:</span>{" "}
          {String(programDetails.launch_success) || "Not Available"}
        </div>
        <div className="program-details">
          <span>Successfull landing:</span>{" "}
          {String(programDetails.upcoming) || "not available"}
        </div>
      </div>
    </div>
  );
};

ProgramCard.propTypes = {
  programDetails: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default ProgramCard;
