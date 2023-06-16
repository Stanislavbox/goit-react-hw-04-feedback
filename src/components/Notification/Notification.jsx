import PropTypes from 'prop-types';
import { NotificationDiv } from './Notification.styled';

const Notification = ({ message }) => {
  return <NotificationDiv>{message}</NotificationDiv>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
