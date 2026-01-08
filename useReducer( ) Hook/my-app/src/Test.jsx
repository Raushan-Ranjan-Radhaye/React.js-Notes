import React from 'react'
import { useReducer } from 'react'


/// we are used the useState to craete a fill box user click to (checked ) then show checked or clicked are unCchecked vice veesa
function Test() {
    const [checked, toggle] = useReducer((checked)=>!checked, false);

  return (
    <div>
      <input type="checkbox" checked={checked} onChange={toggle} />

    {checked ? "checked" : "not Checked" }
    </div>
  )
}

export default Test
