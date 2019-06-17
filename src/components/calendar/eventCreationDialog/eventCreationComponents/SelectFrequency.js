import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import DaySelector from './DaySelector';


import { recordFrequency } from '../../../../redux/eventForm/actionsCreator';

const frequencies = [
  { label: 'Quotidiennement', value: 'daily' },
  { label: 'Hebdomadairement', value: 'weekly' },
  { label: 'Mensuellement', value: 'monthly' },
];

const periods = [
  { label: 'jours', value: 'days' },
  { label: 'semaines', value: 'weeks' },
  { label: 'mois', value: 'months' },
];
class SelectFrequency extends Component {
  constructor() {
    super();
    this.state = {
      iteration: false,
      frequency: frequencies[0].value,
      amount: 1,
      unitOfTime: periods[0].value,
    };
  }

  handleCheck = () => {
    this.setState(prevState => ({ iteration: !prevState.iteration }), () => this.adaptFrequency());
  }

  adaptFrequency = () => {
    const { iteration, frequency, amount, unitOfTime } = this.state;
    const { recordFrequency } = this.props;
    if (!iteration) recordFrequency(null, null, null);
    else {
      this.setState({ frequency, amount, unitOfTime });
      this.props.recordFrequency(frequency, amount, unitOfTime);
    }
  }

  handleChange = name => ({ target: { value } }) => {
    const { recordFrequency } = this.props;
    this.setState({ [name]: value }, () => {
      recordFrequency(this.state.frequency, this.state.amount, this.state.unitOfTime);
    });
  }

  render() {
    const { iteration, frequency, amount, unitOfTime } = this.state;
    // console.log(frequency)
    return (
      <div>
        <FormControlLabel
          control={(
            <Checkbox
              checked={iteration}
              name="iteration"
              onChange={this.handleCheck}
            />)}
          label="répéter cet événement ?"
        />
        {iteration ? (
          <div>
            <Select
              value={frequency}
              name="frequency"
              label={frequency.label}
              onChange={this.handleChange('frequency')}
            >
              {frequencies.map(frenq => <MenuItem key={frenq.value} value={frenq.value}>{frenq.label}</MenuItem>)}
            </Select>

            <span> pendant </span>

            <TextField
              type="number"
              name="amount"
              value={amount}
              InputLabelProps={{ shrink: true }}
              onChange={this.handleChange('amount')}
            />
            <Select
              value={unitOfTime}
              name="unitOfTime"
              label={periods.label}
              onChange={this.handleChange('unitOfTime')}
            >
              {periods.map(frenq => <MenuItem key={frenq.value} value={frenq.value}>{frenq.label}</MenuItem>)}
            </Select>
            {frequency === 'weekly' ? <DaySelector /> : null}
            {frequency === 'monthly' ? <span> to do : delete days and weeks selextion, every first saturay of a month, etc. </span> : null}
          </div>
        ) : null}
      </div>
    );
  }
}

SelectFrequency.propTypes = {
  recordFrequency: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  recordFrequency: (frequency, amount, unitOfTime) => dispatch(recordFrequency(frequency, amount, unitOfTime)),
});

export default connect(null, mapDispatchToProps)(SelectFrequency);
