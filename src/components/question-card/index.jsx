import React from 'react';
import { CardWrapper, QuestionText, OptionLabel } from './styles';

const QuestionCard = ({ questionData, selectedOption, onOptionChange, isSubmitted }) => {
  return (
    <CardWrapper>
      <QuestionText>Q{questionData.id}. {questionData.question}</QuestionText>
      {questionData.options.map((option, index) => {
        let bgColor = '#fff';
        let borderColor = '#e5e7eb';
        let textColor = '#374151';
        let statusText = '';
        let statusColor = '';

        if (isSubmitted) {
          if (option === questionData.answer) {
            bgColor = '#f0fdf4';
            borderColor = '#22c55e'; 
            textColor = '#15803d';
            statusText = 'Correct';
            statusColor = '#22c55e';
          } else if (option === selectedOption && option !== questionData.answer) {
            bgColor = '#fef2f2';
            borderColor = '#ef4444'; 
            textColor = '#b91c1c';
            statusText = 'Incorrect';
            statusColor = '#ef4444';
          }
        }

        return (
          <OptionLabel 
            key={index} 
            bgColor={bgColor} 
            borderColor={borderColor} 
            textColor={textColor}
            disabled={isSubmitted}
            statusColor={statusColor}
          >
            <div className="content">
              <input 
                type="radio" 
                name={`question-${questionData.id}`} 
                value={option}
                checked={selectedOption === option}
                onChange={() => onOptionChange(option)}
                disabled={isSubmitted}
              />
              <span>{option}</span>
            </div>
            {isSubmitted && statusText && <span className="status">{statusText}</span>}
          </OptionLabel>
        );
      })}
    </CardWrapper>
  );
};

export default QuestionCard;