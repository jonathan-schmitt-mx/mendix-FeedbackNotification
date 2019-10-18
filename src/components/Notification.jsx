import { Component, createElement } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';

export class Notification extends Component {
    componentDidUpdate () {
        // check if need to show notification
        if(this.props.showNotification.value) {
            toast(this.props.notificationText, {
                autoClose: this.props.autoClose,
                className: this.props.className
            });
            this.props.showNotification.setValue(false);
        }
    }

    render() {
        // Convert transition prop to actual transition
        var transition;
        if (this.props.transition === 'Slide') {
            transition = Slide;
        } else if (this.props.transition === 'Zoom') {
            transition = Zoom;
        } else if (this.props.transition === 'Flip') {
            transition = Flip;
        } else {
            transition = Bounce;
        }

        return <ToastContainer 
                position = {this.props.position}
                closeButton = {this.props.closeButton}
                closeOnClick = {this.props.closeOnClick}
                draggable = {this.props.draggable}
                draggablePercent = {this.props.draggablePercent}
                transition = {transition}
                hideProgressBar = {this.props.hideProgressBar}
                pauseOnHover = {this.props.pauseOnHover}
                pauseOnFocusLoss = {this.props.pauseOnFocusLoss}
                rtl = {this.props.rtl}
                newestOnTop = {this.props.newestOnTop}
            />;
    }
}

