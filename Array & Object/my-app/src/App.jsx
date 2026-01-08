import Bye from './Bye';



function Hello(){

    const fruits = ['Apple', 'Banana', 'Cherry'];


  return(
    <div>
      <h1>Fruits List</h1>
      <ul>
        {fruits.map((fruit, index) => (// array ka valure se ye map la method use karte hai index se print karega
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <Bye />
    </div>
  )
}


export default Hello;