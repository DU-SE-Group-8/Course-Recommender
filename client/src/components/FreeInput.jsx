import InputWrapper from "./InputWrapper";

const FreeInput = () => {
  return ( 
    <InputWrapper>
      <input className="flex items-center h-10 w-full rounded px-3 text-sm" type="text" placeholder="Type your message…" />
    </InputWrapper>
  );
}
 
export default FreeInput;