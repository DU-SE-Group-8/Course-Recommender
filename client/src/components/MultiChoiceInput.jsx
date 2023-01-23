import InputWrapper from "./InputWrapper";

const MultiChoiceInput = ({ answers=[], submit }) => {
  return ( 
    <InputWrapper>
      {answers.map((answer, index) => (
        <button 
          key={index} 
          className="btn btn-primary m-2"
          onClick={() => submit(answer)}
        >
          {answer}
        </button>
      ))}
    </InputWrapper>
  );
}
 
export default MultiChoiceInput;