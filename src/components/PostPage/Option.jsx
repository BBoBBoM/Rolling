import PropTypes from 'prop-types';
import { IoCheckmarkCircle } from 'react-icons/io5';

const propTypes = {
  data: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  handleItemClick: PropTypes.func.isRequired,
  selectOption: PropTypes.string.isRequired,
};

const ColorOption = ({ data, selectOption, isSelected, handleItemClick }) => {
  return (
    <div className={'overflow-hidden rounded-2xl'}>
      <div
        onClick={() => handleItemClick({ selectOption }, data)}
        className={`relative w-[156px] h-[156px] rounded-2xl cursor-pointer ${
          selectOption === 'color' ? data : ''
        } sm:w-[168px] sm:h-[168px] `}
      >
        {selectOption === 'image' && (
          <img src={data} alt="defaultImage" className="w-full h-full" />
        )}
        {isSelected && (
          <div className="absolute top-0 left-0 min-w-full h-full bg-gray-400 opacity-50 rounded-2xl">
            <IoCheckmarkCircle className="absolute w-12 h-12 top-[34%] left-[36%] sm:w-[55px] sm:h-[55px] md:w-[55px] md:h-[55px]" />
          </div>
        )}
      </div>
    </div>
  );
};
ColorOption.propTypes = propTypes;
export default ColorOption;
