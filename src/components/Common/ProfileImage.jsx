import PropTypes from 'prop-types';

const leftValue = {
  0 : 'absolute left-0',
  1 : 'absolute left-4',
  2 : 'absolute left-8',
  default: ''
}

const sizeValue = {
  28: 'w-7',
  56: 'w-14',
  80: 'w-20' 
}

const ProfileImage = ({ index='default', profileImage, size }) => {
  return(
    <div key={index} className={`avatar avatar-${index} rounded-full absolute ${leftValue[index]} ${sizeValue[size]}`}>
      <img src={profileImage} alt="프로필" className=" rounded-full border"/>
    </div>
  )
};

ProfileImage.propTypes = {
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  profileImage: PropTypes.string,
  size: PropTypes.number
}

export default ProfileImage;
