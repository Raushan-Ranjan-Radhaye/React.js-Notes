import { useState } from 'react'
// rfce type karne par automatically function banayega

function ToggleText() {
  const [isVisible, setIsVisible] = useState(false)

  return (// yaha par ham logic udse kiya hai button par click hone par hide ya show hone ka
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Text
      </button>
      {isVisible && <p>This is the text to toggle.</p>}
    </div>
  )
}

export default ToggleText
