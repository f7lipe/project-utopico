import { useContext } from "react"
import { NetworkContext } from "../contexts/NetworkContext"

const useNetwork = () => {
    const context = useContext(NetworkContext)
    if (!context) {
        throw new Error('useNetwork must be used within a NetworkProvider')
    }
    return context
}

export default useNetwork