import PropTypes from 'prop-types';
import { IoCheckmarkCircle } from 'react-icons/io5';

const propTypes = {
  image: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  handleItemClick: PropTypes.func.isRequired,
};

const ImageOption = ({ image, isSelected, handleItemClick }) => {
  return (
    <div className="overflow-hidden rounded-2xl">
      <div
        onClick={() => handleItemClick('image', image)}
        className={`relative w-[156px] h-[156px]  bg-no-repeat rounded-2xl transition-transform duration-500 hover:scale-125 cursor-pointer sm:w-[168px] sm:h-[168px] md:w-[168px] md:h-[168px] `}
      >
        <img src={image} alt="defaultImage" className="w-full h-full" />

        {isSelected && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-400 opacity-50 ">
            <IoCheckmarkCircle className="absolute  w-12 h-12 top-[34%] left-[36%]  sm:w-[55px] sm:h-[55px] md:w-[55px] md:h-[55px]  " />
          </div>
        )}
      </div>
    </div>
  );
};

ImageOption.propTypes = propTypes;
export default ImageOption;
