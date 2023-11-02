import React from "react";
import { BsExclamationSquareFill } from "react-icons/bs";
import "../styles/Card.css";

const Card = ({ id, title, tags, status }) => {
  return (
    <div className="container_card">
      <div className="cardHeading2" style={{ justifyContent: "space-between" }}>
        <span style={{ textTransform: "uppercase", color: "darkgrey" }}>
          {id}
        </span>

        <div className="image">
          <img
            // src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fgroup-logo&psig=AOvVaw0scSym51ObPFSeVCWUoVAt&ust=1698994452019000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCMDll9jdpIIDFQAAAAAdAAAAABAE"
            // alt="QuickSell" 
            src="../images/employee.png"
            alt="error" 
          />

          <div className="status"></div>
        </div>
      </div>

      <div className="title">
        <p>{title}</p>
      </div>

      <div className="tags">
        <div className="tag">
          <BsExclamationSquareFill />
        </div>
        {tags?.map((element, index) => {
          return (
            <div key={index} className="tag">
              <span>⚪</span> {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
