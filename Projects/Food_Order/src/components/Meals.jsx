import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";
import MealItem from "./MealItem.jsx";

const requestConfig = {};

export default function Meals() {

  const API_URL = "https://food-order-7i1l.onrender.com"
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp(`${API_URL}/meals`, requestConfig, []);

  console.log(loadedMeals);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title= "Failed to fetch meals" message={error}/>
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
