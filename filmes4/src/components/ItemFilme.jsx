import { Link } from "react-router-dom"
import { Estrelas } from "./Estrelas"
import "./ItemFilme.css"

export function ItemFilme({ filme, filmes, setFilmes }) {

  function avaliaFilme() {
    const nome = prompt("Qual seu nome?")
    if (nome.trim() == "") {
      alert("Erro... você deve informar o seu nome")
      return
    }

    const comentario = prompt("Qual seu comentário sobre o filme?")
    if (comentario == "") {
      alert("Erro... você deve indicar um comentário")
      return
    }

    const nota = Number(prompt(`Qual a sua nota para o filme ${filme.titulo}?`))
    if (nota < 1 || nota > 5 || isNaN(nota)) {
      alert("Informe uma nota entre 1 e 5")
      return
    }

    // cria uma cópia de todos os filmes (para alterar)
    const filmes2 = [...filmes]

    // identifica o índice do filme atual (a ser alterado)
    const ind = filmes2.findIndex(x => x.id == filme.id)

    // altera os atributos do filme avaliado
    filmes2[ind].nomes.push(nome)
    filmes2[ind].comentarios.push(comentario)
    filmes2[ind].notas.push(nota)

    // altera o estado e salva em localStorage
    setFilmes(filmes2)

    // salva os dados na API
    fetch(`http://localhost:3000/filmes/${filme.id}`, {
      method: "PUT",
      body: JSON.stringify(filmes2[ind])
    })

    alert("Ok! Filme avaliado com sucesso!")
  }

  function calculaMedia() {
    let soma = 0
    for (const nota of filme.notas) {
      soma = soma + nota
    }
    const media = soma / filme.notas.length
    return media
  }

  return (
    <div className='grid-item'>
      <img src={filme.foto} alt="Capa do filme" className='capa-filme' />
      <div>
        <h3>{filme.titulo}</h3>
        <p className='genero-duracao'>
          {filme.genero} - {filme.duracao} min.
        </p>
        <p className='sinopse'>{filme.sinopse}</p>
        {filme.notas.length == 0 ?
          <>
            <img src="./novo.png" alt="Novidade" className="novo" />
            <button onClick={avaliaFilme}>Avaliar</button>
          </>
          :
          <>
            <Estrelas num={calculaMedia()} />
            &nbsp;&nbsp;&nbsp;
            <Link to={`comentarios/${filme.id}`}>
              Ver Comentários
            </Link>
            &nbsp;&nbsp;&nbsp;
            <button onClick={avaliaFilme}>Avaliar</button>
          </>
        }
      </div>
    </div>
  )
}