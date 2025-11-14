import './App.css'


function Hello() {// Hello ye file ka naam hai
    const name  = "Yahoo baba";
    const headingStyle = {
        color: 'blue',
        backgroundColor: 'yellow',
        padding: '10px',
        borderRadius: '5px',
        textAlign: 'center'
    };


// style = {headingStyle} isis tarh ham pass karte hai function me style kar ke
  return (
    <>
  <h1 style={headingStyle} className='test' >Hello, Compopnenet! {name}</h1>;
  <p className='test' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, est!</p>
  <p style={{color:"red"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, praesentium.</p>
  {/* double bracket ke ander ham apna custom csss de te hai */}
  </>
  )
}


export default Hello;// yha se ham isko exxport kar rhe hai jisse ham isko dusri file me import kr ske