import { useState, useEffect } from 'react'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import './App.css'
import { Titulo } from './components/Titulo'
import { ItemFilme } from './components/ItemFilme'
import { NovoFilme } from './components/NovoFilme'

function App() {
  const [filmes, setFilmes] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    async function getFilmes() {
      const response = await fetch("http://localhost:3000/filmes")
      const filmes2 = await response.json()
      setFilmes(filmes2)
    }
    getFilmes()
  }, [])

  const listaFilmes = filmes.map(filme => (
    <ItemFilme key={filme.id} 
               filme={filme} 
               filmes={filmes} 
               setFilmes={setFilmes} />
  ))

  function adicionarFilme() {
    setOpen(true)
  }

  return (
    <>
      <Titulo />
      <main>
        <div className='h2-btn'>
          <h2>Filmes Cadastrados</h2>
          <button onClick={adicionarFilme}>Adicionar</button>
        </div>
        <div className='grid-filmes'>
          {listaFilmes}
        </div>
      </main>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <NovoFilme filmes={filmes} setFilmes={setFilmes} />
      </Modal>
    </>
  )
}

export default App