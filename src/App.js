import './App.css'

function App() {
  const body = 3 * Math.PI * Math.pow(10, 2)

  return (
    <div className='App'>
      Hello Redux 💜
      <p>The body of the earth is {body.toFixed(2)}km²</p>
    </div>
  )
}

export default App
