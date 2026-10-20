import {evento} from '../data/evento'

function Rodape() {
    return <footer> {evento.nome} . {evento.data} </footer>
}

export default Rodape;