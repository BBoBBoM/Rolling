import PropTypes from 'prop-types';

function ConfirmModal({ title, onConfirm, onCancel, showCancelButton = true }) {
  return (
    <>
      <div className="flex flex-col justify-end gap-9 p-8 bg-white fixed -translate-x-2/4 -translate-y-2/4 left-2/4 w-96 h-56 rounded-3xl top-2/4 z-20">
        <p className="text-center text-xl font-bold">{title}</p>

        <div className="flex justify-center gap-5">
          <button
            onClick={onConfirm}
            className="hover:bg-orange-700 w-24 px-6 py-3.5 bg-orange-600 rounded-xl justify-center items-center gap-2.5 inline-flex text-center text-white text-lg font-bold font-['Pretendard'] leading-7"
          >
            확인
          </button>
          {showCancelButton && (
            <button
              onClick={onCancel}
              className="hover:bg-gray-700 w-24 px-6 py-3.5 bg-gray-600 rounded-xl justify-center items-center gap-2.5 inline-flex text-center text-white text-lg font-bold font-['Pretendard'] leading-7"
            >
              취소
            </button>
          )}
        </div>
      </div>
      <div onClick={onCancel} className="fixed bg-[black] opacity-[60%] inset-0 z-10"></div>
    </>
  );
}

ConfirmModal.propTypes = {
  title: PropTypes.node,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  showCancelButton: PropTypes.bool,
};

export default ConfirmModal;
