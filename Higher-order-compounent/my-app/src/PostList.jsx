import React from 'react'


function PostList({data, loading, error}) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <ul>
        {data.map(post => (
            <li key={post.id}>{post.title}</li>
        ))}
    </ul>
  )
}

export default PostList
