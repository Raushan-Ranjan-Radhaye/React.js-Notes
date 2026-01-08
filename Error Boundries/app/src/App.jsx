import React from 'react'
// iska use ham
//jab ek route me error hoga to wo nahi chalega baki sab chalege blaxnk screen show nahi hoga

import UserProfile from "./UserProfile"
import ErrorBoundary from "./ErrorBoundary";

function App() {

  const userData = {
    name: "Rohit",
    age: 21
  };

  const userData1 = null;

  return (
    <>
      <ErrorBoundary>
        <UserProfile userData={userData} />
      </ErrorBoundary>
      {/* iska mera data shai hai */}

      <ErrorBoundary fallback={<h1>Error in userProfile</h1>} >
        <UserProfile userData={userData1} />
        {/* iskas mera data shai nahi hai to ye blank screen show hoga shai wala route bhi nahi chalega */}
      </ErrorBoundary>
    </>
  )
}

export default App
