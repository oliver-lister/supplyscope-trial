import "./App.css";
import Milestones from "./components/Milestones/Milestones";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <main className="flex justify-start">
        <Sidebar />
        <Milestones />
      </main>
    </>
  );
}

export default App;
