import './App.css'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './store/slices/counter/counterSlice'
import { Link } from 'react-router-dom'

function App() {
  const body = 3 * Math.PI * Math.pow(10, 2)
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      Hello Redux 💜
      <p>The body of the earth is {body.toFixed(2)}km²</p>
      <p>The current count is {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <p>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </p>
      <p>
        <Link to='/home'>Home</Link>
      </p>
    </div>
  )
}

export default App
