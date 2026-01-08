import React from 'react'
import SimpleFrom from './SimpleFrom'
import MultiInputFrom from './MultiInputFrom'
import AdvancedFrom from '../public/AdvancedFrom'
import UncontrolledFrom from './UncontrolledFrom'
import BasicValidationFrom from './BasicValidationFrom'

function App() {
  return (
    <div>
      <SimpleFrom/>
      <MultiInputFrom/>
      <AdvancedFrom/>
      <UncontrolledFrom/>
      <BasicValidationFrom/>
    </div>
  )
}

export default App
