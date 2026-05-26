import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddTask from "./pages/AddTask"
import TaskList from "./pages/TaskList"
import DefaultLayout from "./layouts/DefaultLayout"
import { GlobalProvider } from "./contexts/GlobalContext"

function App() {


  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" Component={TaskList} />
            <Route path="/AddTask" Component={AddTask} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>

  )
}

export default App
