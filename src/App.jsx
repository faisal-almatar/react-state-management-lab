import './App.css'
import { useState } from "react"





const App = () => {
  
const [team, setTeam] = useState([]);
const [money, setMoney] = useState(100);
const [zombieFighters, setZombieFighters] = useState([
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
]);
const ZombieList = () => {
const totalStrength = team.reduce((acc, zombie) => acc + zombie.strength, 0 )
const totalAgility = team.reduce((acc, zombie) => acc + zombie.agility, 0 )



    return(
    <>
      {team.length == 0 ? <h1>Choose a Team </h1>: <h1>Team members</h1> }
      {team.map((zombie) => (
        <ul key={zombie.id}>
          <li>Id: {zombie.id} Name: {zombie.name}</li>
          <li>Agility: {zombie.agility} Strength: {zombie.strength} price: {zombie.price}$</li>
          <img src={zombie.img} alt='img of a zombie'/>
          <button onClick={() => handleRemoveFighter(zombie)}>Remove character</button>
        </ul>
      ))}
      <h2>Total Strength: {totalStrength}</h2>
      <h2>Total Agility: {totalAgility}</h2>  
      
      <li>
      {zombieFighters.map((zombie)=> (
        
        <>
        <ul>
        <li>Id: {zombie.id} Name: {zombie.name}</li>
        <li>Agility: {zombie.agility} Strength: {zombie.strength} price: {zombie.price}$</li>
        <img src={zombie.img} alt='img of a zombie'/>
        <button onClick={()=>{handleAddFighter(zombie)}}>Add character</button>  
        </ul>
        </>
        ))}
      </li>
    </>
  )}

const handleAddFighter = (zombie) => {
  if (money >= zombie.price) {
    setTeam([...team, zombie]);
    setMoney(money - zombie.price);
    setZombieFighters(zombieFighters.filter(z => z.id !== zombie.id));
  } else {
    alert("Not enough money to add this fighter!");
  }
  console.log("Fighter added:", zombie);
  console.log("Current team:", team);
  console.log("Remaining money:", money);  
}
const handleRemoveFighter = (zombie) => {
    setMoney(money + zombie.price)
    setTeam(team.filter(z => z.id !== zombie.id))
    setZombieFighters([...zombieFighters, zombie])
  }

  return (
    <>
    <h1>Hello world!</h1>
    <h2>You Currently Have {money}$</h2>
    <button onClick={()=>{setMoney(money+100)}}>Cheat</button>
    <ZombieList/> 
    </>
  );
}

export default App
