import logo from '../assets/IBM-logo.svg'

const Header = () => {
  return ( 
    <div className="w-full justify-center p-4 py-8 flex flex-row items-center text-neutral-content border-b-2 border-base-300 max-w-30">
      <img src={logo} className="w-1/3 pr-4 border-r-2 border-base-300 max-h-14" alt="logo" />
      <div className='text-white w-auto pl-3 text-lg text-center w-2/3 md:text-2xl'>
        Course Recommender
      </div>
    </div>
  );
}
 
export default Header;