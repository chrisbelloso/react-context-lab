import './App.css';
import { FoodContext } from "../src/context/FoodContext";
import { useContext } from 'react';

function App() {
  const { foods, food, setFood, setFoods } = useContext(FoodContext)

  const handleChange = (event) => {
    console.log(food)
    setFood({ ...food, 
      [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setFoods([food, ...foods])
  };

  return ( 
    <div className="App">
      <form>
        <input 
        name="foodName"
        type="text"
        value={food.foodName}
        onChange={handleChange} 
        placeholder="Name"
        />
        <input 
        name="foodType"
        type="text"
        value={food.foodType}
        onChange={handleChange} 
        placeholder="Type"
        />
        <input 
        name="protein"
        type="text"
        value={food.protein}
        onChange={handleChange} 
        placeholder="Protein"
        />
        <input 
        name="calories"
        type= "number"
        value={food.calories}
        onChange={handleChange} 
        placeholder="Calories"
        />
        <input 
        name="dressingItem"
        type= "text"
        value={food.dessingItem}
        onChange={handleChange} 
        placeholder="Dressing"
        />
        <input 
        name="sideItem"
        type= "text"
        value={food.sideItem}
        onChange={handleChange} 
        placeholder="Side"
        />
        <button 
        onClick={handleSubmit}>
          ADD
        </button>
      </form>
      { foods.map((food, index) => (
        <div key={index}>
          <h3>Name: {food.foodName}</h3>
          <h3>Type: {food.foodType}</h3>
          <h3>Protein: {food.protein}</h3>
          <h3>Calories: {food.calories}</h3>
          <h3>Dressing: {food.dressingItem}</h3>
          <h3>Side: {food.sideItem}</h3>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default App;
