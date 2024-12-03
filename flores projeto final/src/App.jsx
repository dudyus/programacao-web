import { useState, useEffect } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './App.css';
import { Titulo } from './components/Titulo';
import { NovaPlanta } from './components/NovaPlanta';
import { ItemPlanta } from './components/ItemPlanta';

function App() {
  const [plantas, setPlanta] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const storedPlantas = localStorage.getItem("planta");
    if (storedPlantas) {
      // Garante que storedPlantas seja um array antes de definir o estado
      const parsedPlantas = JSON.parse(storedPlantas);
      setPlanta(Array.isArray(parsedPlantas) ? parsedPlantas : []);
    }
  }, []);

  // Verifica se plantas é um array e tem elementos antes de usar map
  const listaPlanta = Array.isArray(plantas) && plantas.length > 0
    ? plantas.map((planta) => (
        <ItemPlanta
          key={planta.nome}
          planta={planta}
          plantas={plantas}
          setPlanta={setPlanta}
        />
      ))
    : <p>Nenhuma planta encontrada.</p>;

function addPlanta() {
  setOpen(true);
}

  return (
    <>
      <Titulo />
      <main>
        <div className='inicio'>
          <h2 className='inicio__titulo'>Flores Cadastradas</h2>
          <button className='inicio__botao' onClick={addPlanta}>Adicionar</button>
        </div>
        <div className="grid-planta">{listaPlanta}</div>
        <Modal open={open} onClose={() => setOpen(false)} center>
          <NovaPlanta plantas={plantas} setPlanta={setPlanta} />
        </Modal>
      </main>
    </>
  );
}

export default App;
