import './App.css';
import Login from './login';
import Planet from './planet';

function App() {
  return (
    <div className='container'>
      <h1>Star Wars</h1>
      {window.location.pathname.includes('/planet') && <Planet />}
      {window.location.pathname === '/' && <Login />}
    </div>
  )
}

export default App
