import React from "react";
import { connect } from "react-redux";
import { Member } from "./Member";

const Members = (props) => {
  return (
    <ul>
      {props.members.map((member) => {
        <Member key={member.id} />;
      })}
    </ul>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Members);
