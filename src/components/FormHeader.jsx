import React from 'react';

const FormHeader = () => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-red-800 mb-2">
        แบบสำรวจภาพยนตร์
      </h1>
      <p className="text-gray-700">
        กรุณากรอกข้อมูลเพื่อเข้าร่วมการสำรวจความนิยมภาพยนตร์
      </p>
    </div>
  );
};

export default FormHeader;