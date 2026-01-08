import React from 'react'
import Greeting from './Greeting'
import GreetingWithStyle from './GreetingWithStyle'
import PostListWithData from './PostListWithData'
import Dashboard from './Dashboard'
import withAuth from './hoc/withAuth'


const ProtectedDashboard = withAuth(Dashboard)

function App() {
  return (
    <div>
      <Greeting name='yahoobaba'/>
      <GreetingWithStyle name="Sachit" />
      <PostListWithData />
      <Dashboard/>
      <withAuth/>
      
    </div>
  )
}

export default App
