import logo from '../assets/shortly.png';

const Header = () => {
  return (
    <div className="flex justify-between shadow-xl mb-4">
      <div>
        <img className="w-60" alt="Logo" src={logo} />
      </div>

      <ul className="flex  items-center text-blue-700">
        <li className="p-2 mx-2">Home</li>
        <li className="p-2 mx-2">About</li>
        <li className="p-2 mx-2">Contact</li>
      </ul>

      <ul className="flex items-center text-blue-700">
        <li className="p-2 mx-2">Login</li>
        <li className="p-2 mx-2">Sign up</li>
      </ul>
    </div>
  );
};

export default Header;
