import "./RightBar.css";
import Updates from "./../Updates/Updates";
import CustomerReview from "./../CustomerReview/CustomerReview";

const RightBar = () => {
    return (
        <div className="RightBar">
            <div>
                <h3>Updates</h3>
                <Updates />
            </div>
            <div>
                <h3>Customer Review</h3>
                <CustomerReview />
            </div>
        </div>
    );
};

export default RightBar;
