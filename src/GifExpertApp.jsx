import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One punch man']);

  const onAddCategory = ({ newCategory }) => {
    if (categories.includes(newCategory)) return;

    setCategories((cat) => [newCategory, ...cat]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(e) => onAddCategory(e)} />

      {
        categories.map((category) => (
            <GifGrid key={category} category={category} />
        ))
      }
    </>
  );
};
