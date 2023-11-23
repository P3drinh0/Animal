import React, { useState } from 'react';
import './App.css';
 
function App() {
  const [dogs, setDogs] = useState([]);
  const [dogName, setDogNome] = useState('');
  const [ownerName, setDono] = useState('');
  const [contactInfo, setContato] = useState('');
  const [dogImage, setDogImagem] = useState('');
  const [Caracteristica, setDogCaracteristica] = useState('');
  const [Visto, setDogVisto] = useState('');
  const [Status, setStatus] = useState('');

 
  const addDog = () => {
    if (dogName && ownerName && contactInfo && dogImage && Caracteristica && Visto && Status) {
      const newDog = {
        id: dogs.length + 1,
        dogName,
        ownerName,
        contactInfo,
        dogImage,
        Caracteristica,
        Visto,
        Status,
      };

      const onConcluir = (id) => {
        // Sua lógica para lidar com a conclusão
        // Você pode atualizar o status do animal de estimação ou realizar qualquer outra ação
        console.log(`Animal de estimação com ID ${id} marcado como concluído`);
      };
      
      
 
      setDogs([...dogs, newDog]);
      setDogNome('');
      setDono('');
      setContato('');
      setDogImagem('');
      setDogCaracteristica('');
      setDogVisto('');
      setStatus('');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };
 
  return (
    <div className="App">
      
      <h1>ONG LuciDog</h1>
      <h3 className='fala'>↓Ajudando Você a Achar o seu Pet↓</h3>
 
      <div>
        <label>Nome do Cachorro ou Gato:</label>
        <input
          type="text"
          value={dogName}
          onChange={(e) => setDogNome(e.target.value)}
        />
      </div>

      <div>
        <label>Foto do Cachorro ou Gato:</label>
        <input
          type="text"
          value={dogImage}
          onChange={(e) => setDogImagem(e.target.value)}
        />
      </div>

      <div>
        <label>Status:</label>
        <input
          type="text"
          value={Status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>

      <div>
        <label>Alguma Caracteristica Marcante:</label>
        <input
          type="text"
          value={Caracteristica}
          onChange={(e) => setDogCaracteristica(e.target.value)}
        />
      </div>

      <div>
        <label>Ultimo Local Visto e Data:</label>
        <input
          type="text"
          value={Visto}
          onChange={(e) => setDogVisto(e.target.value)}
        />
      </div>
 
      <div>
        <label>Nome do Dono:</label>
        <input
          type="text"
          value={ownerName}
          onChange={(e) => setDono(e.target.value)}
        />
      </div>
 
      <div>
        <label>Informações de Contato:</label>
        <input
          type="text"
          value={contactInfo}
          onChange={(e) => setContato(e.target.value)}
        />
      </div>
 
      
 
      <button onClick={addDog}>Registrar</button>
 
      <ul>
        {dogs.map((dog) => (
          <li key={dog.id}>
            <p><strong>Nome do Pet: {dog.dogName}</strong></p>
            <p>Dono: {dog.ownerName}</p>
            <p>Contato: {dog.contactInfo}</p>
            <p>Caracteristica: {dog.Caracteristica}</p>
            <p>Ultimo Local Visto e Data: {dog.Visto}</p>
            <p>Status: {dog.Status}</p>
            <br />
            <img src={dog.dogImage} alt={dog.dogName} style={{ maxWidth: '200px' }} />
            <button onClick={() => onConcluir(dog.id)}>Concluido</button>



          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default App;
 