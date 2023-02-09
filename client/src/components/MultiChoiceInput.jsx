import InputWrapper from "./InputWrapper";

const MultiChoiceInput = ({ answers=[], submit }) => {
  return ( 
    <InputWrapper>
      <div className="w-full flex justify-center">
        {answers.map((answer, index) => (
          <button 
            key={index} 
            className="btn btn-primary m-2"
            onClick={() => submit(answer)}
          >
            {answer}
          </button>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-lg flex items-center m-4" />
      </div>
    </InputWrapper>
  );
}
 
export default MultiChoiceInput;