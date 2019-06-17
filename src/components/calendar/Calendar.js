import React, { Component } from 'react';
import { connect } from 'react-redux';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import PropTypes from 'prop-types';

import EventCreationDialog from './eventCreationDialog/EventCreationDialog';

import { recordDate, openEventDialog } from '../../redux/eventForm/actionsCreator';
import { getEventsAction } from '../../redux/api/actionsCreator';

import './Calendar.css';

const localizer = BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
  componentDidMount() {
    const { getEvents } = this.props;
    getEvents();
  }

  openDialogToCreateEvent = ({ start }) => {
    console.log(start);
    const { recordDate, OpenDialog } = this.props;
    recordDate(this.getGoodFormat(start));
    OpenDialog();
  }

  refactoEventFormat = allEvents => allEvents.map((event) => {
    const startingTime = `${event.startingDate} ${event.startingHour}`;
    const [h, m] = event.duration.split(':');
    const endingTime = moment(startingTime).add(h, 'h').add(m, 'm').format();
    return {
      title: event.title,
      start: new Date(startingTime),
      end: new Date(endingTime),
      allDay: false,
    };
  });

  getGoodFormat = date => moment(date).toISOString(true).substr(0, 10);

  render() {
    const { isLoading, events } = this.props;
    if (isLoading) return <p data-testid="api-loading-message">Loading...</p>;
    return (
      <div className="calendar">
        <h1 data-testid="api-loaded-message">With have a response !</h1>
        <BigCalendar
          views={['month', 'week', 'day']}
          defaultView="month"
          localizer={localizer}
          events={this.refactoEventFormat(events)}
          selectable
          onSelectEvent={({ start, end }) => console.log('pop-up to modify', start, end )} // eslint-disable-line
          onSelectSlot={this.openDialogToCreateEvent}
        />
        <EventCreationDialog />
      </div>
    );
  }
}

Calendar.propTypes = {
  getEvents: PropTypes.func.isRequired,
  recordDate: PropTypes.func.isRequired,
  OpenDialog: PropTypes.func.isRequired,

  isLoading: PropTypes.bool.isRequired,
  events: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  startingDate: state.event.startingDate,
  isLoading: state.api.isLoading,
  events: state.api.events,
});

const mapDispatchToProps = dispatch => ({
  recordDate: startingDate => dispatch(recordDate(startingDate)),
  OpenDialog: () => dispatch(openEventDialog()),
  getEvents: () => dispatch(getEventsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
