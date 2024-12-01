
import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  

  return (
    <>
      <NavBar></NavBar>
      <main className="min-h-screen max-w-screen-xl mx-auto">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
