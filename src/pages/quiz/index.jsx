import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  PageWrapper, HeroSection, HeroTitle, HeroSubtitle, ScoreBadge, 
  ContentContainer, SectionTitle, ResultCard, ButtonsRow 
} from './styles';
import QuestionCard from '../../components/question-card';
import CustomButton from '../../components/common/custom-button';
import AppTemplate from '../../components/app-template';
import PathConstants from '../../routes/pathConstants';

const questionsArray = [
  { id: 1, question: "Which hook is used to store state in React?", options: ["useState", "useEffect", "useRef", "useMemo"], answer: "useState" },
  { id: 2, question: "How do you pass data from a parent to a child component?", options: ["Using states", "Using props", "Using context", "Using hooks"], answer: "Using props" },
  { id: 3, question: "Which hook is used to perform side effects in a functional component?", options: ["useState", "useEffect", "useContext", "useReducer"], answer: "useEffect" },
  { id: 4, question: "What does DOM stand for in React context?", options: ["Document Object Model", "Data Object Model", "Document Orient Model", "Digital Object Model"], answer: "Document Object Model" },
  { id: 5, question: "Which tool is commonly used to manage global state in complex React apps?", options: ["Redux", "Axios", "Webpack", "Formik"], answer: "Redux" }
];

const QuizPage = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questionsArray[currentQuestionIndex];

  const handleSubmit = () => {
    if (!selectedOption) return;
    setIsSubmitted(true);
    if (selectedOption === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questionsArray.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption("");
      setIsSubmitted(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption("");
    setIsSubmitted(false);
    setScore(0);
    setShowResult(false);
  };

  return (
    <AppTemplate pageTitle="Quiz" path={PathConstants.QUIZ}>
      <PageWrapper>
        <HeroSection>
          <HeroTitle>Test Your Knowledge</HeroTitle>
          <HeroSubtitle>Answer the questions below and click Submit to check your score.</HeroSubtitle>
          {!showResult && <ScoreBadge>Score: {score} / {questionsArray.length}</ScoreBadge>}
        </HeroSection>
        <ContentContainer>
          {showResult ? (
            <ResultCard>
              <h2>{score >= 3 ? "Great Job!" : "Keep Practicing!"}</h2>
              <p>You answered {score} out of {questionsArray.length} questions correctly.</p>
              <ButtonsRow>
                <button className="btn-primary" onClick={handleRestart}>TRY AGAIN</button>
                <button className="btn-secondary" onClick={() => navigate('/')}>Back to Home</button>
              </ButtonsRow>
            </ResultCard>
          ) : (
            <>
              <SectionTitle>Choose the Correct Answer</SectionTitle>
              
              <QuestionCard 
                questionData={currentQuestion}
                selectedOption={selectedOption}
                onOptionChange={(val) => !isSubmitted && setSelectedOption(val)}
                isSubmitted={isSubmitted}
              />
              
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                {!isSubmitted ? (
                  <div style={{ width: '200px' }}>
                    <CustomButton 
                      title="Submit Answer" 
                      onClickFunction={handleSubmit} 
                      bgColor={selectedOption ? "#0b1f3a" : "#9ca3af"} 
                    />
                  </div>
                ) : (
                  <div style={{ width: '200px' }}>
                    <CustomButton 
                      title={currentQuestionIndex === questionsArray.length - 1 ? "Show Results" : "Next Question"} 
                      onClickFunction={handleNext} 
                      bgColor="#00a651" 
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </ContentContainer>
      </PageWrapper>
    </AppTemplate>
  );
};

export default QuizPage;