import React from 'react';
import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

interface SearchBarProps {
  onSubmit: (topic: string, page: number) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const topic = form.elements.namedItem('topic') as HTMLInputElement;
    if (topic.value.trim() === "") {
      toast.error('Search query is required');
      return;
    }

    onSubmit(topic.value, 1);
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="topic"
          className={css.input}
        />
        <button type="submit" className={css.search}>Search</button>
        <Toaster />
      </form>
    </header>
  );
}

export default SearchBar;
