import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

import { openEventDialog } from './redux/eventForm/actionsCreator';
import { postNewEvent } from './redux/api/actionsCreator';

import DialogContener from './DialogContener';

const DialogOpener = ({ isOpen, allInfo, OpenOrCloseDialog, postNewEvent }) => (
  <Dialog open={isOpen} onClose={() => OpenOrCloseDialog()} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Nouvel événement</DialogTitle>

    <DialogContener />

    <DialogActions>
      <Button onClick={() => OpenOrCloseDialog()} color="primary">Annuler</Button>
      <Button onClick={() => postNewEvent(allInfo)} color="primary">Enregistrer</Button>
    </DialogActions>
  </Dialog>
);

DialogOpener.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(DialogOpener);
