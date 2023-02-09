const InputWrapper = ({children}, _) => {
  return ( 
    <div className="p-4 py-8 border-t-2 border-base-300 flex flex-row justify-center flex-wrap">
      {children}
    </div>
  );
}
 
export default InputWrapper;