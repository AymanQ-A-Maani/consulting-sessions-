import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header Section */}
          <div className="mb-12 fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
              Flawless - نظام التوصية الذكي للحزم الاستشارية
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              اكتشف الحزمة المناسبة لك بناءً على احتياجاتك الفعلية
            </p>
            
            {/* Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                كيف يعمل النظام؟
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                نظام ذكي يوجهك لاختيار الحزمة الاستشارية المثلى من خلال تحليل مرحلتك المهنية 
                وأهدافك الشخصية. لا مزيد من الاختيارات الخاطئة بناءً على السعر فقط!
              </p>
            </div>
          </div>

          {/* Main Action Buttons */}
          <div className="space-y-6 md:space-y-0 md:space-x-8 md:flex md:justify-center slide-in">
            <button
              onClick={() => navigate('/decision-tree')}
              className="w-full md:w-auto btn-secondary text-lg py-4 px-8"
            >
              عرض شجرة القرارات
            </button>
            
            <button
              onClick={() => navigate('/quiz')}
              className="w-full md:w-auto btn-primary text-lg py-4 px-8"
            >
              ابدأ الاختبار التفاعلي
            </button>
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">دقيق وموثق</h3>
              <p className="text-gray-600">تحليل علمي لاحتياجاتك المهنية</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">سريع ومباشر</h3>
              <p className="text-gray-600">سؤالان فقط للوصول لنتائج دقيقة</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">مخصص لك</h3>
              <p className="text-gray-600">توصيات مبنية على وضعك الفريد</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;