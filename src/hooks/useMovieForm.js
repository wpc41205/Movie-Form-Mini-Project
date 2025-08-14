import { useState } from 'react';
import { validateForm } from '../utils/validation';

const initialFormData = {
  name: "",
  email: "",
  selectedMovie: "",
  comment: ""
};

export const useMovieForm = () => {
  // Data state
  const [formData, setFormData] = useState(initialFormData);
  
  // UI state
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    clearFieldError(field);
  };

  const handleMovieSelect = (movieTitle) => {
    setFormData(prev => ({
      ...prev,
      selectedMovie: movieTitle
    }));
    clearFieldError('movie');
  };

  const clearFieldError = (field) => {
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setSubmitted(false);
  };

  return {
    formData,
    errors,
    submitted,
    handleInputChange,
    handleMovieSelect,
    handleSubmit,
    handleReset
  };
};