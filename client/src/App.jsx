import "./App.css";
import LeftBar from "./components/LeftBar";
import CenterBar from "./components/CenterBar";
import RightBar from "./components/RightBar";

function App() {
    return (
        <div className="app">
            <LeftBar />
            <CenterBar />
            <RightBar />
        </div>
    );
}

export default App;
