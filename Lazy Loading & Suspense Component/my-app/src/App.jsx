import {useState, Suspense, lazy} from 'react'
// import Post from './Post'

const Post = lazy(() => import('./Post'))

function App() {
    const [showPosts, setShowPosts] = useState(false);
  return (
    <div>
        <button onClick={() => setShowPosts(true)} >Show Posts</button>
        {showPosts && (
          <Suspense fallback = {<p>Loading Post...</p>} >
            <Post/>
          </Suspense>
        )}
    </div>
  )
}

export default App
