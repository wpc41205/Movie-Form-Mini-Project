import React from 'react';
import Button from './Button';

const FormButtons = ({ onReset }) => {
  return (
    <div className="flex gap-4 pt-4">
      <Button
        type="submit"
        variant="primary"
      >
        ส่งแบบสำรวจ
      </Button>
      <Button
        type="button"
        variant="secondary"
        onClick={onReset}
      >
        รีเซ็ต
      </Button>
    </div>
  );
};

export default FormButtons;