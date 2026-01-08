
function Hello(props) {

    const {name="1", age="2", city="3", hobbies = []} = props// yaha par ham props ka default value ko set karte hai
    // jab hamara varible ka value assign nahi huwa ho to wo ye default value lega

//     return (// yahah par ham props ka use kar rahi hai durare file ka varible ko use kar ke ham durasa file me use kar te hai
//         <div>
//             <h1>Hello, {props.name}!</h1>
//             <p>Age: {props.age}</p>
//             <p>City: {props.city}</p>
//         </div>
//     )
// }

    return (// ham yaha par ek hi par me varible ko set kar ke usko props banake usko ham use karngene
        <div>
            <h1>Hello, {name}!</h1>
            <p>Age: {age}</p>
            <p>City: {city}</p>
            <ul>
                {hobbies.map((hobby, index)=>(
                    <li key={index} > {hobby}</li>
                ))}
            </ul>
        </div>
    )
}



export default Hello