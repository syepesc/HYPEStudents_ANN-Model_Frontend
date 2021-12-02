import "./UserCard.css";
import React from "react";

const UserCard = (props) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={props.profilePicture} alt={props.firstName} />
      </div>

      <div className="lower-container">
        <h3>
          {props.firstName} {props.lastName}
        </h3>
        <h4>{props.title}</h4>
        <p>{props.about}</p>
      </div>
    </div>
  );
};

export default UserCard;
