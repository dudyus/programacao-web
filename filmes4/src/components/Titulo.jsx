import { Link } from "react-router-dom";
import './Titulo.css'

export function Titulo() {
  return (
    <header>
      <div className="cab1">
        <img src="/cinema.png" alt="Logo de Cinema" />
        <div>
          <h1>App Controle de Filmes</h1>
          <h2>Cadastro e Avaliação Pessoal de Filmes</h2>
        </div>
      </div>
      <div className="margemDireita">
        <p>
          <Link to="/" className="links">Principal</Link>
        </p>
        <p>
          <Link to="/pesquisa" className="links">Pesquisa</Link>
        </p>
      </div>
    </header>
  )
}
