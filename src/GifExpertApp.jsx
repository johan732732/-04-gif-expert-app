import { useState } from 'react';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One punch', 'Dragon Ball']);

  const onAddCategory = () => {
    setCategories((cat) => ['Boku no hero', ...cat]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <input />
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ol>
    </>
  );
};
