/* eslint-disable react/prop-types */

import "./ItemFilme.css"

export function ItemFilme({filme, filmes, setFilmes}) {

  function avaliaFilme() {
    const nota = Number(prompt(`Qual a nota do filme ${filme.titulo}?`))
    if(nota < 1 || nota > 5 || isNaN(nota)){
      alert("Informe uma nota entre 1 e 5")
      return
    }

    const comentario = prompt("Qual seu comentário sobre o filme?")
    if(comentario == ""){
      alert("Erro... você deve indicar um comentário")
      return
    }

    // cria uma copia de todos os filmes (para alterar)
    const filmes2 = [...filmes]

    //identifica o índice do filme atual (a ser alterado)
    const ind = filmes2.findIndex(x => x.titulo == filme.titulo)

    // altera os atributos do filme avaliado
    filmes2[ind].nota = nota
    filmes2[ind].comentario = comentario

    // altera o estado e salva em localStorage
    setFilmes(filmes2)
    localStorage.setItem("filmes", JSON.stringify(filmes2))
    alert("Ok! Filme avaliado com sucesso!")
  }
  

    return (
        <div className='grid-item'>
      <img src={filme.foto} alt="Capa do Filme" className='capa-filme' />
      <div>
        <h3>{filme.titulo}</h3>
        <p className='genero-duracao' >{filme.genero} - {filme.duracao} min</p>
        <p className='sinopse' >{filme.sinopse}</p>
        {filme.nota == 0 ?
          <>
            <img src="./novo.png" alt="Novidade" className="novo" />
            <button onClick={avaliaFilme} >Avaliar</button>
          </>
          :
          <>
            <p>Nota: {filme.nota}</p>
            <p className="comentario" >{filme.comentario}</p>
          </>

        }
      </div>
    </div>
    )
}