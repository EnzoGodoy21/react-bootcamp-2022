import logo_verde from "../html-css-template/imagens/logo-verde.png"
import avatar from "../html-css-template/imagens/avatar.png"

function Menu() {
    return (
        <nav>
            <div class="container">
                <img src={logo_verde} alt="Logo" class="logo" />
                <img src={avatar} alt="Avatar" class="avatar" />
            </div>
        </nav>
    );
}

export default Menu;