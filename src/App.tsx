// import { Home2Solid } from "@lineiconshq/free-icons"
// import Lineicons from "@lineiconshq/react-lineicons"
import Footer from "./components/shared/Footer"
import Navbar from "./components/shared/Navbar"
import MyListPage from "./pages/MyListPage"
// import Homepage from "./pages/Homepage"
// import Browsepage from "./pages/Browsepage"
// import ShowDetailpage from "./pages/ShowDetailpage"

function App() {
  return (
    <>
      <Navbar />

      {/* <main className="h-screen flex flex-col justify-center items-center bg-amber-200">
        <h1 className="font-bold font-zalando-expanded text-xl text-tertiary-700">
          ¡Hola ShowVault!
        </h1>
        <div className="text-tertiary-600 flex items-center gap-1">
          <Lineicons icon={Home2Solid} size={20} />
          Ejecutando primeras pruebas de tailwind
        </div>
      </main> */}

      {/* <Homepage /> */}
      {/* <Browsepage /> */}
      {/* <ShowDetailpage /> */}
      <MyListPage />

      <Footer />
    </>
  )
}

export default App
