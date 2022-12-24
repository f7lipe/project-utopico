import Banner from "./style"
import { CiCloudOff } from "react-icons/ci"

interface InfoBannerProps {
    infoType: "offline" | "error" | "warning" | "info"
    message?: string
}

const InfoBanner = ({infoType, message}: InfoBannerProps) => {
    const colorDict = {
        "offline": {
            color: "orange",
            message: `You are offline. ${message ? message : "Some features may not work as expected."}`,
            icon: <CiCloudOff size={30}/>
        },
    }

    return (
        <Banner color={colorDict["offline"].color}>
                <strong>{colorDict["offline"].icon} {colorDict["offline"].message}</strong>
        </Banner>
    )
}

export default InfoBanner