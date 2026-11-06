import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import {
  PageWrapper,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  ScoreBadge,
  ContentContainer,
  SectionTitle,
  SubmitButtonWrapper,
  SubmitQuizButton,
  ResultCard,
  ButtonsRow,
} from './styles';
import QuestionCard from '../../components/question-card';
import AppTemplate from '../../components/app-template';
import PathConstants from '../../routes/pathConstants';
import MainLoader from "../../components/main-loader";

import { getQuiz } from "../../services/quiz/quiz.service"; 

const QuizPage = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const getData = async () => {
    setLoading(true);
    const response = await getQuiz(lang);
    
    if (response.status === 200 && Array.isArray(response.data)) {
      const mappedData = response.data.map((q) => ({
        id: q.id,
        question: q.question || "",
        options: Array.isArray(q.options) ? q.options.map(opt => opt.label) : [],
        
        answer: (q.options && q.options.find(opt => opt.value === q.correct)?.label) || "",
      }));
      setQuestions(mappedData);
    } else {
      setQuestions([]);
    }
    
    setSelectedAnswers({});
    setIsSubmitted(false);
    setScore(0);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [lang]);

  const handleOptionChange = (questionId, option) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const handleSubmitQuiz = () => {
    let calculatedScore = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.answer) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
    setIsSubmitted(true);
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setScore(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppTemplate pageTitle="Quiz" path={PathConstants.QUIZ}>
      <PageWrapper>
        <HeroSection>
          <HeroTitle>Test Your Knowledge</HeroTitle>
          <HeroSubtitle>
            Answer the questions below and click Submit to check your score.
          </HeroSubtitle>
          <ScoreBadge $isPassed={isSubmitted && score >= (questions.length / 2)}>
            Score: {score} / {questions.length}
          </ScoreBadge>
        </HeroSection>
        <ContentContainer>
          <SectionTitle>Choose the Correct Answer</SectionTitle>

          {loading ? (
            <MainLoader />
          ) : questions.length === 0 ? (
             <div style={{ textAlign: "center", padding: "40px", color: "#888" }}>
              No questions found.
            </div>
          ) : (
            <>
              {questions.map((question) => (
                <QuestionCard
                  key={question.id}
                  questionData={question}
                  selectedOption={selectedAnswers[question.id] || ''}
                  onOptionChange={(val) => handleOptionChange(question.id, val)}
                  isSubmitted={isSubmitted}
                />
              ))}

              {!isSubmitted ? (
                <SubmitButtonWrapper>
                  <SubmitQuizButton type="button" onClick={handleSubmitQuiz}>
                    SUBMIT QUIZ
                  </SubmitQuizButton>
                </SubmitButtonWrapper>
              ) : (
                <ResultCard $isPassed={score >= (questions.length / 2)}>
                  <h2>{score >= (questions.length / 2) ? 'Great Job!' : 'Keep Practicing!'}</h2>
                  <p>
                    You answered {score} out of {questions.length} questions correctly.
                  </p>
                  <ButtonsRow>
                    <button className="btn-primary" onClick={handleRestart}>
                      TRY AGAIN
                    </button>
                    <button
                      className="btn-secondary"
                      onClick={() => navigate(PathConstants.HOME)}
                    >
                      Back to Home
                    </button>
                  </ButtonsRow>
                </ResultCard>
              )}
            </>
          )}
        </ContentContainer>
      </PageWrapper>
    </AppTemplate>
  );
};

export default QuizPage;