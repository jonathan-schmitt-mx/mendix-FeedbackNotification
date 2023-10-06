import { createElement, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./ui/FeedbackNotification.css";

export default function FeedbackNotification(props) {
    const MendixNotification = ({ closeToast, toastProps, notification }) => (
        <div className="flexcontainer justify-content-between">
            <div className="flexitem">
                {props.headerText && <span style={{ fontWeight: "bold" }}>{props.headerText.get(notification).value} </span>}
                {getNotificationText(notification)}
            </div>
            {props.onClickAction && <button className={"flexitem " + props.onClickClass.get(notification).value} onClick={executeClickAction(notification)}>{props.onClickLabel.get(notification).value}</button>}
        </div>
    );

    useEffect(() => {
        // If new items retrieved, create toast messages
        if (props.datasourceNotifications.items) {
            for (let itemIndex in props.datasourceNotifications.items) {
                const notification = props.datasourceNotifications.items[itemIndex];
                toast(<MendixNotification notification={notification} />, {
                    type: getNotificationType(notification),
                    autoClose: getNotificationAutoClose(notification),
                    className: getNotificationClassName(notification),
                    onClose: () => executeCloseAction(notification),
                    theme: getNotificationTheme(notification),
                    icon: getNotificationShowIcon(notification)
                });
                executeShowAction(notification);
            }
        }
    }, [props.datasourceNotifications.items]);

    const executeShowAction = notification => {
        //Execute the on show action if needed
        if (props.onShowAction && props.onShowAction.get(notification).canExecute) {
            props.onShowAction.get(notification).execute();
        }
    };

    const executeCloseAction = notification => {
        //Execute the on close action if needed
        if (props.onCloseAction && props.onCloseAction.get(notification).canExecute) {
            props.onCloseAction.get(notification).execute();
        }
    };

    const executeClickAction = notification => {
        //Execute the on close action if needed
        if (props.onClickAction && props.onClickAction.get(notification).canExecute) {
            props.onClickAction.get(notification).execute();
        }
    };

    const getNotificationText = notification => {
        return props.notificationText.get(notification).value;
    };

    const getNotificationShowIcon = notification => {
        let showIcon = props.showIcon.get(notification).value;
        return showIcon ? undefined : false;
    };

    const getNotificationClassName = notification => {
        if (props.className) {
            return props.className.get(notification).value;
        }
        return "";
    };

    const getNotificationType = notification => {
        if (props.notificationType) {
            let notificationType = props.notificationType.get(notification).value.toLowerCase();
            if (
                notificationType !== "info" &&
                notificationType !== "default" &&
                notificationType !== "success" &&
                notificationType !== "warning" &&
                notificationType !== "error"
            ) {
                return "info";
            } else {
                return notificationType;
            }
        }
        return "info";
    };

    const getNotificationTheme = notification => {
        if (props.notificationTheme) {
            let theme = props.notificationTheme.get(notification).value.toLowerCase();
            if (theme === "light" || theme === "dark" || theme === "colored") {
                return theme;
            }
        }
        return "light";
    };

    const getNotificationAutoClose = notification => {
        let autoClose = parseInt(props.autoClose.get(notification).value, undefined);
        // If autoclose is 0, set to false, then user has to close message himself
        return autoClose === 0 ? false : autoClose;
    };

    const getPosition = () => {
        // Convert position
        if (props.position === "topLeft") {
            return "top-left";
        } else if (props.position === "topRight") {
            return "top-right";
        } else if (props.position === "topCenter") {
            return "top-center";
        } else if (props.position === "bottomRight") {
            return "bottom-right";
        } else if (props.position === "bottomLeft") {
            return "bottom-left";
        } else {
            return "bottom-center";
        }
    };

    const getTransition = () => {
        // Convert transition prop to actual transition
        if (props.transition === "Slide") {
            return Slide;
        } else if (props.transition === "Zoom") {
            return Zoom;
        } else if (props.transition === "Flip") {
            return Flip;
        } else {
            return Bounce;
        }
    };

    return (
        <ToastContainer
            position={getPosition()}
            closeButton={props.closeButton}
            closeOnClick={props.closeOnClick}
            draggable={props.draggable}
            draggablePercent={props.draggablePercent}
            transition={getTransition()}
            hideProgressBar={props.hideProgressBar}
            pauseOnHover={props.pauseOnHover}
            pauseOnFocusLoss={props.pauseOnFocusLoss}
            rtl={props.rtl}
            newestOnTop={props.newestOnTop}
            limit={props.limit.value && props.limit.value > 0 ? props.limit.value : undefined}
        />
    );
}
