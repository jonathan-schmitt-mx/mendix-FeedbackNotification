## FeedbackNotification
React widget used to add notifications to your application. Based on https://github.com/fkhadra/react-toastify.

## Features
- Show notifications
- Different default styling options
- Show loading bar based on the time that notification is shown
- Base time that notification is shown on an attribute
- Pause timer when hovered or site is not focussed
- Close notification by clicking it or dragging it
- Execute action on show and/or close of a notification
- Limit the number of notifications shown at the same time

## Configuration
You can put this widget anywhere on your page, the place where the notifications are shown is controlled within the widget and can be changed with the position attribute. The widget cannot be placed in a list, since it should only be rendered once on the page.
The widget needs a data source and a context object that can be refreshed when there are new notifications(perhaps in combination with a timer). The widget shows all notifications that are returned in the datasource. You can either use a on show event to mark the notification as shown and not show it again or use the property 'is shown' and link this to the attribut, such that the widget can set this attribute. 

### General
- Show Notification: Boolean attribute that the widget will use. Set to true to show notification, e.g. after a button is clicked or a popup is closed. The widget will change this value back to false after the notification is shown. The attribute will not be committed. You can use one of the actions to commit the object if needed.
- Notification Text: Attribute used for the notification text.
- Class: Attribute that can be set to give a specific class to a notification.

### Actions
- On Show Action: Action to trigger the notification is shown, e.g. to commit the object such that the notification is not shown again.
- On Close Action: Action to trigger the notification is closed.
- 
### Behavior
- Position: Where the notification will be shown on the screen.
- Transition: How the notification will pop up on the screen.
- Hide progress bar: Whether or not to show the progress bar.
- Pause on hover: Whether or not to pause the timer when hovering over the notification.
- Pause on focus loss: Whether or not to pause the timer when the window loses focus.
- Right to left: Show content right to left.
- Newest on top: Show newest notification on top.

### Close notification
- Close after: Notification will be closed after this time (in ms). Set to 0 to let the user close it himself. This property can be overwriten for a specific notification with attribute below.
- Close after attribute: Attribute used to overwrite above property for a specific notification.
- Close button: Whether or not to show a close button.
- Close on click: Close notification when clicked.
- Draggable: Whether or not the notification can be dragged to close it.
- Draggable percent: The percentage of the notifications width that the notification can be dragged after which it will be closed.


