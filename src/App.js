import React from "react";
import Members from "./components/Members";
import store, { fetchMembers, addMember } from "./store";
import { Provider, connect } from "react-redux";
import axios from "axios";
import { HashRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
  }
  async componentDidMount() {
    this.props.fetchMembers();
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={Members} />
        </Switch>
      </HashRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMembers: () => {
      dispatch(fetchMembers());
    },
  };
};
export default connect(null, mapDispatchToProps)(App);
