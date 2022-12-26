import { createContext, useState } from 'react'
import { IconType } from 'react-icons/lib'

interface INotificationContext {
    notifications: AppNotification[]
    addNotification: (notification: AppNotification) => void
    removeNotification: (notification: AppNotification) => void
}

interface INotificationProvider {
    children: React.ReactNode
}

const NotificationContext = createContext<INotificationContext | null>(null)

const NotificationProvider = ({ children } : INotificationProvider) => {
    const [notifications, setNotifications] = useState<AppNotification[]>([])

    const addNotification = (notification: AppNotification) => {
        setNotifications([...notifications, notification])
    }

    const removeNotification = (notification: AppNotification) => {
        setNotifications(notifications.filter(n => n !== notification))
    }

    return (
        <NotificationContext.Provider value={
            { 
                notifications, 
                addNotification, 
                removeNotification 
                }
                }>
            {children}
        </NotificationContext.Provider>
    )
}

export { NotificationContext, NotificationProvider }

