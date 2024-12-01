import { Outlet, useLoaderData } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import MoodList from "./components/MoodList";
import NavBar from "./components/NavBar";

function App() {
  const data = useLoaderData();

  return (
    <>
      <NavBar></NavBar>
      <main className="min-h-screen max-w-screen-xl mx-auto">
        <section>
          {data.map((mood, idx) => (
            <MoodList key={idx} mood={mood}></MoodList>
          ))}
        </section>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
