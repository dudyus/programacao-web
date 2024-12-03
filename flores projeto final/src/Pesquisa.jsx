import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Titulo } from './components/Titulo';
import { ItemPlanta } from './components/ItemPlanta';

function Pesquisa() {
    const [plantas, setPlanta] = useState([]);
    const { register, handleSubmit } = useForm();

    function pesquisaPlanta(data) {
        if (data.palavra.length < 2) {
            alert("Informe pelo menos 2 caracteres");
            return;
        }

        // Recupera as plantas do localStorage
        const storedPlantas = localStorage.getItem("planta");

        // Se houver plantas no localStorage
        if (storedPlantas) {
            const planta2 = JSON.parse(storedPlantas);

            // Filtra as plantas que contém a palavra pesquisada
            const planta3 = planta2.filter(planta =>
                planta.nome.toUpperCase().includes(data.palavra.toUpperCase())
            );

            // Atualiza o estado com as plantas filtradas
            setPlanta(planta3);
        } else {
            alert("Nenhuma planta cadastrada.");
        }
    }

    const listaPlanta = plantas.length > 0 ? plantas.map((planta) => (
        <ItemPlanta
            key={planta.nome}
            planta={planta}
            plantas={plantas}
            setPlanta={setPlanta}
        />
    )) : <p></p>;

    return (
        <>
            <Titulo />
            
                <h1 className='pesquisa__titulo'>Pesquisa de Plantas</h1>
                <form onSubmit={handleSubmit(pesquisaPlanta)}>
                    <p className='pesquisa__p'>
                        <input
                            type="text"
                            required
                            placeholder="Nome da Planta..."
                            {...register("palavra")}
                        />
                        <input className='but1' type="submit" value="Pesquisar" />
                    </p>
                </form>
                <div className='grid-planta'>
                    {listaPlanta}
                </div>
            
        </>
    );
}

export default Pesquisa;
