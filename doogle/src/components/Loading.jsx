import Loader from "react-loader-spinner";

export default function Loading() {
    return (
        <div className="flex justify-center items-center">
            <Loader type="BallTriangle" color="#00bfff" height={550} width={80} />
        </div>
    );
}
