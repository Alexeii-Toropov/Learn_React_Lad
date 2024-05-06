import PutImage from "./components/Profile/Profile"
import Mybutton from "./components/Mybutton/Mybutton"
import PutProduct from "./components/Product/Product";
function App() {
  const isLogged = true;
  

  return (
    <>
      <Mybutton/>
      {isLogged ? <PutImage></PutImage> : null}
      <PutProduct/>
      
    </>
  )
}

export default App
