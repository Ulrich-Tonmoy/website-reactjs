import { Switch, Route, Redirect } from "react-router-dom";
import Results from "./Results";

export default function Routes() {
    return (
        <div className="p-4">
            <Switch>
                <Route exact path={["/search", "/images", "/news", "/videos"]}>
                    <Results />
                </Route>
                <Route exact path="/">
                    <Redirect replace to="/search" />
                </Route>
            </Switch>
        </div>
    );
}
