 "use client"
 
 import { createContext, useState, use, useEffect } from 'react';
 
 const ChatContext = createContext();



 export function ChatProvider({ children }) {
const [chat,setChat] = useState(null)
console.log(chat)
 
     return (
         <ChatContext.Provider value={{ chat, setChat }}>
             {children}
         </ChatContext.Provider>
     );
 }
 
 export function useChat() {
     const context = use(ChatContext);
     return context;
 }
 