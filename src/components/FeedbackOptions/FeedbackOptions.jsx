import {
  FeedbackOptionsBtn,
  FeedbackOptionsList,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackOptionsList>
    {options.map(option => (
      <li key={option}>
        <FeedbackOptionsBtn onClick={() => onLeaveFeedback(option)}>
          {option}
        </FeedbackOptionsBtn>
      </li>
    ))}
  </FeedbackOptionsList>
);
