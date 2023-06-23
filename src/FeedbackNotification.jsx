import { createElement } from "react";

import "./ui/FeedbackNotification.css";
import { Notification } from "./components/Notification";

export default function FeedbackNotification(props) {

    const executeShowAction = () => {
        props.showNotification.setValue(false);
        //Execute the on show action if needed
        if (props.onShowAction && props.onShowAction.canExecute) {
            props.onShowAction.execute();
        }
    }

    const executeCloseAction = () => {
        //Execute the on close action if needed
        if (props.onCloseAction && props.onCloseAction.canExecute) {
            props.onCloseAction.execute();
        }
    }


    // Convert position
    let position = '';
    if (props.position === 'topLeft') {
        position = 'top-left';
    } else if (props.position === 'topRight') {
        position = 'top-right';
    } else if (props.position === 'topCenter') {
        position = 'top-center';
    } else if (props.position === 'bottomRight') {
        position = 'bottom-right';
    } else if (props.position === 'bottomLeft') {
        position = 'bottom-left';
    } else {
        position = 'bottom-center';
    }

    let autoClose = props.autoCloseContainer;
    // If autoClose is set on a specific notification, use this value, else use value set on container
    if (props.autoCloseNotification !== undefined) {
        autoClose = parseInt(props.autoCloseNotification.displayValue, 0);
    }
    // If autoclose is 0, set to false, then user has to close message himself
    if (autoClose === 0) {
        autoClose = false;
    }

    // get className and notificationText, can both be empty
    let notificationText = props.notificationText === undefined ? '' : props.notificationText.value;
    let className = props.className === undefined ? undefined : props.className.value;

    return <Notification 
        showNotification = {props.showNotification}
        position = {position}
        autoClose = {autoClose}
        closeButton = {props.closeButton === false ? false : undefined}
        closeOnClick = {props.closeOnClick}
        draggable = {props.draggable}
        draggablePercent = {props.draggablePercent}
        notificationText = {notificationText}
        className = {className}
        transition = {props.transition}
        hideProgressBar = {props.hideProgressBar}
        pauseOnHover = {props.pauseOnHover}
        pauseOnFocusLoss = {props.pauseOnFocusLoss}
        rtl = {props.rtl}
        newestOnTop = {props.newestOnTop}
        onShowAction = {executeShowAction}
        onCloseAction = {executeCloseAction}
    />;
}
