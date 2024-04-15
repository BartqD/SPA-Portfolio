import React from 'react';
import ReactDOM from 'react-dom';

import classes from './notification.module.scss';

type Status = "success" | "error"| "pending"


interface NotificationProps {
  title: string;
  message?: string|null; 
  status: Status;
}

const Notification: React.FC<NotificationProps> = (props) => {
  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message !== undefined ? message : ''}</p> 
    </div>,
    document.getElementById('notifications')!
  );
}

export default Notification;
