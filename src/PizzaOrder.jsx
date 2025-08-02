import React, { useState } from 'react';

const ingredientsData = [
  { id: 1, name: 'Сыр', price: 20 },
  { id: 2, name: 'Ветчина', price: 30 },
  { id: 3, name: 'Грибы', price: 25 },
  { id: 4, name: 'Оливки', price: 15 },
];

const PizzaOrder = () => {
  const [size, setSize] = useState('small');
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleIngredient = (id) => {
    setSelectedIngredients(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const totalPrice =
    (size === 'small' ? 100 : 150) +
    selectedIngredients.reduce((acc, id) => {
      const ingredient = ingredientsData.find(i => i.id === id);
      return acc + (ingredient ? ingredient.price : 0);
    }, 0);

  return (
    <div className="order-container">
      <h2>Собери свою пиццу</h2>
      <div>
        <h3>Размер:</h3>
        <label className="radio-label">
          <input type="radio" value="small" checked={size === 'small'} onChange={() => setSize('small')} />
          Маленькая
        </label>
        <label className="radio-label">
          <input type="radio" value="large" checked={size === 'large'} onChange={() => setSize('large')} />
          Большая
        </label>
      </div>

      <div>
        <h3>Ингредиенты:</h3>
        {ingredientsData.map(({ id, name, price }) => (
          <label key={id} className="checkbox-label">
            <input
              type="checkbox"
              checked={selectedIngredients.includes(id)}
              onChange={() => toggleIngredient(id)}
            />
            {name} (+{price}р)
          </label>
        ))}
      </div>

      <button className="submit-btn" onClick={() => setSubmitted(true)} disabled={submitted}>
        Оформить заказ
      </button>

      {submitted && (
        <div className="confirmation animate-bounce-in-3d">
          <h3>Ваш заказ оформлен!</h3>
          <p>Сумма к оплате: {totalPrice}р</p>
          <p>Ваш заказ готовится... 🍕</p>
        </div>
      )}
    </div>
  );
};

export default PizzaOrder;
