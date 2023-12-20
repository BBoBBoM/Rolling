import PropTypes from 'prop-types';
import ImageOption from './ImageOption';
import ColorOption from './ColorOption';
import { AddUserImageButton } from './AddUserImageButton';

const propTypes = {
  optionArray: PropTypes.array.isRequired,
  selectedList: PropTypes.string,
  handleItemClick: PropTypes.func.isRequired,
  handleSetImageArray: PropTypes.func.isRequired,

  selectOption: PropTypes.string,
};
const OptionSelectContainer = ({
  optionArray,
  selectedList,
  selectOption,
  handleItemClick,
  handleSetImageArray,
}) => {
  if (optionArray.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="x-[100%] h-auto grid grid-cols-2 gap-3 mx-auto sm:grid-cols-4  sm:x-[720px] md:x-[720px]">
      {selectOption === 'image' && (
        <AddUserImageButton
          handleItemClick={handleItemClick}
          handleSetImageArray={handleSetImageArray}
        />
      )}
      {optionArray.map((option, index) => (
        <div key={index}>
          {selectOption === 'color' ? (
            <ColorOption
              color={option}
              isSelected={selectedList === option}
              handleItemClick={handleItemClick}
            />
          ) : (
            <ImageOption
              image={option}
              isSelected={selectedList === option}
              handleItemClick={handleItemClick}
            />
          )}
        </div>
      ))}
    </div>
  );
};
OptionSelectContainer.propTypes = propTypes;
export default OptionSelectContainer;
