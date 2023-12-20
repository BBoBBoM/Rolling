import PropTypes from 'prop-types';
import { useState } from 'react';

const propTypes = {
  onChange: PropTypes.func.isRequired,
};

export const UserNameInput = ({ onChange }) => {
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue !== '') {
      setIsInputEmpty(false);
      onChange(inputValue);
    } else {
      setIsInputEmpty(true);
    }
  };

  return (
    <div>
      <input
        type="text"
        name="receiveUserName"
        onChange={handleChange}
        placeholder="받는 사람 이름을 입력해 주세요"
        className={`w-full mb-1 p-4 border-2 border-solid rounded-lg focus:border-2 focus:outline-none  ${
          isInputEmpty === false
            ? 'border-gray-300 focus:border-purple-500'
            : 'border-red-500 focus:border-red-500'
        }`}
      />
      {isInputEmpty === true ? (
        <div className="text-red-500 text-xs">필수입력 사항입니다.</div>
      ) : (
        <div className="h-4"></div>
      )}
    </div>
  );
};

UserNameInput.propTypes = propTypes;
