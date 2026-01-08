import Hello from "./Hello"
import Button from "./Button"

function App() {

  const hobbies = ["Reading", "Coding", "Traveling"]

  function Message(){// yayah par ham Message naam ka finction banaya hai jo nichay use ho rha hai
    alert("Button Clicked")
  }


  return (
    <>
      <Hello name="Yahoobaba" age={25} city="cahndigrah" hobbies={hobbies} />
      <Hello name="Raushan Ranjan" />
      <Button Label="Click mE " handlerClick={Message}/>
    </>
  )
}



export default App
