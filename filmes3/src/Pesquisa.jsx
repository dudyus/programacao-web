import { useForm } from "react-hook-form"
import { Titulo } from "./components/Titulo"
import { useState } from "react"
import { ItemFilme } from './components/ItemFilme';

function Pesquisa() {
    const { register, handleSubmit} = useForm()
    const [filmes, setFilmes] = useState([])


    function pesquisaFilmes(data) { 
        if (data.palavra.length < 2) {
            alert("Informe pelo menos 2 caracteres para realizar a  pesquisa")
            return
        }

        if(localStorage.getItem("filmes")){
            const filmes2 = JSON.parse(localStorage.getItem("filmes"))

            const filmes3 = filmes2.filter(filme => filme.titulo.toUpperCase().includes(data.palavra.toUpperCase()))
            setFilmes(filmes3)
          } 
    }

    const listaFilmes = filmes.map(filme => (
        <ItemFilme key={filme.titulo} filme={filme} filmes={filmes} setFilmes={setFilmes} />
      ))

    return(
    <>
        <Titulo />
        <h1>Pesquisa de Fimes</h1>

        <form onSubmit={handleSubmit(pesquisaFilmes)}>
            <p>
                <input type="text" required placeholder="Titulo do filme..." {...register("palavra")} />
                <input type="submit" value="Pesquisar" />
            </p>
        </form>
        <div className='grid-filmes' >
        {listaFilmes}
      </div>
    </>
)
}

export default Pesquisa