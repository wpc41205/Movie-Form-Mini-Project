import React from 'react';

const SuccessPage = ({ formData, onReset }) => {
  const { name, email, selectedMovie, comment } = formData;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
      <div className="mb-6">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-red-800 mb-2">ขอบคุณสำหรับการตอบแบบสำรวจ!</h2>
        <p className="text-gray-700">ข้อมูลของคุณได้รับการบันทึกเรียบร้อยแล้ว</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
        <h3 className="font-semibold text-red-800 mb-4">ข้อมูลที่คุณกรอก</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">ชื่อ:</span>
            <span className="font-medium">{name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">อีเมล:</span>
            <span className="font-medium">{email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">ภาพยนตร์ที่เลือก:</span>
            <span className="font-medium">{selectedMovie}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">ความคิดเห็น:</span>
            <span className="font-medium">{comment || "ไม่มีความคิดเห็น"}</span>
          </div>
        </div>
      </div>

      <button
        onClick={onReset}
        className="bg-red-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-red-700 focus:ring-4 focus:ring-red-200 transition-all duration-200 transform hover:scale-105"
      >
        เริ่มทำแบบสำรวจใหม่
      </button>
    </div>
  );
};

export default SuccessPage;