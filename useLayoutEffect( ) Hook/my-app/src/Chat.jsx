import {useLayoutEffect, useRef} from 'react'

function Chat() {
    const chatRef = useRef(null)
    useLayoutEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [])


  return (
    <div ref={chatRef} style={{height:"150px", border:"1px solid #ccc", overflow:"scroll"}} >
      Animated Chat
      <br></br>
      <p>Hello</p>
      <p>How are you</p>
      <p>Welcome to Chat</p>
      <p>Testing....</p>
    


    </div>
  )
}

export default Chat
