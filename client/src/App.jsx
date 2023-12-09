import LeftSidebar from "./components/LeftSidebar"
import Topbar from "./components/Topbar"


const App = () => {
  return (
    <>
    <Topbar/>
    <main className="flex flex-row">
      <LeftSidebar/>
    </main>
    
    </>
  )
}

export default App
