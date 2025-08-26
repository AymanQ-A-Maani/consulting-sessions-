import React from 'react';
import { useNavigate } from 'react-router-dom';
import { decisionPaths } from '../data/quizData';

const DecisionTree: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
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
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
            جميع المسارات المحتملة للوصول للحزمة المناسبة
          </h1>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-8 max-w-2xl mx-auto">
            <div className="text-lg text-gray-700 space-y-2">
              <p><strong>عدد الأسئلة:</strong> سؤالان كحد أقصى</p>
              <p><strong>السؤال الأول:</strong> ما هي مرحلتك المهنية الحالية؟</p>
              <p><strong>السؤال الثاني:</strong> ما هو هدفك الأساسي؟ (للطلاب والخريجين)</p>
              <p><strong>السؤال الثالث:</strong> ما هو هدفك لحجز الباقة؟ (للمحترفين فقط)</p>
            </div>
          </div>
          
          <button
            onClick={() => navigate('/quiz')}
            className="btn-primary text-lg py-3 px-8 mb-12"
          >
            ابدأ الاختبار الآن
          </button>
        </div>

        {/* Decision Tree Visualization */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">
            خريطة القرارات الكاملة - 9 مسارات محتملة
          </h2>
          
          <div className="overflow-x-auto">
            <div className="min-w-full">
              {/* Main Tree Structure */}
              <div className="flex flex-col space-y-8">
                {/* Root Question */}
                <div className="text-center">
                  <div className="bg-blue-800 text-white px-6 py-4 rounded-xl font-semibold text-lg inline-block">
                    المرحلة المهنية
                  </div>
                </div>
                
                {/* Branch Connections */}
                <div className="flex justify-center">
                  <div className="w-px h-8 bg-gray-400"></div>
                </div>
                
                {/* Three Main Branches */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  
                  {/* Student Branch */}
                  <div className="bg-blue-50 rounded-2xl p-6">
                    <div className="text-center mb-6">
                      <div className="bg-blue-600 text-white px-4 py-3 rounded-lg font-medium">
                        أ) طالب (ثانوي/جامعي مبكر)
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        'أ) اختيار التخصص الجامعي المناسب',
                        'ب) التخطيط الأكاديمي والنجاح الجامعي',
                        'ج) الحصول على إرشاد عام حول المستقبل المهني'
                      ].map((option, index) => (
                        <div key={index} className="flex items-center">
                          <div className="bg-white rounded-lg p-3 shadow-sm flex-1 text-right">
                            <p className="text-sm text-gray-700">{option}</p>
                            <div className="flex items-center justify-end mt-2">
                              <span className="text-xs text-blue-600 mr-2">→</span>
                              <span className="text-xs font-semibold text-blue-800">Academic Navigator</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Graduate Branch */}
                  <div className="bg-green-50 rounded-2xl p-6">
                    <div className="text-center mb-6">
                      <div className="bg-green-600 text-white px-4 py-3 rounded-lg font-medium">
                        ب) خريج جديد (0-2 سنة خبرة)
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        'أ) بناء السيرة الذاتية وملف LinkedIn',
                        'ب) التحضير للمقابلات الوظيفية',
                        'ج) اختيار المسار المهني المناسب'
                      ].map((option, index) => (
                        <div key={index} className="flex items-center">
                          <div className="bg-white rounded-lg p-3 shadow-sm flex-1 text-right">
                            <p className="text-sm text-gray-700">{option}</p>
                            <div className="flex items-center justify-end mt-2">
                              <span className="text-xs text-green-600 mr-2">→</span>
                              <span className="text-xs font-semibold text-green-800">Career Launchpad</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Professional Branch */}
                  <div className="bg-purple-50 rounded-2xl p-6">
                    <div className="text-center mb-6">
                      <div className="bg-purple-600 text-white px-4 py-3 rounded-lg font-medium">
                        ج) محترف ذو خبرة (3+ سنوات)
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        'أ) تغيير مسارك المهني',
                        'ب) الحصول على ترقية',
                        'ج) تطوير براندك الشخصي'
                      ].map((option, index) => (
                        <div key={index} className="flex items-center">
                          <div className="bg-white rounded-lg p-3 shadow-sm flex-1 text-right">
                            <p className="text-sm text-gray-700">{option}</p>
                            <div className="flex items-center justify-end mt-2">
                              <span className="text-xs text-purple-600 mr-2">→</span>
                              <span className="text-xs font-semibold text-purple-800">Career Accelerator</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          
          {/* Summary */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-center text-gray-800 mb-6">
              ملخص المسارات
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-800">3</div>
                <div className="text-sm text-gray-600">مسارات للطلاب</div>
                <div className="text-xs text-blue-600">Academic Navigator</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-800">3</div>
                <div className="text-sm text-gray-600">مسارات للخريجين</div>
                <div className="text-xs text-green-600">Career Launchpad</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-800">3</div>
                <div className="text-sm text-gray-600">مسارات للمحترفين</div>
                <div className="text-xs text-purple-600">Career Accelerator</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionTree;