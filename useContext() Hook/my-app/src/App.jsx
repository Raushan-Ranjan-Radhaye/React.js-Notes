import React, { createContext, useContext} from 'react'

const UserContext = createContext();



function App() {
  const user = "Raushan Ranjan"
  return (
    <div>
      <UserContext.Provider value={user} >
        <Parent/>
      </UserContext.Provider>
    </div>
  )
}


function Parent(){
  return <Child/>
}


function Child(){
  return (
    <div>
      
    </div>
  )
}

function GrandChild(){
  const user = useContext(UserContext)
  return(
    <h3>My name is {user}</h3>
  )
}









export default App
