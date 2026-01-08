import React, { useState } from 'react'

function LikeButton() {
    const [Liked, setLiked] = useState(false)
  return (
    <div>
        <button onClick={() => setLiked(!Liked)} >
            {Liked ? "Liked" : " like" } Text
        </button>
    </div>
  )
}

export default LikeButton
