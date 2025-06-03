import './App.css'
import StyledButton, {FancyButton} from './components/Button/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Styled App</h1>
        <StyledButton>Click Me!</StyledButton>
        <br />
        <StyledButton variant='outline'>Click Me!</StyledButton>
        <br />
        <FancyButton as="a">Click Me!</FancyButton>
      </header>
    </div>
  )
}

export default App
