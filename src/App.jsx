import { AppContextProvider } from "./context/AppContext"
import Home from "./page/Home"

function App() {
  return (
    <AppContextProvider>
      <Home />
    </AppContextProvider>
  )
}

export default App