import React, { Component } from 'react';

export class Filter extends Component {
  render() {
    const { onChange, filter } = this.props;
    return (
      <label>
        Find contacts by name
        <input onChange={onChange} value={filter} type="text" name="filter" />
      </label>
    );
  }
}
