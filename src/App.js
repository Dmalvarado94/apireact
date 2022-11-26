import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuPadre/menu.js';
import Home from './components/Homep/home';
import Episodios from './components/Episodios/episodios';
import Personajes from './components/Personajes/personajes';
import Citas from './components/Citas/citas';


function App() {
    const currentURL = window.location.pathname // Esto lo sacamos de Inseccionar Personaje del menú
    function renderContent() {
        switch (currentURL) {
            case "/":
                return <Home/>
            case "/personajes":
                return <Personajes/>
            case "/citas":
                return <Citas/>
            case "/episodios":
                return <Episodios/>
            default:
                return <Home/>
        }
    }
    return (<div className="App">
        <Menu />
        {renderContent()}
    </div>
    );
}

export default App;