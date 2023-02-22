import InputWrapper from "./InputWrapper";

const MultiChoiceInput = ({ answers=[], submit }) => {

  return ( 
    <InputWrapper>
      {answers.map((answer, index) => (
        <button
          key={index} 
          className="btn bg-blue-600 hover:bg-blue-500 m-2 border-0 text-white"
          onClick={() => submit(answer)}
        >
          {answer}
        </button>
      ))}
    </InputWrapper>
  );
}
 
export default MultiChoiceInput;