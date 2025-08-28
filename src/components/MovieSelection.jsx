import React from 'react';
import RadioGroup from './RadioGroup';

const MovieSelection = ({ movies, selectedMovie, onMovieSelect, error, id }) => {
  const movieOptions = movies.map(movie => ({
    value: movie.title,
    label: movie.title,
    year: movie.year,
    director: movie.director
  }));

  const renderMovieOption = (option) => (
    <>
      <div className="font-medium text-gray-900">{option.label}</div>
      <div className="text-sm text-gray-500">
        {option.year} • {option.director}
      </div>
    </>
  );

  return (
    <RadioGroup
      label="เลือกหนังที่คุณชอบ"
      name="movie"
      options={movieOptions}
      value={selectedMovie}
      onChange={onMovieSelect}
      error={error}
      required={true}
      renderOption={renderMovieOption}
      id={id}
    />
  );
};

export default MovieSelection;