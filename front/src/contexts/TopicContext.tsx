import { createContext, useState } from 'react'
//import useEditor  from '../hooks/useEditor'
import axios from "axios"


interface ITopicContext {
    createTopic: (title: string, content?: string) => Promise<void>
    getTopics: () => Promise<void>
    getTopic: (_id: string) => Promise<void>
    editTopic: (_id: string, title?: String, content?: string) => Promise<void>
    deleteTopic?: (_id: string) => Promise<void>
    archiveTopic?: (_id: string) => Promise<void>
    topics: Topic[]
    isEditing: boolean
    isLoading: boolean
    error: string
}

interface ITopicProvider {
    children: React.ReactNode
}

const TopicContext = createContext<ITopicContext | null>(null)

//const API = process.env.API

const TopicProvider = ({ children } : ITopicProvider) => {
    const [isEditing, setIsEditing] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [topics, setTopics] = useState<Topic[]>([])

    const createTopic = async (title: string, content?: string) => {

    }

    const getTopics = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get(`https://639a7d283a5fbccb5268037a.mockapi.io/topics`)
            const data: Topic[] = await response.data
            console.log("response: ", response)
            setTopics(data)
            setIsLoading(false)
        } catch (error: any) {
            setIsLoading(false)
            setError(error.message)
            console.log("error: ", error)
        }
    }

    const getTopic = async (_id: string) => {
    }

    const editTopic = async (_id: string, title?: String, content?: string) => {
    }

    const deleteTopic = async (_id: string) => {
    }

    const archiveTopic = async (_id: string) => {
    }

    return (
        <TopicContext.Provider value={
            { 
                createTopic, 
                getTopics,
                getTopic, 
                editTopic,
                deleteTopic, 
                archiveTopic, 
                topics,
                isEditing, 
                isLoading,  
                error, 
                }
            }>
            {children}
        </TopicContext.Provider>
    )
}

export { TopicContext, TopicProvider }