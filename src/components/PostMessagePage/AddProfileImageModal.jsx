import { useEffect } from 'react';
import Modal from 'react-modal';
import { IoCloseCircleSharp } from 'react-icons/io5';
import PropTypes from 'prop-types';

const propTypes = {
  error: PropTypes.string,
  selectedImage: PropTypes.string,
  setError: PropTypes.func,
  handleAddImage: PropTypes.func,
  isModalOpen: PropTypes.bool,
  closeModal: PropTypes.func,
};

function AddProfileImageModal({
  selectedImage,
  error,
  setError,
  handleAddImage,
  isModalOpen,
  closeModal,
}) {
  useEffect(() => {
    Modal.setAppElement('#root');
  }, [selectedImage]);

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      contentLabel="AddProfileImageModal"
      className="w-96 p-16 py-12 mx-auto bg-white border border-gray-300 rounded-2xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div className="flex flex-col items-center relative">
        <div className="absolute top-[-36px] right-[-52px]">
          <IoCloseCircleSharp
            className="w-8 h-8 fill-purple-600 hover:fill-purple-700 cursor-pointer"
            onClick={closeModal}
          />
        </div>
        <p className="mb-8 text-2xl font-bold leading-6">URL 주소</p>
        <form id="FormId" className="flex flex-col items-center">
          <input
            type="url"
            name="url"
            id="AddProfileImage"
            placeholder="이미지 주소를 입력해주세요."
            form="FormId"
            onChange={() => {
              setError('');
            }}
            className={`flex w-[250px] p-3 mb-10 items-center gap-2 border rounded-xl bg-white focus:outline-none ${
              error ? 'border-red-500' : 'border-gray-300 focus:border-gray-500'
            } appearance-none relative`}
          />
          {error && (
            <div className={`absolute top-[105px] font-bold text-red-500 text-sm mb-10`}>
              {error}
            </div>
          )}
          <button
            type="submit"
            className={`inline-flex p-2 px-6 justify-center items-center gap-[10px] rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-center font-bold font-Pretendard text-[15px] leading-7 ${
              error ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
            }`}
            onClick={handleAddImage}
          >
            확인
          </button>
        </form>
      </div>
    </Modal>
  );
}

AddProfileImageModal.propTypes = propTypes;

export default AddProfileImageModal;
