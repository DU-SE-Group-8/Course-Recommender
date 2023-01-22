import InputWrapper from "./InputWrapper";

const MultiChoiceInput = ({ answers=[] }) => {
  return ( 
    <InputWrapper>
      {answers.map(answer => (
        <button class="btn btn-primary m-2">{answer.value}</button>
      ))}
    </InputWrapper>
  );
}
 
export default MultiChoiceInput;