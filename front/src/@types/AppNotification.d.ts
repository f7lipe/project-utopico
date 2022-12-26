type AppNotification = {
    notificationType: "offline" | "error" | "warning" | "info"
    message: string
    resolved: boolean
    isTemporary: boolean
    icon?: IconType
}