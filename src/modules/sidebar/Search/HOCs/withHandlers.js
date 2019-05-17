import React, { Component } from 'react';
import { history } from './../../../root/reduxState/rootReducer';
const validation = fields => fields.searchQuery && fields.searchQuery.trim();

const WithHandlers = Wrapped => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        searchQuery: '',
      };
    }
    submitHandler = e => {
      e.preventDefault();
      if (!validation(this.state)) return;
      history.push(`/search?search=${this.state.searchQuery}`);
      this.setState({ searchQuery: '' });
    };

    changeHandler = ({ target }) => {
      this.setState({
        [target.name]: target.value,
      });
    };

    render() {
      return (
        <Wrapped
          value={this.state.searchQuery}
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler}
        />
      );
    }
  };
};

export default WithHandlers;