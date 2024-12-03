import { Link } from "react-router-dom";
import './Titulo.css'

 
export function Titulo() {
    return(
        <header className='cabecalho'>
            <h1>Catálogo de plantas</h1>
            <div>
              <ul>
                <li><Link to="/" className="links">Principal</Link></li>
                <li><Link to="/pesquisa" className="links">Pesquisa</Link></li>
              </ul>
            </div>
        </header>
    )
}