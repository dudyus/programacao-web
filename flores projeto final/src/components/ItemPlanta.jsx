import './ItemPlanta.css'

export function ItemPlanta({ planta, plantas, setPlanta }) {

    function dicaPlanta(){
        const dica = prompt(`Qual a dica sobre a planta ${planta.nome}`)
        if (!dica) {
            alert("Insira a dica.")
            return
        }

         // cria uma copia de todos os filmes (para alterar)
    const planta2 = [...plantas]

    //identifica o índice do filme atual (a ser alterado)
    const ind = planta2.findIndex(x => x.nome == planta.nome)

    // altera os atributos do filme avaliado
    planta2[ind].dica = dica

    // altera o estado e salva em localStorage
    setPlanta(planta2)
    localStorage.setItem("plantas", JSON.stringify(planta2))
    alert("Ok! Planta avaliado com sucesso!")

    }
    return (
      <div className="grid-item">
        <img src={planta.foto} alt="" className="capa-planta" />
        <div>
          <h3 className="nome">{planta.nome}</h3>
          <p className="inform">LUZ NECESSÁRIA:</p>
          <p className="resp">{planta.luz}</p>
          <p className="inform">FREQUÊNCIA DE REGA:</p>
          <p className="resp">{planta.rega}</p>
          <p className="inform">TAMANHO:</p>
          <p className="resp">{planta.tamanho}</p>
          <p className="inform">NÍVEL DE CUIDADO:</p>
          <p className="resp">{planta.cuidado}</p>
           <button  className='inicio__botao' onClick={dicaPlanta}>Dica</button> {/*/////// */}
          <p>{planta.dica}</p>
        </div>
      </div>
    );
  }
  