import "./App.css";
import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer/MainContainer";
import RightBar from "./components/RightBar/RightBar";

function App() {
    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <MainContainer />
                <RightBar />
            </div>
        </div>
    );
}

export default App;
