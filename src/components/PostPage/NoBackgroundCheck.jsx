import PropTypes from 'prop-types';
const propTypes = {
  handleCheckboxChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

function NoSelectBackgroundCheck({ isChecked, handleCheckboxChange }) {
  return (
    <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
      <div
        onClick={handleCheckboxChange}
        className={`flex w-full p-[7px] px-[16px] justify-center cursor-pointer rounded-md transition-transform transform hover:scale-110 ${
          isChecked ? 'bg-purple-500 text-white' : ''
        }`}
      >
        배경화면 없애기
      </div>{' '}
    </div>
  );
}
NoSelectBackgroundCheck.propTypes = propTypes;
export default NoSelectBackgroundCheck;
