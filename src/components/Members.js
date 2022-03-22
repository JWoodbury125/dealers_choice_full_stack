import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchMembers, addMember, fetchMemberDetail } from "../store";
import Member from "./Member";
import { Link } from "react-router-dom";

const Members = (props) => {
  const members = props.members;
  return (
    <div>
      <h2>Dealers Choice Full Stack</h2>
      {members.map((member) => {
        return (
          <div key={member.id}>
            <Link to={`/members/${member.id}`}>{member.name}</Link>
            <button onClick={() => console.log("Button responds")}>x</button>
          </div>
        );
      })}
      <form onSubmit={() => console.log("Button Responds on Submit")}>
        <input
          type="text"
          value={members.name}
          onChange={(ev) => addMember(value)}
          placeholder="name"
        />
        <button>Create Member</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    members: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMember: (name) => {
      dispatch(addMember(name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Members);
