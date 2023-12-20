import PropTypes from 'prop-types';
const propTypes = {
  onclick: PropTypes.func.isRequired,
};
export const UrlAppendButton = ({ onclick }) => {
  return (
    <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
      <div
        className=" p-[7px] px-[16px] cursor-pointer rounded-md transition-transform transform hover:scale-110"
        onClick={onclick}
      >
        URL추가
      </div>
    </div>
  );
};
UrlAppendButton.propTypes = propTypes;
