import { createContext, useState } from "react";
import foodData from "../food.json"

export const FoodContext = createContext({});

const FoodProvider = ({children}) => {
    const [foods, setFoods] = useState(foodData.foodItems);
    const [food, setFood] = useState({
        foodName: "",
        foodType: "",
        protein: "",
        calories: 0
    })
    return (
        <FoodContext.Provider
        value={{
            foods,
            food,
            setFood,
            setFoods
        }}
        >
            {children}
        </FoodContext.Provider>
    )
} 

export default FoodProvider;
