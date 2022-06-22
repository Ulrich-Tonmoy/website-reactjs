import "./MainContainer.css";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";

const MainContainer = () => {
    return (
        <div className="MainContainer">
            <h1>Dashboard</h1>
            <Cards />
            <Table />
        </div>
    );
};

export default MainContainer;
