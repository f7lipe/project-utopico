import { HStack } from "../../../components/Stack View/HStack"
import { VStack } from "../../../components/Stack View/VStack"
import { Shimmer } from "../../../components/Shimmer Effect"

const ShimmerTopics = () => {
    return (
        <HStack>
            <VStack align="flex-start">
                <Shimmer width="100%" height="60px" borderRadius={"10px"} margin={"0 0 30px 0 "} />
                <Shimmer width="300px" height="55px" margin={"10px 0 0 0"} />
                <Shimmer width="140px" height="140px" margin={"10px 0 0 0"} />
            </VStack>
        </HStack>
    )
}

export default ShimmerTopics