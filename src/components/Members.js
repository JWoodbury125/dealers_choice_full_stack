import React from "react";
import { connect } from "react-redux";
// import { Member } from "./Member";

const Members = (props) => {
  return (
    <ul>
      {props.members.map((member) => {
        return (
          <div key={member.id}>
            <a href="/">
              {member.firstName} {member.lastName}
            </a>
            <button onClick={() => console.log("button works")}>x</button>
          </div>
        );
      })}
    </ul>
  );
};

export default Members;
