import { VStack } from "../../components/Stack View/VStack"
import { useEffect } from "react"
import { LargeHeading } from "../../components/Typografies"
import CollectionView from "../../components/Collection View"
import useTopic from "../../hooks/useTopic"
import ShimmerTopics from "./Shimmer/ShimmerTopics"
import Toolbar from "./Topic Toolbar"
import Topic from "../../components/Topic"
import InfoBanner from "../../components/Informative Banner"
import write_new_post from "../../assets/write_new_post.svg"

const Topics = () => {
    const { topics, getTopics, isLoading, status } = useTopic()
    const reload = status === 'created'

    useEffect(() => {
        getTopics()
    }, [getTopics, reload])

    return (
        <VStack
            width="70%"
            widthMobile="100%"
            margin="0 20px"
            padding="20px"
            justify="flex-start"
            align="flex-start">
            {isLoading && <ShimmerTopics />}
            {!isLoading && <Toolbar />}
            {!isLoading && topics.length > 0 &&
                (
                    <>
                        <LargeHeading>Brand New</LargeHeading>
                        <CollectionView items={topics} renderItem={Topic} />
                    </>
                )

            }
            {!isLoading && topics.length === 0 &&
                <InfoBanner
                    image={write_new_post}
                    title="You haven't written any topic yet"
                    subtitle="Create new topics and bring your ideas" />
            }


        </VStack>
    )
}

export default Topics