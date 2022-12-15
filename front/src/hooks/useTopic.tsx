import { useContext } from 'react'
import { TopicContext } from '../contexts/TopicContext'

const useTopic = () => {
    const context = useContext(TopicContext)
    if (!context) {
        throw new Error('useTopic must be used within a TopicProvider')
    }
    return context
}

export default useTopic
