import PutImage from "./components/Profile/Profile"
import Mybutton from "./components/Mybutton/Mybutton"
import { Profiler } from "react";
function App() {
  const isLogged = false;

  return (
    <>
      <Mybutton/>
      {isLogged ? <PutImage></PutImage> : null}
    </>
  )
}

export default App
