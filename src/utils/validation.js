// Single responsibility: Validate email format
export const validateEmail = (email) => {
    if (!email) {
      return "โปรดใส่อีเมลของคุณ";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return "รูปแบบอีเมลไม่ถูกต้อง";
    }
    return "";
  };
  
  // Single responsibility: Validate required field
  export const validateRequired = (value, fieldName) => {
    if (!value || value.trim() === "") {
      return `โปรดใส่${fieldName}`;
    }
    return "";
  };
  
  // Single responsibility: Validate movie selection
  export const validateMovieSelection = (selectedMovie) => {
    if (!selectedMovie) {
      return "กรุณาเลือกหนังที่คุณชอบ";
    }
    return "";
  };
  
  // Single responsibility: Validate entire form
  export const validateForm = (formData) => {
    const { name, email, selectedMovie } = formData;
    const errors = {};
  
    const nameError = validateRequired(name, "ชื่อของคุณ");
    if (nameError) errors.name = nameError;
  
    const emailError = validateEmail(email);
    if (emailError) errors.email = emailError;
  
    const movieError = validateMovieSelection(selectedMovie);
    if (movieError) errors.movie = movieError;
  
    return errors;
  };