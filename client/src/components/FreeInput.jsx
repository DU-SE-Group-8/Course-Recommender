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
            className="input input-bordered w-full max-w-lg flex items-center m-4 mr-0 dark:text-white text-black"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                submit(input);
              }
            }}
          />
          <button
            className="btn bg-blue-600 hover:bg-blue-500 m-4 text-white" 
            onClick={() => submit(input)}
          >
            Send
          </button>
      </div>
    </InputWrapper>
  );
}
 
export default FreeType;