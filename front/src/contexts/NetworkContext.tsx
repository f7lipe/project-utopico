import { createContext, useEffect, useState } from "react"
import useNotification from "../hooks/useNotification"
import {CiCloudOff} from "react-icons/ci"

interface INetwork{
  state: {
    since: string | undefined;
    online: boolean;
    rtt?: number | undefined;
    type?: string | undefined;
    saveData?: boolean | undefined;
    downLink?: number | undefined;
    downLinkMax?: number | undefined;
    effectiveType?: string | undefined;
  }
}

interface INetworkProvider{
    children: React.ReactNode
}

const NetworkContext = createContext<INetwork|null>(null)

declare const navigator: any;
const NetworkProvider = ({children} : INetworkProvider) =>{

  const { addNotification, removeNotification } = useNotification()
    
    function getNetworkConnection() {
        return (
          navigator.connection ||
          navigator.mozConnection ||
          navigator.webkitConnection ||
          null
        );
      }
      /* -- TODO: Implement this function
      function getNetworkConnectionInfo() {
        const connection = getNetworkConnection();
      if (!connection) {
          return {};
        }
      return {
          rtt: connection.rtt,
          type: connection.type,
          saveData: connection.saveData,
          downLink: connection.downLink,
          downLinkMax: connection.downLinkMax,
          effectiveType: connection.effectiveType,
        };
      }
      */

    const [state, setState] = useState(() => {
        return {
          since: undefined,
          online: navigator.onLine,
          //...getNetworkConnectionInfo(),
        };
      });
    useEffect(() => {
      const notification: AppNotification = {
        notificationType: "offline",
        message: "You are offline",
        resolved: false,
        isTemporary: false,
        icon: CiCloudOff 
      }
      const handleOffline = () => {
        setState((prevState: any) => ({
          ...prevState,
          online: false,
          since: new Date().toString(),
        }));
        addNotification(notification)
      };
      const handleOnline = () => {
           setState((prevState: any) => ({
             ...prevState,
             online: true,
             since: new Date().toString(),
           }));
          removeNotification(notification)
         };
    const handleConnectionChange = () => {
          setState((prevState: any) => ({
            ...prevState,
            //...getNetworkConnectionInfo(),
          }));
        };
    
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    
    const connection = getNetworkConnection();
    connection?.addEventListener("change", handleConnectionChange);
    
    return () => {
          window.removeEventListener("online", handleOnline);
          window.removeEventListener("offline", handleOffline);
          connection?.removeEventListener("change", handleConnectionChange);
        };
      }, []);

    return (
    <NetworkContext.Provider value={{state}}>
        {children}
    </NetworkContext.Provider>
    )
}

export { NetworkProvider, NetworkContext }
