import './App.css'
import Header from './Components/Header'
import LandingPage from './Components/LandingPage'

function App() {

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <Header />
        <LandingPage />
      </div>
    </>
  )
}

export default App
