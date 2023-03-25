import { useContext } from 'react'
import { AppContext } from './context/store'
import { BiSun, BiMoon } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'

function App() {
  const { theme, toggle } = useContext(AppContext)

  return (
    <div className = { theme === 'light' ? 'container__light' : 'container__dark' }>
      <div className = 'root'>
        <h1>Welcome to react with context!</h1>
        <p>Get started by editing <span style = { theme === 'light' ? { background: '#e3e4e6' } : { background: '#fde047' } }>context/store.js</span></p>
        <button onClick = { toggle }>
          { theme === 'light' ? <BiMoon /> : <BiSun /> }
        </button>
        <div className = 'grid'>
          <div className = 'card'>
            <span>
              Documentation
              <a href = 'https://hy.reactjs.org/docs/context.html'><BsArrowRight /></a>
            </span>
            <p>Find in-depth information about context API, reducers and more.</p>
          </div>
          <div className = 'card'>
            <span>
              Learn More
              <a href = 'https://github.com/dasgupta002/react-context'><BsArrowRight /></a>
            </span>
            <p>Contribute and star to feature in the change behind this project.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App