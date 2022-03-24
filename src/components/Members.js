import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchMembers, addMember, deleteMember } from "../store";
import { Link } from "react-router-dom";
import axios from "axios";

export const MemberDetail = connect((state) => state)((props) => {
  const memberDet = props.members.find(
    (member) => member.id === props.match.params.id * 1
  );
  if (!memberDet) {
    return null;
  }
  return (
    <div>
      <h1>{memberDet.name}</h1>
      <div> Details To Follow </div>
    </div>
  );
});

class Members extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  async onSubmit(event) {
    event.preventDefault();
    this.props.addMember(this.state.name);
  }

  onChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    const members = this.props.members;
    console.log("THESE PROPS...", this.props.members);

    return (
      <div>
        <h2>Dealers Choice Full Stack</h2>
        {members.map((member) => {
          return (
            <div key={member.id}>
              <Link to={`/members/{member.id}`}>{member.name}</Link>
              <button onClick={() => this.props.deleteMember(member)}>x</button>
            </div>
          );
        })}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="memberName"
            value={this.state.name}
            onChange={this.onChange}
            placeholder="name"
          />
          <button>Create Member</button>
        </form>
      </div>
    );
  }
}
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
    deleteMember: (name) => {
      dispatch(deleteMember(name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Members);
