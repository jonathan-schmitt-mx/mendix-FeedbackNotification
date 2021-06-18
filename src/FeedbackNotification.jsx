import { Component, createElement } from "react";

import { Notification } from "./components/Notification";
import "./ui/FeedbackNotification.css";

export default class FeedbackNotification extends Component {
    constructor(props) {
        super(props);
        var position = '';
        this.onShowAction = this.executeShowAction.bind(this);
        this.onCloseAction = this.executeCloseAction.bind(this);
    }
    componentDidMount() {
        //Set position of the toast message
        var tempPosition = this.props.position;
        if (tempPosition === 'topLeft') {
            this.position = 'top-left';
        } else if (tempPosition === 'topRight') {
            this.position = 'top-right';
        } else if (tempPosition === 'topCenter') {
            this.position = 'top-center';
        } else if (tempPosition === 'bottomRight') {
            this.position = 'bottom-right';
        } else if (tempPosition === 'bottomLeft') {
            this.position = 'bottom-left';
        } else {
            this.position = 'bottom-center';
        }
    }

    executeShowAction() {
        this.props.showNotification.setValue(false);
        //Execute the on show action if needed
        if (this.props.onShowAction && this.props.onShowAction.canExecute) {
            this.props.onShowAction.execute();
        }
    }

    executeCloseAction() {
        //Execute the on close action if needed
        if (this.props.onCloseAction && this.props.onCloseAction.canExecute) {
            this.props.onCloseAction.execute();
        }
    }

    render() {
        var autoClose = 5000;
        // If autoClose is set on a specific notification, use this value, else use value set on container
        if (typeof this.props.autoCloseNotification === 'undefined') {
            autoClose = this.props.autoCloseContainer;
        } else {
            autoClose = parseInt(this.props.autoCloseNotification.displayValue, 0) 
        }
        // If autoclose is 0, set to false, then user has to close message himself
        if (autoClose === 0) {
            autoClose = false;
        }

        // get className and notificationText, can both be empty
        var notificationText = typeof this.props.notificationText === 'undefined' ? '' : this.props.notificationText.value;
        var className = typeof this.props.className === 'undefined' ? undefined : this.props.className.value;

        return <Notification 
            showNotification = {this.props.showNotification}
            position = {this.position}
            autoClose = {autoClose}
            closeButton = {this.props.closeButton === false ? false : undefined}
            closeOnClick = {this.props.closeOnClick}
            draggable = {this.props.draggable}
            draggablePercent = {this.props.draggablePercent}
            notificationText = {notificationText}
            className = {className}
            transition = {this.props.transition}
            hideProgressBar = {this.props.hideProgressBar}
            pauseOnHover = {this.props.pauseOnHover}
            pauseOnFocusLoss = {this.props.pauseOnFocusLoss}
            rtl = {this.props.rtl}
            newestOnTop = {this.props.newestOnTop}
            onShowAction = {this.onShowAction}
            onCloseAction = {this.onCloseAction}
        />;
    }
}
