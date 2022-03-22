import React from "react";
import { connect } from "react-redux";
import { fetchMembers, fetchMemberDetail } from "../store";

const Member = (props) => {
  console.log("CHILDD MEMBER PROPS....", props);
  return <div> Hi Friend</div>;
  // return props.members.map((member) => {
  //   return (
  //     <div key={member.id}>
  //       <a href="/">
  //         {member.firstName} {member.lastName} -- {member.email}
  //       </a>
  //       <button onClick={() => console.log("button works")}>x</button>
  //     </div>
  //   );
  // });
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMemberDetail: (memberId) => {
      dispatch(fetchMemberDetail(memberId));
    },
  };
};

export default connect(null, mapDispatchToProps)(Member);
