import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";

import { Notification } from "./components/Notification";
import "./ui/FeedbackNotification.css";

class FeedbackNotification extends Component {
    constructor(props) {
        super(props);
        var position = '';
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
        />;
    }
}

export default hot(FeedbackNotification);
