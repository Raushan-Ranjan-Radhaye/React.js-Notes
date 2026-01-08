import React, { useState } from 'react'

function AdvancedForm() {
  const [formData, setFormData] = useState({
    gender: '',
    country: 'India', //from open hoga to starting me india select rahiega 
    agree: false// iskas matklab hai ki jab bhi from open hoga us samaya from uncheck hoga
    // aur user checked value ko fill nahi kaeiga to wo false output dega nahi to true
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value// yaha par ham condation ko laga rahi hai name agar checked hoga to wo checked hi rahi ge nahi to wo value banega
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();// page ko refresh ko stop karta hai
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form with Checkbox, Radio & Select</h2>

      <div>
        <input type="radio" id="male" name="gender" value="Male" onChange={handleChange} checked={formData.gender === 'Male'} />
        {/*agar user male ko select karta hai to ya female ko select kaeta hai to useko ye fromData variable me store karegega*/}
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="gender" value="Female" onChange={handleChange} checked={formData.gender === 'Female'} />
        <label htmlFor="female">Female</label>
      </div>

      <label>
        Country
        <select name="country" id="country" value={formData.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
      </label>
      <br/>

      <label>
        <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
        I agree to terms and conditions
      </label>
      <br/>

      <button type="submit">Submit</button>
    </form>
  )
}

export default AdvancedForm
