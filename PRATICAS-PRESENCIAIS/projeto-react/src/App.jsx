import Navbar from "./components/navbar";
import ViewHome from "./components/View/ViewHome";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="container p-5">
        <ViewHome />
      </main>
    </div>
  );
}

export default App;
