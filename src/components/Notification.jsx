import { createElement, useEffect } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';

export function Notification(props) {

    useEffect(() => {
        if (props.showNotification.value) {
            toast(props.notificationText, {
                autoClose: props.autoClose,
                className: props.className,
                onClose: props.onCloseAction
            });
            props.onShowAction();
        }
    }, [props.showNotification.value])

    // Convert transition prop to actual transition
    let transition;
    if (props.transition === 'Slide') {
        transition = Slide;
    } else if (props.transition === 'Zoom') {
        transition = Zoom;
    } else if (props.transition === 'Flip') {
        transition = Flip;
    } else {
        transition = Bounce;
    }

    return <ToastContainer 
            position = {props.position}
            closeButton = {props.closeButton}
            closeOnClick = {props.closeOnClick}
            draggable = {props.draggable}
            draggablePercent = {props.draggablePercent}
            transition = {transition}
            hideProgressBar = {props.hideProgressBar}
            pauseOnHover = {props.pauseOnHover}
            pauseOnFocusLoss = {props.pauseOnFocusLoss}
            rtl = {props.rtl}
            newestOnTop = {props.newestOnTop}
        />;
}

