import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { packages } from '../data/quizData';

const Result: React.FC = () => {
  const { packageId } = useParams<{ packageId: string }>();
  const navigate = useNavigate();
  
  const packageInfo = packageId ? packages[packageId] : null;
  
  if (!packageInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">حزمة غير موجودة</h2>
          <button onClick={() => navigate('/')} className="btn-primary">
            العودة للرئيسية
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header with Navigation */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <button
              onClick={() => navigate('/')}
              className="text-blue-800 hover:text-blue-900 flex items-center space-x-2 space-x-reverse"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>العودة للرئيسية</span>
            </button>
          </div>
        </div>

        {/* Congratulations Section */}
        <div className="text-center mb-12 fade-in">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            مبروك! وجدنا الحزمة المثالية لك
          </h1>
          <p className="text-xl text-gray-600">
            بناءً على إجاباتك، هذه هي الحزمة الأنسب لاحتياجاتك
          </p>
        </div>

        {/* Result Card */}
        <div className="card slide-in mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-2">
              {packageInfo.title}
            </h2>
            <p className="text-lg text-gray-600">
              {packageInfo.name}
            </p>
          </div>
          
          {/* Why Perfect Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              لماذا هذه الحزمة مثالية لك:
            </h3>
            <div className="bg-blue-50 rounded-xl p-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {packageInfo.whyPerfect}
              </p>
            </div>
          </div>
          
          {/* Sessions Info */}
          <div className="mb-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                عدد الجلسات:
              </h4>
              <p className="text-lg text-blue-800 font-medium">
                {packageInfo.sessions}
              </p>
            </div>
          </div>
          
          {/* Services Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              الخدمات التي ستحصل عليها:
            </h3>
            <div className="space-y-6">
              {packageInfo.services.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h4 className="text-xl font-semibold text-blue-800 mb-3">
                    {service.session}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg py-4 px-8">
              ابدأ الرحلة مع هذه الحزمة
            </button>
            <button
              onClick={() => navigate('/quiz')}
              className="btn-secondary text-lg py-4 px-8"
            >
              إعادة الاختبار
            </button>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-blue-800 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            هل تريد معرفة المزيد؟
          </h3>
          <p className="text-lg mb-6">
            اكتشف كيف وصلنا لهـذه التوصية وشاهد جميع المسارات المحتملة
          </p>
          <button
            onClick={() => navigate('/decision-tree')}
            className="bg-white text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            عرض شجرة القرارات
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;