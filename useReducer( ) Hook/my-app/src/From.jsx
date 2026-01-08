import React from 'react'
import { useReducer } from 'react'

function Form() {

    function reducer(state, action){
        return{
            ...state,
            [action.name] : action.value
        }
    }


    const [formData, dispatch] = useReducer(reducer, {
        
        username: "",
        email: ""
    })

    function handleChange(e){
        dispatch({
            name: e.target.name,
            value: e.target.value
        })
    }

  return (
    <div>
      <form>
        <input type="text" name='username' placeholder='username' value={formData.username} onChange={handleChange} />
        <input type="email" name="email" value={formData.email} placeholder='email' id="" onChange={handleChange} />
        <p>
            {formData.username} - {formData.email}
        </p>
      </form>
    </div>
  )
}

export default Form
