import { useState } from 'react'
import { useEffect } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const [ filmes, setFilmes ] = useState([])
  const [open, setOpen] = useState(false)
  const { register, handleSubmit, reset, setFocus } = useForm()

  useEffect(() => {
    if (localStorage.getItem("filmes")) {
      const filmes2 = JSON.parse(localStorage.getItem("filmes")) 
      setFilmes(filmes2)
    }
  }, [])

  const listaFilmes = filmes.map(filme => (
    <div key={filme.titulo} className='grid-item'>
      <img src={filme.foto} alt="capa" className='capa-filme' />
      <div>
      <h3>{filme.titulo}</h3>
      <p className='genero-duracao'>{filme.genero} - {filme.duracao} min.</p>
      <p className='sinopse'>{filme.sinopse}</p>
      </div>
    </div>
  ))

  function AdicionarFilme() {
    setOpen(true)
  }

function salvaFilme(data) {
  const novo = {
    titulo: data.titulo,
    genero: data.genero,
    duracao: data.duracao,
    foto: data.foto,
    sinopse: data.sinopse,
    nota: 0,
    comentario: ""
  }

  const filmes2 = [novo,...filmes]
  setFilmes(filmes2)
  localStorage.setItem("filmes", JSON.stringify(filmes2))

}

  return (
    <>
    <header>
        <img src="./cinema.png" alt="logo" />
        <div>
            <h1>App Controle de filmes</h1>
            <h2>Cadastro e Avaliação Pessoal de Filmes</h2>
        </div>
        
    </header>
    <main>
        <div className='h2-btn'>
          <h2>Filmes Cadastrados</h2>
          <button onClick={AdicionarFilme}>Adicionar</button>  
        </div>
        <div className='grid-filmes'>
          {listaFilmes}
        </div>
   
    </main>
    <Modal open={open} onClose={() => setOpen(false)} center>
        <h2>Formulário de Cadastro de Filmes</h2>
        <form onSubmit={handleSubmit(salvaFilme)}> 
          <p>
            <label htmlFor="titulo">Título do Filme: </label>
            <input type="text" id="titulo" 
            {...register("titulo")} required/>
          </p>
          <p>
            <label htmlFor="genero">Gênero do Filme: </label>
            <input type="text" id="genero" 
            {...register("genero")} required/>
          </p>
          <p>
            <label htmlFor="foto">URL Foto: </label>
            <input type="text" id="foto" 
            {...register("foto")} required/>
          </p>
          <p>
            <label htmlFor="duracao">Duração (min): </label>
            <input type="text" id="duracao" 
            {...register("duracao")} required/>
          </p>
          <p>
            <label htmlFor="sinopse">Sinopse: </label>
            <textarea id="sinopse"
            {...register("sinopse")} required></textarea>
          </p>
          <p>
            <input type="submit" value="Cadastrar" />
            <input type="reset" value="Limpar" />
          </p>
        </form>
      </Modal>
    </>
  )
}

export default App
