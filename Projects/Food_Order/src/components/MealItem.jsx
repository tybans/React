import { useContext } from "react";
import { currencyFormatter } from "../util/Formatting.js";
import Button from "./UI/Button.jsx";
import CartContext from "../store/CartContext.jsx";

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);

  const API_URL = "https://food-order-7i1l.onrender.com"

  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`${API_URL}/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-action">
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
