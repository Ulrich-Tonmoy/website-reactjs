import {
    AccountBalanceWalletOutlined,
    KeyboardArrowDown,
    KeyboardArrowUp,
    MonetizationOnOutlined,
    PersonOutlined,
    ShoppingCartOutlined,
} from "@mui/icons-material";
import "./Widget.scss";

const Widget = ({ type }) => {
    let data;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                amount: 100,
                diff: 20,
                icon: (
                    <PersonOutlined
                        className="icon"
                        style={{
                            color: "crimson",
                            backgroundColor: "rgba(255, 0, 0, 0.2)",
                        }}
                    />
                ),
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                amount: 100,
                diff: -10,
                icon: (
                    <ShoppingCartOutlined
                        className="icon"
                        style={{
                            backgroundColor: "rgba(218, 165, 32, 0.2)",
                            color: "goldenrod",
                        }}
                    />
                ),
            };
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                amount: 100,
                diff: 20,
                icon: (
                    <MonetizationOnOutlined
                        className="icon"
                        style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
                    />
                ),
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                amount: 100,
                diff: 20,
                icon: (
                    <AccountBalanceWalletOutlined
                        className="icon"
                        style={{
                            backgroundColor: "rgba(128, 0, 128, 0.2)",
                            color: "purple",
                        }}
                    />
                ),
            };
            break;
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                    {data.isMoney && "$"}
                    {data.amount}
                </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className={`percentage ${Number(data.diff) > 0 ? "positive" : "negative"}`}>
                    {Number(data.diff) > 0 ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    {data.diff}%
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;
