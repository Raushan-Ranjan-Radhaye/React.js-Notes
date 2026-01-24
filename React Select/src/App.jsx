import Select from "react-select";
import AsyncSelect from "react-select/async";
import { useState } from "react";

function App() {
  const [fruit, setFruit] = useState(null);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const customStyles = {
    control: (base) => ({
      // yaha par ham custom styles de sakte hai control ke keyword ke through from ka
      ...base,
      borderColor: "red",
      borderRadius: "5px",
      padding: "5px",
      borderWidth: "4px",
    }),

    option:(base) => ({
      ...base,
    color: "blue",
    backgroundColor: "lightgray",
    padding: 10,
    margin: 5,
    borderRadius: 5,
  }),

  singleValue: (base) => ({
    ...base,
    color: "green",
    backgroundColor: "black",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    fontweight: "bold",
  })

  };

  return (
    <div style={{ width: "300px" }}>
      <Select
        isClearable // claera ho jayega click kar ne par
        options={options}
        value={fruit}
        onChange={setFruit}
        isMulti
        placeholder="Select a fruit"
        // isSearchable={false} search ka option disable karne ke liye
        styles={customStyles}
      />
      {/* isMulti ke help se ham multiple select krenge from me */}
      <p>{fruit && fruit.length > 0 
        ? `You selected: ${fruit.map(item => item.label).join(', ')}`
        : "Please select an option"}</p>

        <AsyncSelect 
          loadOptions={(input) => {
            return fetch(`https://jsonplaceholder.typicode.com/users?username=${input}`)
              .then((res) => res.json())
              .then((data) => data.map((user) => ({
                value: user.id,
                label: user.name
              })))
          }} 
          placeholder="Search users..."
          styles={customStyles}
        />


    </div>
  );
}

export default App;