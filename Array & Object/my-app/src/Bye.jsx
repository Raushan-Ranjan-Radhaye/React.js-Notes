function Bye(){
    const user = {firstname: "John", lastname: "Doe",age: 30};
    return (
        //iska help se ham object ka value ko name wise print kar sakte hai
        <div>
            <h2>User Information</h2>
            <p>First Name: {user.firstname}</p>
            <p>Last Name: {user.lastname}</p>
            <p>Age: {user.age}</p>
        </div>
    )
}

export default Bye;