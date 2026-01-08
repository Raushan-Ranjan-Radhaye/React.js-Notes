function Hello(){



    const getName = (yourname) => {
        return yourname;
    }

    function handleClick(){
        alert("Button was click")
    }// we are make a functiom on events 

    const handleInput = (event) =>{
        console.clear()// iska use karne se ye purana value ko clear kar deta hai
        console.log("Value :", event.target.value)
    }
    const name = "YahooBaba"
    const name1 = "raushzmn"

    const handlerMouseOver = () =>{// mouse over event hai mose ko upar le jane par ye event call hoga console me
        console.log("Mouse Over Event Triggered")
    }

    const handleDoubleClick = () =>{// double click event hai button ya kisi bhi jagah par double click karne par ye event call hoga console me
        console.log("Double Click Event Triggered")
    }


    return(
        <>
            <h1>Hello {getName(name)}</h1>
            <h2>Bye {getName(name1)}</h2>

            <p onMouseOver ={handlerMouseOver}  onDoubleClick={handleDoubleClick} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, tempora.</p>

            <button onClick={handleClick}>Click Me</button>
            {/* events are call in click om button */}
            <button onClick={()=> alert("Hello From inline finction!")} >Say Hello</button>
            <br/>
            <input type="text" onChange={handleInput} placeholder="Type Somethings" />
        </>
    )
}

export default Hello;