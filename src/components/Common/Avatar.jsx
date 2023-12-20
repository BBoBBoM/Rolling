import PropTypes from 'prop-types';
import ProfileImage from './ProfileImage';

const MAX_DISPLAY = 3;

const Avatar = ({ recentMessages, messageCount }) => {
  return( 
    <div className="avatar-container flex relative w-20 h-7">
      {recentMessages?.map((recentMessage, index) => <ProfileImage key={recentMessage.id} index={index} profileImage={recentMessage.profileImageURL} size={28}/>)}
      {messageCount > MAX_DISPLAY &&
        <div className={"avatar avatar-more w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-xs bg-white absolute left-12"}>{`+${messageCount - MAX_DISPLAY}`}</div>
      }
    </div>
  );
};

Avatar.propTypes = {
  recentMessages: PropTypes.array,
  messageCount: PropTypes.number
}

export default Avatar;
