import { useUser } from '@/contexts/User'
function MesseegeButtonParent({receiverId,children}) {
  const {_id}= useUser()
  console.log(_id,receiverId)

  return (
    <div>
      {children}
    </div>
  )
}

export default MessegeButtonParent