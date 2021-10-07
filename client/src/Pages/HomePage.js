import { Link } from "react-router-dom";


export default function HomePage() {
    return(
        <div class="page">
            <div class="header header-g">
                <h1 class="header-g__title">Welcome Back!</h1>
                <h2 class="header-g__subtitle">To keep connected with us please login with your personal info</h2>
                <Link to="/login"><button class="header-g__btn"><a href="/" target="_blank">SIGN IN</a></button></Link>
            </div>
            <div class="header header-w">
                <h1 class="header-w__title">Create Account</h1>
                <input class="header-w__inputname" type="text" placeholder="Name" name="nam" required></input>
                <input class="header-w__inputemail" type="text" placeholder="Email" name="uname" required></input>
                <input class="header-w__inputpassword" type="password" placeholder="Password" name="psw" required></input>
                <button class="header-w__btn">SING UP</button>
            </div>
        </div>
    );
}
