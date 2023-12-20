import { useEffect, useState } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaCircleCheck } from 'react-icons/fa6';
import PropTypes from 'prop-types';
import AddProfileImageModal from './AddProfileImageModal';

const propTypes = {
  setFormData: PropTypes.func,
};

const DEFAULT_PROFILE_IMAGES = 'https://i.ibb.co/Nx8VY0Z/no-profileimg-1.jpg';

const PROVIDED_PROFILE_IMAGES = [
  'https://i.ibb.co/Nx8VY0Z/no-profileimg-1.jpg',
  'https://i.ibb.co/SBhkRPX/profileimg1.jpg',
  'https://i.ibb.co/pX1t3bR/profileimg2.jpg',
  'https://i.ibb.co/m6MMJN5/profileimg3.jpg',
  'https://i.ibb.co/n7dYm0y/profileimg4.jpg',
];

const maxImages = 20;

const URL_REGEX = /^(ftp|http|https):\/\/[^ "]+$/;

function MessageProfileImage({ setFormData }) {
  const [selectedImage, setSelectedImage] = useState(DEFAULT_PROFILE_IMAGES);
  const [imageArray, setImageArray] = useState(PROVIDED_PROFILE_IMAGES);
  const [preview, setPreview] = useState();
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    handleProfileImageChange(imageUrl);
  };

  const handleAddImage = (e) => {
    e.preventDefault();

    const imageUrl = document.getElementById('AddProfileImage').value;

    if (!URL_REGEX.test(imageUrl)) {
      setError('정확한 이미지 URL을 입력해주세요.');
      return;
    }

    if (imageArray.includes(imageUrl)) {
      setError('이미 추가된 이미지입니다.');
      return;
    }

    if (imageArray.length >= maxImages) {
      setError('추가할 수 있는 최대 파일 수를 초과하였습니다. ');
      return;
    }

    setError('');
    setImageArray((prevImages) => [...prevImages, imageUrl]);
    setSelectedImage(imageUrl);
    handleProfileImageChange(imageUrl);
    closeModal();
  };

  const handleProfileImageChange = (imageUrl) => {
    setFormData((prevData) => ({
      ...prevData,
      profileImageURL: imageUrl,
    }));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setPreview(selectedImage);
  }, [selectedImage]);

  return (
    <div className="flex flex-col items-start gap-3 mt-[50px]">
      <div className="flex text-neutral-900 text-2xl font-bold font-['Pretendard'] leading-9">
        프로필 이미지
      </div>

      <div className="flex content-center items-center gap-8">
        <img
          className="w-[90px] h-[90px] rounded-full "
          src={preview}
          alt="프로필 이미지 미리보기"
        />
        <div className="flex flex-col items-start gap-2">
          <div className="text-neutral-600 text-base font-normal font-['Pretendard'] leading-relaxed">
            프로필 이미지를 선택해주세요!
          </div>

          <div className="flex w-full h-14 overflow-x-auto relative justify-start gap-1 flex-wrap">
            <div className="gap-1 flex flex-wrap">
              <label htmlFor="AddProfileImage" className="cursor-pointer" onClick={openModal}>
                <BsFillPlusCircleFill className="w-14 h-14 fill-gray-400" />
              </label>

              <AddProfileImageModal
                error={error}
                setError={setError}
                handleAddImage={handleAddImage}
                isModalOpen={isModalOpen}
                closeModal={closeModal}
                selectedImage={selectedImage}
              />

              {imageArray.map((imageUrl, index) => (
                <button key={index} type="button" onClick={() => handleImageClick(imageUrl)}>
                  <img
                    src={imageUrl}
                    alt={`${index}번째 Profile Image `}
                    className={`w-14 h-14 cursor-pointer ${
                      selectedImage === imageUrl ? 'selected opacity-50' : ''
                    } ${index >= 5 ? 'rounded-full object-cover' : ''}`}
                  />
                  {selectedImage === imageUrl && (
                    <FaCircleCheck className="absolute m-auto transform translate-x-[25%] -translate-y-[124%] bg-white fill-gray-400 rounded-full w-[35px] h-[35px]" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

MessageProfileImage.propTypes = propTypes;

export default MessageProfileImage;
