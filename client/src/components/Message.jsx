const Message = ({ message, isQuestion=false }) => {
  let messageClass = "flex w-full space-x-3 p-6 py-8";
  if (isQuestion) {
    messageClass += " bg-blue-600";
  }

  return ( 
    <div className={messageClass}>
      <p className="text-sm">{message}</p>
    </div>
  );
}
 
export default Message;