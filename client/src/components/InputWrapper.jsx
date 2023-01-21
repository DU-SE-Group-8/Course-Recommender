const InputWrapper = ({children}, _) => {
  return ( 
    <div className="p-4 py-8 border-t-2 border-base-300 flex justify-center">
      {children}
    </div>
  );
}
 
export default InputWrapper;