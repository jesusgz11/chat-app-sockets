import moment from 'moment';

moment.locale('es-mx');

export const hourMonth = (date) => {
  const todayMonth = moment(date);
  return todayMonth.format('hh:mm a | MMM D');
};
