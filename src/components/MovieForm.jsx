import React from 'react';
import FormHeader from './FormHeader';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import MovieSelection from './MovieSelection';
import FormButtons from './FormButtons';
import { FORM_FIELDS, FIELD_LABELS, FIELD_PLACEHOLDERS } from '../constants/formFields';

const MovieForm = ({
  formData,
  errors,
  movies,
  onInputChange,
  onMovieSelect,
  onSubmit,
  onReset
}) => {
  const { name, email, selectedMovie, comment } = formData;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <FormHeader />
      
      <form onSubmit={onSubmit} className="space-y-6">
        <InputField
          label={FIELD_LABELS[FORM_FIELDS.NAME]}
          type="text"
          value={name}
          onChange={(e) => onInputChange(FORM_FIELDS.NAME, e.target.value)}
          placeholder={FIELD_PLACEHOLDERS[FORM_FIELDS.NAME]}
          error={errors.name}
          required={true}
        />

        <InputField
          label={FIELD_LABELS[FORM_FIELDS.EMAIL]}
          type="email"
          value={email}
          onChange={(e) => onInputChange(FORM_FIELDS.EMAIL, e.target.value)}
          placeholder={FIELD_PLACEHOLDERS[FORM_FIELDS.EMAIL]}
          error={errors.email}
          required={true}
        />

        <MovieSelection
          movies={movies}
          selectedMovie={selectedMovie}
          onMovieSelect={onMovieSelect}
          error={errors.movie}
        />

        <TextAreaField
          label={FIELD_LABELS[FORM_FIELDS.COMMENT]}
          value={comment}
          onChange={(e) => onInputChange(FORM_FIELDS.COMMENT, e.target.value)}
          placeholder={FIELD_PLACEHOLDERS[FORM_FIELDS.COMMENT]}
        />

        <FormButtons onSubmit={onSubmit} onReset={onReset} />
      </form>
    </div>
  );
};

export default MovieForm;