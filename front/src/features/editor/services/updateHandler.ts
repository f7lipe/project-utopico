import { UPDATE_INTERVAL } from '../data/constants'

interface Props {
    updatedContent: string
    handlerFunction: (content: string) => void
}

// This is a dummy timeout to avoid the error "Cannot read property 'hasRef' of undefined"
let timeoutId: NodeJS.Timeout = setTimeout(() => {}, 0)

const updateHandler = ({updatedContent, handlerFunction} : Props) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
       handlerFunction(updatedContent)
    }, UPDATE_INTERVAL);
}

export default updateHandler