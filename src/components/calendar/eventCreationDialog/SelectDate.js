import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { recordDate, recordHour, recordDuration } from '../../../redux/eventForm/actionsCreator';

class SelectDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startingDate: props.startingDate,
      startingHour: props.startingHour,
      duration: props.duration,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { recordDate, recordHour, recordDuration } = this.props;
    const { startingDate, startingHour, duration } = this.state;

    return (
      <form>
        <div>
          <TextField
            label="Date et heure de début"
            type="date"
            defaultValue={startingDate}
            InputLabelProps={{ shrink: true }}
            name="startingDate"
            onChange={this.handleChange}
            onBlur={() => recordDate(startingDate)}
          />

          <TextField
            label="Heure de l'événement"
            type="time"
            name="startingHour"
            defaultValue={startingHour}
            // className={classes.textField}
            InputLabelProps={{ shrink: true }}
            inputProps={{ step: 300 }} // 5 min
            onChange={this.handleChange}
            onBlur={() => recordHour(startingHour)}
          />
        </div>


        <TextField
          label="Durée de l'événement"
          type="time"
          name="duration"
          defaultValue={duration}
          // className={classes.textField}
          InputLabelProps={{ shrink: true }}
          inputProps={{ step: 300 }} // 5 min
          onChange={this.handleChange}
          onBlur={() => recordDuration(duration)}
        />
      </form>
    );
  }
}

SelectDate.propTypes = {
  recordDate: PropTypes.func.isRequired,
  recordHour: PropTypes.func.isRequired,
  recordDuration: PropTypes.func.isRequired,
  startingDate: PropTypes.string.isRequired,
  startingHour: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  startingDate: state.event.startingDate,
  startingHour: state.event.startingHour,
  duration: state.event.duration,
});

const mapDispatchToProps = dispatch => ({
  recordDate: startingDate => dispatch(recordDate(startingDate)),
  recordHour: startingHour => dispatch(recordHour(startingHour)),
  recordDuration: duration => dispatch(recordDuration(duration)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectDate);
