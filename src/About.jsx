import React from 'react';
import './App.css';

const About = ({ onBack }) => {
  return (
    <div className="about-container animate-fade-in-up">
      <h2>History of Pizzerias</h2>
      <p>
        The first pizzeria, known as Antica Pizzeria Port'Alba, was opened in Naples in 1830. It still operates today. This pizzeria even had a special payment system allowing customers to pay for pizza within eight days.
      </p>
      <p>
        <strong>Ancient roots:</strong> Baked bread with various toppings was known in ancient civilizations like the Jews, Babylonians, Egyptians, and Greeks.
      </p>
      <p>
        <strong>Focaccia:</strong> In Ancient Rome, there was a type of focaccia called panis focacius, considered a precursor to pizza.
      </p>
      <p>
        <strong>First pizzeria:</strong> As mentioned, Antica Pizzeria Port'Alba opened in Naples in 1830.
      </p>
      <p>
        <strong>Margherita:</strong> In 1889, Pizza Margherita was created in honor of Queen Margherita of Savoy, topped with tomatoes, mozzarella, and basil – the colors of the Italian flag.
      </p>
      <p>
        <strong>Spread:</strong> Over time, pizza became popular throughout Italy and then globally, thanks to Italian immigrants.
      </p>
      <button onClick={onBack} className="back-btn animate-shadow-glow">
        Back
      </button>
    </div>
  );
};

export default About;
