import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

import SelectTitle from './eventCreationComponents/SelectTitle';
import SelectDate from './eventCreationComponents/SelectDate';
import SelectFrequency from './eventCreationComponents/SelectFrequency';

import { openEventDialog } from '../../../redux/eventForm/actionsCreator';
import { postNewEvent } from '../../../redux/api/actionsCreator';


const EventCreationDialog = ({ isOpen, allInfo, OpenOrCloseDialog, postNewEvent }) => (
  <Dialog open={isOpen} onClose={() => OpenOrCloseDialog()} aria-labelledby="form-dialog-title">
    <DialogTitle data-testid="form-dialog-title" id="form-dialog-title">Nouvel événement</DialogTitle>

    <DialogContent>
      <SelectTitle />
      <SelectDate />
      <SelectFrequency />
    </DialogContent>

    <DialogActions>
      <Button data-testid="cancel-button" onClick={() => OpenOrCloseDialog()} color="primary">Annuler</Button>
      <Button onClick={() => postNewEvent(allInfo)} color="primary">Enregistrer</Button>
    </DialogActions>
  </Dialog>
);

EventCreationDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  allInfo: PropTypes.object.isRequired,
  postNewEvent: PropTypes.func.isRequired,
  OpenOrCloseDialog: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  allInfo: state.event,
  isOpen: state.event.isOpen,
});

const mapDispatchToProps = dispatch => ({
  postNewEvent: allInfo => dispatch(postNewEvent(allInfo)),
  OpenOrCloseDialog: bool => dispatch(openEventDialog(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventCreationDialog);
