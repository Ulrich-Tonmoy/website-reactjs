import "./List.scss";
import Sidebar from "./../../components/sidebar/Sidebar";
import Navbar from "./../../components/navbar/Navbar";
import DataTable from "./../../components/datatable/DataTable";

const List = ({ page, link }) => {
    return (
        <div className="list">
            {!page && <Sidebar />}
            <div className="listContainer">
                <Navbar />
                <DataTable link={link} />
            </div>
        </div>
    );
};

export default List;
