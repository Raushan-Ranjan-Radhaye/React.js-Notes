import React, { useState, useEffect } from 'react'

function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')// te fake api ka data hai
        .then(response => response.json())
        .then(json => setUsers(json))
    }, [])

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((u) => (// map loop chalke ham isko show kaerte hai
                    <li key={u.id}>{u.name}</li>//name aur id 
                ))}
            </ul>
        </div>
    )
}

export default Users
