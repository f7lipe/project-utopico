import { VStack } from "../Stack View/VStack"
import { LargeHeading, Subtitle } from "../Typografies"
import { Image } from "./styles"

interface InfoBannerProps {
    image?: string
    title: string
    subtitle?: string
}

const InfoBanner = ({image, title, subtitle} : InfoBannerProps) => {
    return (
        <VStack
            width="100%"
            align="flex-start"
        >
            <LargeHeading>{title}</LargeHeading>
            <Subtitle>{subtitle}</Subtitle>
            {image && <Image src={image} alt={title}/>}
        </VStack>
    )
}

export default InfoBanner