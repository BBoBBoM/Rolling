import Avatar from "../Common/Avatar";
import ReactionContainer from "./ReactionContainer";
import { IoShareOutline } from "react-icons/io5";
import { useState } from "react";
import ShareMenu from "./ShareMenu";
import PropTypes from 'prop-types';

const RecipientMenu = ({ recipient }) => {
  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  
  const handleClickShareButton = () => {
    setShareMenuOpen(!shareMenuOpen);
  };

  return(
    <nav className="max-w-full relative py-[13px]">
      <div className="flex min-w-[360px] md:min-w-[768px] md:max-w-[1248px] relative flex-col md:flex-row md:justify-between mx-auto md:px-6 xl:px-24">
        <div className="px-5 py-3 text-lg font-bold flex justify-center md:block md:px-0 md:py-0 md:text-3xl font-[pretendard]">
          <p className="mx-0 my-0 px-0 py-0 min-w-[320px] md:min-w-[227px]">
            {`To. ${recipient?.name}`}
          </p>
        </div>
        <div className="flex items-center md:gap-7 justify-center py-2 px-5 md:px-0 md:py-0 md:justify-center">
          <div className="hidden lg:flex gap-2.5">
            <Avatar recentMessages={recipient?.recentMessages} messageCount={recipient?.messageCount}/>
            <div className="text-lg text-gray-900 font-pre">{`${recipient?.messageCount}명이 작성했어요!`}</div>
          </div>
          <div className="hidden lg:flex w-px h-7 bg-gray-200" />
          <div className="flex gap-[13px] justify-center items-center">
            <ReactionContainer topReactions={recipient?.topReactions} recipientId={recipient?.id}/>
            <div className="w-px h-7 bg-gray-200" />
            <button className="px-2 py-1.5 border border-gray-300 rounded-md md:px-4" onClick={handleClickShareButton}><IoShareOutline className="w-6 h-6"/></button>
            {shareMenuOpen && <ShareMenu />}
          </div>
        </div>
      </div>
    </nav>
  )
};

RecipientMenu.propTypes = {
  recipient: PropTypes.shape({
    name: PropTypes.string,
    messageCount: PropTypes.number,
    topReactions: PropTypes.array,
    id: PropTypes.number,
    recentMessages: PropTypes.array
  })
}

export default RecipientMenu;

