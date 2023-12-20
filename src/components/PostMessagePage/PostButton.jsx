import PropTypes from 'prop-types';

const propTypes = {
  onSubmit: PropTypes.func,
  isButtonEnabled: PropTypes.bool,
};

function PostButton({ isButtonEnabled, onSubmit }) {
  const handleClick = () => {
    if (isButtonEnabled) {
      onSubmit();
    }
  };

  return (
    <div className="mt-[50px]">
      <div
        className={'flex w-720 p-4 justify-center items-center gap-10 rounded-2xl bg-purple-600'}
      >
        <button
          type="button"
          disabled={!isButtonEnabled}
          className="w-full text-white text-center font-Pretendard font-bold text-lg leading-7"
          onClick={handleClick}
        >
          생성하기
        </button>
      </div>
    </div>
  );
}

PostButton.propTypes = propTypes;

export default PostButton;
