import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

const propTypes = {
  handleModalChange: PropTypes.func.isRequired,
};

export const UrlModal = ({ handleModalChange }) => {
  const [urlInputValue, setUrlInputValue] = useState('');
  const [isValidUrl, setIsValidUrl] = useState(true);
  const modalBackground = useRef();

  const handleUrlSubmit = () => {
    if (isValidUrl) {
      handleModalChange(false, urlInputValue);
    }
  };

  const validateUrlFormat = (inputValue) => {
    const urlCheckRule =
      /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlCheckRule.test(inputValue);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    setUrlInputValue(inputValue);
    setIsValidUrl(validateUrlFormat(inputValue));
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50"
      ref={modalBackground}
      onClick={(e) => {
        if (e.target === modalBackground.current) {
          handleModalChange(false, null);
        }
      }}
    >
      <div className="bg-white border-gray-300 border-2 w-[350px] h-[250px] p-7 rounded-xl">
        <div className="flex flex-col">
          <p className="text-xl text-center font-bold">URL 입력하기 </p>
          <div className="h-32">
            <input
              type="text"
              className={`w-full p-4 mt-3 border-2 rounded-xl ${
                isValidUrl
                  ? 'border-gray-300 focus:border-purple-400 focus:border-2'
                  : 'border-red-500'
              } focus:outline-none`}
              placeholder="URL을 입력해주세요"
              value={urlInputValue}
              onChange={handleInputChange}
            />
            {isValidUrl === false && (
              <p className="text-red-500 text-sm mt-1">
                올바른 URL 형식이 아닙니다. <br /> http:// 또는 https:// 를 포함해 주세요.
              </p>
            )}
          </div>
        </div>
        <div className="flex gap-2 justify-center">
          <button
            onClick={handleUrlSubmit}
            disabled={urlInputValue === ''}
            className={`py-2 px-6  text-xl text-white rounded-xl ${
              urlInputValue !== '' && isValidUrl === true ? 'bg-purple-500' : 'bg-gray-300'
            }`}
          >
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
};

UrlModal.propTypes = propTypes;
