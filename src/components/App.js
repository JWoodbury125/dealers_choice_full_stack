import React from "react";
import Members from "./Members";
// import store from "../store";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      members: [],
      error: "",
    };
  }
  async componentDidMount() {
    const response = await axios.get("/members");
    this.setState({ members: response.data });
    console.log(this.state.members);
  }

  render() {
    return (
      <ul>
        <Members members={this.state.members} />
      </ul>
    );
  }
}
export default App;
