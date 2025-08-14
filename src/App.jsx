import React from "react";
import MovieForm from "./components/MovieForm";
import { MOVIES } from "./constants/movies";
import { useMovieForm } from "./hooks/useMovieForm";
import SuccessPage from "./components/SuccessPage";

const App = () => {
  const {
    formData,
    errors,
    submitted,
    handleInputChange,
    handleMovieSelect,
    handleSubmit,
    handleReset
  } = useMovieForm();

  return (
    <div className="min-h-screen bg-black py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {!submitted ? (
          <MovieForm
            formData={formData}
            errors={errors}
            movies={MOVIES}
            onInputChange={handleInputChange}
            onMovieSelect={handleMovieSelect}
            onSubmit={handleSubmit}
            onReset={handleReset}
          />
        ) : (
          <SuccessPage
            formData={formData}
            onReset={handleReset}
          />
        )}
      </div>
    </div>
  );
};

export default App;