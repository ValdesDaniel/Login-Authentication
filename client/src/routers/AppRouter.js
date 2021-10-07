import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import AccountPage from '../Pages/AccountPage';
import NotFoundPage from '../Pages/NotFoundPage';


export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/account" component={AccountPage} />
                <Route exact path="*" component={NotFoundPage}/>
            </Switch>
        </Router>
    );
}