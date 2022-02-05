import {
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import {PublicRoute} from "./PublicRoute";
import Calculator from "../components/Calculator";

const AppRouter = () => {

    return(
        <Router>
            <Switch>
                <PublicRoute
                    path="/calculator"
                    isAuthenticated={false}
                >
                    <Calculator/>
                </PublicRoute>
            </Switch>
            <Redirect to="/calculator"/>
        </Router>
    );
}

export default AppRouter