
import moment from 'moment';
import momentTimezone from 'moment-timezone';
import * as DATE_FORMATS from '@/constants/time/dateFormats';

export default class Time {

  static getDefaultTimeString(timeString, convertToLocal = true) {
    const timeInstance = Time.getTimeInstance(timeString, convertToLocal);

    const formattedTimeString = timeInstance.format(DATE_FORMATS.DEFAULT_DATE_TIME);
    const timeZone = moment.tz(Time.getBrowserTimezone()).zoneAbbr();
    return `${formattedTimeString} ${timeZone}`;
  }

  static getDateTimeString(timeString, convertToLocal = true) {
    const timeInstance = Time.getTimeInstance(timeString, convertToLocal);

    return timeInstance.format(DATE_FORMATS.DEFAULT_DATE_TIME);
  }

  /**
   * Get Time Instance
   * @param timeString
   * @param convertToLocal - Whether to convert time to the browser's time
   * @returns {*}
   */
  static getTimeInstance(timeString, convertToLocal = true) {
    // @see https://momentjs.com/docs/#/manipulating/local/
    if (convertToLocal) {
      const utcTime = moment.utc(timeString).toDate();
      return moment(utcTime).local();
    }
    return moment(timeString);
  }

  static getBrowserTimezone() {
    return momentTimezone.tz.guess();
  }

}
