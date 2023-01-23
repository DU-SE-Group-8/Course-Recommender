import { TypeAnimation } from 'react-type-animation';

const Message = ({ message, isQuestion=false, load=false }) => {
  let messageClass = "flex w-full space-x-3 p-6 py-8";
  if (isQuestion) {
    messageClass += " bg-primary text-primary-content";
  }

  return ( 
    <div className={messageClass}>
      {load 
        ?
          <TypeAnimation     
            sequence={[' ', 400, message]}
            speed={75} 
            wrapper="p"
            className='text-md'
            repeat={0}
            cursor={false}
          />
        :
        <p className="text-md">{message}</p>
      }
    </div>
  );
}
 
export default Message;