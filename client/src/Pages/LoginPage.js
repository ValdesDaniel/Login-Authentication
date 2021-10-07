import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div class="login__page">
            <div class="login_page_header">
                <h1 class="header__title">Welcome!</h1>
                <input class="header__email" type="text" placeholder="Email" name="email" required></input>
                <input class="header__password" type="text" placeholder="Password" name="pws" required></input>
                <Link to="/account"><button class="header__button"><a href="www.google.com" target="_blank">SIGN IN</a></button></Link>
            </div>
        </div>
    );
}


