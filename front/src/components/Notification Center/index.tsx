import {Notifications, Banner} from "./style"
import useNotification from "../../hooks/useNotification"

const NotificationCenter = () => {
    const { notifications } = useNotification()
    const colorDict = {
        "offline": "#FE7138",
        "error": "#ff2f2f",
        "warning": "#e8e245",
        "info": "#556B2F"
    }

    return (
        <Notifications>
            {
                notifications.map((notification, index) =>
                    !notification.resolved &&
                    <Banner
                        key={index}
                        color={colorDict[notification.notificationType]}>
                        {notification.icon && <notification.icon size={30}/>}
                        {notification.message}
                    </Banner>

                )
            }
        </ Notifications>
    )
}

export default NotificationCenter