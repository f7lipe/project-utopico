import { createContext, useState, useCallback } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"


interface ITopicContext {
    id: string | undefined
    createTopic: (title: string, content?: string) => Promise<void>
    getTopics: () => void
    getTopic: () => void
    editTopic: (title?: String, content?: string) => Promise<void>
    deleteTopic?: (_id: string) => Promise<void>
    archiveTopic?: (_id: string) => Promise<void>
    cleanUp: () => void
    topics: Topic[]
    topic: Topic
    isEditing: boolean
    setIsEditing: (editing: boolean) => void
    isLoading: boolean
    status: 'saving' | 'saved' | 'created' | 'creating' | 'idle' |'error'
    error: string
}

interface ITopicProvider {
    children: React.ReactNode
}

const TopicContext = createContext<ITopicContext | null>(null)

//const API = process.env.API

const TopicProvider = ({ children } : ITopicProvider) => {
    const { id } = useParams<{id: string}>()
    const [isEditing, setIsEditing] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [topics, setTopics] = useState<Topic[]>([])
    const [topic, setTopic] = useState<Topic>({} as Topic)
    const [status, setStatus] = useState<'saving' | 'idle' | 'saved' |  'created' | 'creating' | 'error'>('idle')
    const createTopic = async (title: string, content?: string) => {
        try {
            setStatus('creating')
            await axios.post(`https://639a7d283a5fbccb5268037a.mockapi.io/topics`, {
                title,
                content
            })
            setStatus('created')
        } catch (error: any) {
            setStatus('error')
            setError(error.message)
            console.log("error: ", error)
        }
    }

    const getTopics = useCallback(()=>{
       const getAllTopics =  async () => {
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
        getAllTopics()
    }, [])

    const getTopic = useCallback( ()=>{
      const fetch =  async () => {
            try{ 
                setIsLoading(true)
                const response = await axios.get(`https://639a7d283a5fbccb5268037a.mockapi.io/topics/${id}`)
                const data: Topic = await response.data
                setTopic(data)
                setIsLoading(false)
            } catch (error: any) {
                setIsLoading(false)
                setError(error.message)
                console.log("error: ", error)
            }
        
        }
        fetch()
    },[id])

    const editTopic = async (title?: String, content?: string) => {
        try{
            setStatus('saving')
            const response = await axios.put(`https://639a7d283a5fbccb5268037a.mockapi.io/topics/${id}`, {
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

    const cleanUp = useCallback(() => {
        // if(status === 'saved') {...}
            setIsEditing(false)
            setIsLoading(false)
            setError('')
            setTopics([])
            setTopic({} as Topic)
            setStatus('idle')
    }, [])

    return (
        <TopicContext.Provider value={
            {   
                id,
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