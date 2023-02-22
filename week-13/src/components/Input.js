import { useState } from 'react';

const Input = () => {
  const [value, setValue] = useState('');
  const handleClick = () => {
    setValue('');
  };

  return (
    <div className="flex justify-center py-8">
      <input
        className="p-1 m-5 border border-gray-400 w-72 rounded-lg "
        placeholder="Shorten a link here..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className=" border border-gray-400 shadow-md rounded-xl p-1 m-5"
        onClick={handleClick}
      >
        Shorten it!
      </button>
    </div>
  );
};

export default Input;
