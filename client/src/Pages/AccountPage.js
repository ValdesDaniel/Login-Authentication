import { Link } from "react-router-dom";
import logo from '../user1.png';

export default function AccountPage() {
    return (
        <div class="accountpage">
            <img src={logo} className="App-logo" alt="logo"/>
            <p class="accountpage_p">Name:</p>
            <p class="accountpage_p">Daniel Valdés</p>
            <p class="accountpage_p">Email:</p>
            <p class="accountpage_p">thevaldz@gmail.com</p>
            <Link to="/"><p class="accountpage_p_logout">Logout</p></Link>
        </div>
    );
}