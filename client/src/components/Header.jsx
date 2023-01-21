import logo from '../assets/IBM-logo.svg'

const Header = () => {
  return ( 
    <div className="w-full text-center p-4 flex flex-row items-center text-neutral-content border-b-2 border-base-300">
      <img src={logo} className="w-1/3 pr-4 border-r-2 border-base-300" alt="logo" />
      <div className='text-white w-auto pl-3 text-lg text-center font-medium'>
        Course Recommender
      </div>
    </div>
  );
}
 
export default Header;