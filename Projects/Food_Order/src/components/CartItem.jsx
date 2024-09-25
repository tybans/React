import { currencyFormatter } from "../util/Formatting";

export default function CartItem({
  name,
  quantity,
  price,
  onIncrese,
  onDecrease,
}) {
  return (
    <li className="cart-item">
      <p>
        {name}- {quantity} x {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>QTY</span>
        <button onClick={onIncrese}>+</button>
      </p>
    </li>
  );
}
