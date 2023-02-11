import Courses from "./Courses";
import Message from "./Message";

const Messages = ({ log }) => {
  const messages = [...log].reverse()

  return ( 
    <div className="flex flex-col-reverse grow h-0 overflow-auto">
      {messages.map(message => (
        <div key={message.questionId || crypto.randomUUID()}>
            {message?.courses ? <Courses courses={message.courses} />
              : message.answer !== -1 
              ? <>
                  <Message 
                    isQuestion={true} 
                    message={message.question}
                  />
                  <Message
                    isQuestion={false} 
                    message={message.answer}
                  />
                </>
                :
                <Message 
                  isQuestion={true} 
                  message={message.question}
                  load={true}
                />
            }
        </div>
      ))}
    </div>
  );
}
 
export default Messages;