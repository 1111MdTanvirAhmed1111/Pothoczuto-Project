import { useUser } from '@/contexts/User'
import { useChat } from '@/contexts/chat-context'

export default function MesseegeButtonParent({receiverId,children}) {
  const {user,setUser}= useUser()

  const {chat,setChat} = useChat()
  return (
    <div>
      

    {user&&<button onClick={()=>{
      setChat({
    from:user._id,
    to:receiverId,
    content:''
      })
    }}>
{children}

    </button>}

    </div>
  )
}
