import React, { Component } from 'react';
import { FilterLabel } from './Filter.styled';

export class Filter extends Component {
  render() {
    const { onChange, filter } = this.props;
    return (
      <FilterLabel>
        Find contacts by name
        <input onChange={onChange} value={filter} type="text" name="filter" />
      </FilterLabel>
    );
  }
}
