import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { recordRepetedDays } from '../../../../redux/eventForm/actionsCreator';

const daysToCheck = [
  { value: 'Monday', label: 'lundi', check: false },
  { value: 'Tuesday', label: 'mardi', check: false },
  { value: 'Wednesday', label: 'mercredi', check: false },
  { value: 'Thursday', label: 'jeudi', check: false },
  { value: 'Friday', label: 'vendredi', check: false },
  { value: 'Saturday', label: 'samedi', check: false },
  { value: 'Sunday', label: 'dimanche', check: false },
];

const DaySelector = ({ recordRepetedDays }) => {
  const [selectedDays, setSelectedDays] = useState(daysToCheck);
  const handleChange = day => (event) => {
    const index = daysToCheck.findIndex(item => item.value === day.value);
    daysToCheck.splice(index, 1, { ...day, check: event.target.checked });
    setSelectedDays(daysToCheck);
    const daysToStirng = daysToCheck.filter(item => item.check).map(item => item.value).join(';');
    recordRepetedDays(daysToStirng);
  };


  return (
    <div>
      <span>tous les </span>
      {selectedDays.map(day => (
        <span key={day.value}>
          <input
            type="checkbox"
            checked={day.checked}
            onChange={handleChange(day)}
            value={day.value}
          />
          <span>{day.label}</span>
        </span>))}
    </div>
  );
};

DaySelector.propTypes = {
  recordRepetedDays: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  recordRepetedDays: days => dispatch(recordRepetedDays(days)),
});

export default connect(null, mapDispatchToProps)(DaySelector);
