import { useState } from "react";

function App() {

  const [form, setForm] = useState({
    amount: 0,
    description: "",
    date:""
  })

  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:4000/transtaction`,
      {
        method: 'POST',
        body: form
      }
    )
    console.log(res);
  }

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name] : e.target.value })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleInput}
          placeholder='Enter transaction amount' 
        />
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleInput}
          placeholder='Enter transaction details' 
        />
        <input
          type="date"
          name="date"
          onChange={handleInput}
          value={form.date}
        />
        <button type="submit" >submit</button>
      </form>
    </>
  )
}

export default App
