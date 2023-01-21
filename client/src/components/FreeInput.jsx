import InputWrapper from "./InputWrapper";

const FreeInput = () => {
  return ( 
    <InputWrapper>
      <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs flex items-center" />
    </InputWrapper>
  );
}
 
export default FreeInput;
