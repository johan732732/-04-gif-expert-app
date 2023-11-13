import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One punch', 'Dragon Ball']);

  const onAddCategory = ({ newCategory }) => {
    if (categories.includes(newCategory)) return;

    setCategories((cat) => [newCategory, ...cat]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(e) => onAddCategory(e)} />

      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};
