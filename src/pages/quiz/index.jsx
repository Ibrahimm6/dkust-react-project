import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const questionsArray = [
  {
    id: 1,
    question: 'What does HTML stand for?',
    options: [
      'HyperText Markup Language',
      'HyperText Machine Language',
      'HighText Markup Language',
      'None of the above',
    ],
    answer: 'HyperText Markup Language',
  },
  {
    id: 2,
    question: 'Which CSS property changes the background color?',
    options: ['color', 'bg-color', 'background-color', 'background'],
    answer: 'background-color',
  },
  {
    id: 3,
    question: 'Which Bootstrap class makes a button green?',
    options: ['btn-primary', 'btn-dark', 'btn-warning', 'btn-success'],
    answer: 'btn-success',
  },
];

const QuizPage = () => {
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionChange = (questionId, option) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const handleSubmitQuiz = () => {
    let calculatedScore = 0;
    questionsArray.forEach((q) => {
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
          <ScoreBadge $isPassed={isSubmitted && score >= 2}>
            Score: {score} / {questionsArray.length}
          </ScoreBadge>
        </HeroSection>

        <ContentContainer>
          <SectionTitle>Choose the Correct Answer</SectionTitle>

          {questionsArray.map((question) => (
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
            <ResultCard $isPassed={score >= 2}>
              <h2>{score >= 2 ? 'Great Job!' : 'Keep Practicing!'}</h2>
              <p>
                You answered {score} out of {questionsArray.length} questions
                correctly.
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
        </ContentContainer>
      </PageWrapper>
    </AppTemplate>
  );
};

export default QuizPage;