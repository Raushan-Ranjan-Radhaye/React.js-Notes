import reactLogo from './assets/react.svg';
import './App.css';
import Hello from './Hello';
import Bye from './Bye';



function App() {// App ye file ka naam hai

  return (
    <>
      <h1>App Compountent</h1>
      <Hello />
      {/* // yha hamne Hello compopnent ko use kiya hai jo ham Hello ka file me banaya hai */}
      <img src={reactLogo} className="logo react" alt="React logo" />
      <Bye />
    </>
  )
}

export default App



// yahai mailn file ham hararara isis me ham kar compopnenet ko use kar te hai