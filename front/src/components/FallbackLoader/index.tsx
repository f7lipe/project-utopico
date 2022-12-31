import { FallbackLoaderContainer } from "./styles"
import GridLoader from "react-spinners/GridLoader"

const FallbackLoader = () => {
    return (
        <FallbackLoaderContainer>
            <GridLoader
                color="rgba(105, 105, 105, 0.23)"
                size={20}
                speedMultiplier={0.4}
            />
        </FallbackLoaderContainer>
    )
}

export default FallbackLoader