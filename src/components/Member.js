import React from "react";
// import { connect } from "react-redux";

const Member = (props) => {
  return props.members.map((member) => {
    return (
      <div key={member.id}>
        <a href="/">
          {member.firstName} {member.lastName}
        </a>
        <button onClick={() => console.log("button works")}>x</button>
      </div>
    );
  });
};

export default Member;
