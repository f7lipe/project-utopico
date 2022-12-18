import { createContext, useState } from 'react'
import axios from "axios"


interface ITopicContext {
    createTopic: (title: string, content?: string) => Promise<void>
    getTopics: () => Promise<void>
    getTopic: (_id: string) => Promise<void>
    editTopic: (_id: string, title?: String, content?: string) => Promise<void>
    deleteTopic?: (_id: string) => Promise<void>
    archiveTopic?: (_id: string) => Promise<void>
    cleanUp: () => void
    topics: Topic[]
    topic: Topic
    isEditing: boolean
    setIsEditing: (editing: boolean) => void
    isLoading: boolean
    status: 'saving' | 'saved' | 'idle' |'error'
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
    const [topic, setTopic] = useState<Topic>({} as Topic)
    const [status, setStatus] = useState<'saving' | 'idle' | 'saved' | 'error'>('idle')
    const createTopic = async (title: string, content?: string) => {
    }

    const getTopics = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get(`https://639a7d283a5fbccb5268037a.mockapi.io/topics`)
            const data: Topic[] = await response.data
            setTopics(data)
            setIsLoading(false)
        } catch (error: any) {
            setIsLoading(false)
            setError(error.message)
            console.log("error: ", error)
        }
    }

    const getTopic = async (_id: string) => {
        try{
            setIsLoading(true)
            const response = await axios.get(`https://639a7d283a5fbccb5268037a.mockapi.io/topics/${_id}`)
            const data: Topic = await response.data
            setTopic(data)
            setIsLoading(false)
        } catch (error: any) {
            setIsLoading(false)
            setError(error.message)
            console.log("error: ", error)
        }
    
    }

    const editTopic = async (_id: string, title?: String, content?: string) => {
        try{
            setStatus('saving')
            const response = await axios.put(`https://639a7d283a5fbccb5268037a.mockapi.io/topics/${_id}`, {
                title,
                content
            })
            const data: Topic = await response.data
            if (data.title) setTopic(data)
            setStatus('saved')
        } catch (error: any) {
            setIsLoading(false)
            setError(error.message)
            console.log("error: ", error)
        }
    }

    const deleteTopic = async (_id: string) => {
    }

    const archiveTopic = async (_id: string) => {
    }

    const cleanUp = () => {
        setIsEditing(false)
        setIsLoading(false)
        setError('')
        setTopics([])
        setTopic({} as Topic)
        setStatus('idle')
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
                topic,
                isEditing, 
                setIsEditing,
                isLoading,  
                status,
                error, 
                cleanUp
                }
            }>
            {children}
        </TopicContext.Provider>
    )
}

export { TopicContext, TopicProvider }