import logo from '../assets/IBM-logo.svg'

const Header = () => {
  return ( 
    <div className="w-full text-center p-2 flex flex-row items-center text-neutral-content border-b-2 border-base-300">
      <img src={logo} className="w-1/3 p-2" alt="logo" />
      <div className='text-white w-auto p-4 text-md text-center'>
        Course Recommender
      </div>
    </div>
  );
}
 
export default Header;