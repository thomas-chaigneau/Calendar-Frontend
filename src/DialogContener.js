import React from 'react';
import PropTypes from 'prop-types';
import DialogContent from '@material-ui/core/DialogContent';
import { connect } from 'react-redux';
import SelectTitle from './SelectTitle';
import SelectDate from './SelectDate';
import SelectAddress from './SelectAddress';
import SelectMultipleDays from './SelectMultipleDays';

import SelectionMenu from './SelectionMenu';

import { recordContact, recordCategory, recordFrequency } from './redux/actionsCreator';

const DialogContener = ({
  frequency,
}) => {
  if (frequency !== 'specificDays') {
    return (
      <DialogContent>
        <SelectTitle />
        <SelectAddress />
        <SelectDate />
        <SelectionMenu />
      </DialogContent>
    );
  }
  return (
    <DialogContent>
      <SelectTitle />
      <SelectAddress />
      <SelectDate />
      <SelectionMenu />
      <SelectMultipleDays />
    </DialogContent>
  );
};

DialogContener.propTypes = {
  frequency: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  frequency: state.event.frequency,
});

const mapDispatchToProps = dispatch => ({
  recordContact: value => dispatch(recordContact(value)),
  recordCategory: value => dispatch(recordCategory(value)),
  recordFrequency: value => dispatch(recordFrequency(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogContener);
