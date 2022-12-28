import { HStack } from "../../../components/Stack View/HStack"
import { VStack } from "../../../components/Stack View/VStack"
import { Shimmer } from "../../Shimmer Effect"

const ShimmerTopicView = () => {
    return (
        <HStack  
        widthMobile="95%"
        width="70%"
        justify="flex-start"
        margin="50px 0 30px 0">
            <VStack align="flex-start">
                <Shimmer width="70%" height="60px"  margin={"40px 0 0 0"} />
                <Shimmer width="15%" height="25px" margin={"10px 0 20px 0"} />
                <Shimmer width="100%" height="300px" margin={"10px 0 0 0"} />
            </VStack>
        </HStack>
    )
}

export default ShimmerTopicView