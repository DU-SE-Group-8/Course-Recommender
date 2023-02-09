import { useState } from "react";
import InputWrapper from "./InputWrapper";

const FreeType = ({ submit }) => {
  const [input, setInput] = useState("");

  return ( 
    <InputWrapper>
      <div className="flex flex-row w-full justify-center">
        <input 
            type="text" 
            placeholder="Type here" 
            className="input input-bordered input-primary w-full max-w-lg flex items-center m-4 mr-0 text-black"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            className="btn btn-primary m-4" 
            onClick={() => submit(input)}
          >
            Send
          </button>
      </div>
    </InputWrapper>
  );
}
 
export default FreeType;