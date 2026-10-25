import React from 'react';
import { CardWrapper, QuestionText, OptionLabel } from './styles';

const QuestionCard = ({ questionData, selectedOption, onOptionChange, isSubmitted }) => {
  return (
    <CardWrapper>
      <QuestionText>
        Q{questionData.id}. {questionData.question}
      </QuestionText>

      {questionData.options.map((option, index) => {
        const isSelected = selectedOption === option;

        let bgColor = '#ffffff';
        let borderColor = '#e5e7eb';
        let textColor = '#1f2937';
        let fontWeight = '400';
        let statusText = '';
        let statusColor = '';

        if (isSubmitted) {
          if (option === questionData.answer) {
            bgColor = '#f0fdf4';
            borderColor = '#22c55e';
            textColor = '#15803d';
            fontWeight = '600';
            statusText = 'Correct';
            statusColor = '#22c55e';
          } else if (isSelected && option !== questionData.answer) {
            bgColor = '#fef2f2';
            borderColor = '#ef4444';
            textColor = '#b91c1c';
            fontWeight = '600';
            statusText = 'Incorrect';
            statusColor = '#ef4444';
          }
        } else if (isSelected) {
          bgColor = '#f0fdf4';
          borderColor = '#22c55e';
          textColor = '#15803d';
          fontWeight = '600';
        }

        return (
          <OptionLabel
            key={index}
            $bgColor={bgColor}
            $borderColor={borderColor}
            $textColor={textColor}
            $fontWeight={fontWeight}
            $disabled={isSubmitted}
            $statusColor={statusColor}
          >
            <div className="content">
              <input
                type="radio"
                name={`question-${questionData.id}`}
                value={option}
                checked={isSelected}
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