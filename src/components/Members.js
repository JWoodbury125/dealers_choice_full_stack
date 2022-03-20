import React from "react";
import { connect } from "react-redux";
import Member from "./Member";

const Members = (props) => {
  return (
    <ul>
      <Member members={props.members} />
    </ul>
  );
};

export default Members;
