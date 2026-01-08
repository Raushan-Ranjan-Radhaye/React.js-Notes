import React from 'react'

function UserProfile({userData}) {
    // Check if userData is null and throw an error to demonstrate error boundary
    if (!userData) {
        throw new Error('User data is null or undefined');
    }

    const username = userData.name;
    const age = userData.age;

    return (
        <div style={{border:'1px solid #000', padding:"20px"}} >
            <h4>User Profile</h4>
            <p>Name: {username}</p>
            <p>Age: {age}</p>
        </div>
    );
}


export default UserProfile
