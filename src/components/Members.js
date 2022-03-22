import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchMembers, addMember, deleteMember } from "../store";
import { Link } from "react-router-dom";

class Members extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: this.props.members ? this.props.members : "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onSubmit = async (event) => {
    event.preventDefault();

    addMember(this.state.name);
  };

  onChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    const members = this.props.members;
    return (
      <div>
        <h2>Dealers Choice Full Stack</h2>
        {members.map((member) => {
          return (
            <div key={member.id}>
              <Link to={`/members/${member.id}`}>{member.name}</Link>
              <button onClick={() => deleteMember(member)}>x</button>
            </div>
          );
        })}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
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
