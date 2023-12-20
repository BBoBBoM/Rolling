import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactionBadge from '../Common/ReactionBadge';
import Avatar from '../Common/Avatar';
import patternPurple from '../../assets/pattern_01.svg';
import patternBeige from '../../assets/pattern_02.svg';
import patternBlue from '../../assets/pattern_03.svg';
import patternGreen from '../../assets/pattern_04.svg';
import { BACKGROUND_COLOR } from '../../constants/constants';

const backgroundPattern = {
  blue: patternBlue,
  green: patternGreen,
  purple: patternPurple,
  beige: patternBeige,
}

const RollingPaperCard = ({ rollingPaper }) => {
  const background = rollingPaper?.backgroundImageURL ? rollingPaper.backgroundImageURL : backgroundPattern[rollingPaper.backgroundColor];

  return(
    <Link to={`/post/${rollingPaper.id}`}>
      <div  className={`w-[216px] h-[232px] md:w-[275px] md:h-[260px] rounded-2xl border-solid border-2 pt-[30px] pb-5 px-6 shadow-md ${BACKGROUND_COLOR[rollingPaper.backgroundColor]} 
        ${rollingPaper?.backgroundImageURL ? 'bg-cover text-white object-cover' : 'bg-no-repeat bg-right-bottom'}`} style={{ backgroundImage: `url(${background})` }}>
        <div className="flex flex-col gap-3 mb-[33px]">
          <div className="text-lg font-bold text-pretendard leading-7 md:text-2xl md:leading-9 tracking-tight">
            To. {rollingPaper.name}
          </div>
          <Avatar recentMessages={rollingPaper.recentMessages} messageCount={rollingPaper.messageCount}/>
          <div className=" font-normal text-pretendard text-base leading-6 tracking-tight">
            <span className="font-bold text-pretendard text-base leading-6 tracking-tight">
              {rollingPaper.messageCount}
            </span>
            명이 작성했어요
          </div>
        </div>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <div className='w-[162px] md:w-[227px] h-px bg-black/[0.12]' />
          <div className="flex items-center gap-1 md:gap-3">
            {rollingPaper.topReactions.map((reaction) => <ReactionBadge key={reaction.id} reaction={reaction}/>)}
          </div>
        </div>
      </div>
    </Link>
  )
};

RollingPaperCard.propTypes = {
  rollingPaper: PropTypes.shape({
    id: PropTypes.number,
    backgroundColor: PropTypes.string,
    backgroundImageURL: PropTypes.string,
    name: PropTypes.string,
    messageCount: PropTypes.number,
    recentMessages: PropTypes.array,
    topReactions: PropTypes.array,
  })
}


export default RollingPaperCard;
