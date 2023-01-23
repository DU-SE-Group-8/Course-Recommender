import Message from "./Message";

const Messages = ({ log }) => {
  const messages = [...log].reverse()
  return ( 
    <div className="flex flex-col-reverse grow h-0 overflow-auto">
      {messages.map(message => (
        <div key={message.questionId}>
          <Message 
            isQuestion={true} 
            message={message.question}
          />
          {message.answer !== -1 &&
            <Message
              isQuestion={false} 
              message={message.answer}
            />
          }
        </div>
      ))}
    </div>
  );
}
 
export default Messages;