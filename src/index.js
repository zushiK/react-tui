/**
 * @fileoverview TOAST UI Calendar React wrapper component
 */
import React from 'react';
import TuiCalendar from 'tui-calendar';
import {isEqual} from './isEqual';

/**
 * Calendar's options prop
 * @type {string[]}
 */
const optionProps = [
  'disableDblClick',
  'isReadOnly',
  'month',
  'scheduleView',
  'taskView',
  'theme',
  'timezones',
  'week',
  'template'
];

export default class Calendar extends React.Component {
  rootEl = React.createRef();

  static defaultProps = {
    height: '800px',
    view: 'week'
  };

  calendarInst = null;

  componentDidMount() {
    console.log("stitch calendar component mounted");
    const {schedules = [], view, ...restProps} = this.props;
    const rootElement = this.getRootElement();

    this.calendarInst = new TuiCalendar(rootElement, {
      ...restProps,
      defaultView: view
    });

    rootElement.style.height = this.props.height;

    this.setSchedules(schedules);

    this.bindEventHandlers(restProps);
  }

  shouldComponentUpdate(nextProps) {
    const {calendars, height, schedules, theme, view} = this.props;

    if (!isEqual(height, nextProps.height)) {
      this.getRootElement().style.height = nextProps.height;
    }

    if (!isEqual(calendars, nextProps.calendars)) {
      this.setCalendars(nextProps.calendars);
    }

    if (!isEqual(schedules, nextProps.schedules)) {
      this.calendarInst.clear();
      this.setSchedules(nextProps.schedules);
    }

    if (!isEqual(theme, nextProps.theme)) {
      this.calendarInst.setTheme(this.cloneData(nextProps.theme));
    }

    if (!isEqual(view, nextProps.view)) {
      this.calendarInst.changeView(nextProps.view);
    }

    optionProps.forEach((key) => {
      if (!isEqual(this.props[key], nextProps[key])) {
        this.setOptions(key, nextProps[key]);
      }
    });

    this.bindEventHandlers(this.props);

    return false;
  }

  componentWillUnmount() {
    this.calendarInst.destroy();
  }

  cloneData(data) {
    return JSON.parse(JSON.stringify(data));
  }

  setCalendars(calendars) {
    if (calendars && calendars.length) {
      this.calendarInst.setCalendars(calendars);
    }
  }

  setSchedules(schedules) {
    if (schedules && schedules.length) {
      const clonedSchedules = this.cloneData(schedules);

      this.calendarInst.createSchedules(clonedSchedules);
    }
  }

  setOptions(propKey, prop) {
    this.calendarInst.setOptions({[propKey]: prop}, true);
  }

  getInstance() {
    return this.calendarInst;
  }

  getRootElement() {
    return this.rootEl.current;
  }

  bindEventHandlers = (props) => {
    const eventHandlerNames = Object.keys(props).filter((key) => /^on[A-Z][a-zA-Z]+/.test(key));

    eventHandlerNames.forEach((key) => {
      const eventName = key[2].toLowerCase() + key.slice(3);
      this.calendarInst.off(eventName);
      this.calendarInst.on(eventName, props[key]);
    });
  };

  render() {
    return <div className="tui-calendar-react-root" ref={this.rootEl} />;
  }
}
