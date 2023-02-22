import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const Output = () => {
  const [shorter, setShorter] = useState('');
  return (
    <div>
      <p>{shorter}</p>
      <CopyToClipboard text={shorter}>
        <button className=" border border-gray-400 shadow-md rounded-xl p-1 m-5">
          Copy
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default Output;
