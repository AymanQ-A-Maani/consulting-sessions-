import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions, decisionPaths } from '../data/quizData';

interface QuizState {
  currentStep: number;
  answers: Record<string, string>;
  resultPackage: string | null;
}

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const [quizState, setQuizState] = useState<QuizState>({
    currentStep: 1,
    answers: {},
    resultPackage: null
  });

  const getCurrentQuestion = () => {
    if (quizState.currentStep === 1) {
      return questions[0]; // Career stage question
    } else if (quizState.currentStep === 2) {
      const firstAnswer = quizState.answers.career_stage;
      if (firstAnswer === 'student') {
        return questions[1]; // Student goals
      } else if (firstAnswer === 'graduate') {
        return questions[2]; // Graduate challenges
      }
    }
    return null;
  };

  const handleAnswer = (questionId: string, answer: string) => {
    const newAnswers = { ...quizState.answers, [questionId]: answer };
    
    // Update answers first
    setQuizState(prev => ({ ...prev, answers: newAnswers }));

    // Determine next step or result
    if (questionId === 'career_stage') {
      if (answer === 'professional') {
        // Direct to result for professionals
        setTimeout(() => navigate('/result/career_accelerator'), 500);
      } else {
        // Go to second question
        setQuizState(prev => ({ ...prev, currentStep: 2 }));
      }
    } else {
      // Second question answered, calculate result
      const path = [newAnswers.career_stage, answer];
      const matchedPath = decisionPaths.find(p => 
        p.path.length === path.length && 
        p.path.every((step, index) => step === path[index])
      );
      
      if (matchedPath) {
        setTimeout(() => navigate(`/result/${matchedPath.result}`), 500);
      }
    }
  };

  const currentQuestion = getCurrentQuestion();
  
  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="max-w-3xl mx-auto w-full">
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
            <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              الاختبار التفاعلي
            </h1>
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full inline-block">
              السؤال {quizState.currentStep} من {quizState.currentStep === 1 || quizState.answers.career_stage === 'professional' ? '1' : '2'}
            </div>
          </div>

          {/* Question Card */}
          <div className="card fade-in">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
              {currentQuestion.text}
            </h2>
            
            <div className="space-y-4">
              {currentQuestion.options.map((option) => (
                <div
                  key={option.id}
                  onClick={() => handleAnswer(currentQuestion.id, option.value)}
                  className="quiz-option group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-lg font-medium text-gray-800 group-hover:text-blue-800">
                        {option.text}
                      </p>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <div className="w-6 h-6 border-2 border-gray-300 rounded-full group-hover:border-blue-500 transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-12 text-center">
            <div className="text-sm text-gray-600 mb-4">
              اختر الإجابة التي تناسب وضعك
            </div>
            <div className="flex justify-center space-x-2 space-x-reverse">
              <div className={`w-3 h-3 rounded-full ${
                quizState.currentStep >= 1 ? 'bg-blue-800' : 'bg-gray-300'
              }`}></div>
              {quizState.answers.career_stage !== 'professional' && (
                <div className={`w-3 h-3 rounded-full ${
                  quizState.currentStep >= 2 ? 'bg-blue-800' : 'bg-gray-300'
                }`}></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;