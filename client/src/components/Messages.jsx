import Message from "./Message";

const Messages = ({ messages }) => {
  return ( 
    <div class="flex flex-col-reverse grow h-0 overflow-auto">
      {messages.map(message => (
        <Message 
          key={message.id} 
          isQuestion={message.isQuestion} 
          message={message.text}
        />
      ))}
    </div>
  );
}
 
export default Messages;