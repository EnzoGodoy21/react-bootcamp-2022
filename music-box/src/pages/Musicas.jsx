import CardMusica from "../components/CardMusica";
import Menu from "../components/Menu";

function Musicas() {
    return (
        <>
            <Menu />
            <div class="container">
                <div class="filter">
                    <button class="btn">Adicionar</button>
                </div>
            </div>

            <div class="container">
                <div class="music-boxes">

                <CardMusica nome="Evidencias" categoria="Sertanejo" artista="Chitãozinho e Xororó" ano="1900"/>
                <CardMusica nome="Diamonds" categoria="Pop" artista="Sam Smith" ano="2019"/>
                <CardMusica nome="Fulminante" categoria="Pagode" artista="Mumuzinho" ano="2011"/>

                </div>
            </div>
        </>
    );
}

export default Musicas;