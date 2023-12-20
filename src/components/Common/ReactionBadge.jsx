import PropTypes from 'prop-types';

const ReactionBadge = ({ reaction }) => {
  return(
    <div className="px-2 py-1.5 flex md:px-3 md:py-2 rounded-4xl gap-0.5 bg-black/[0.54]">
      <div className='text-sm md:text-base'>{reaction?.emoji || '👍'}</div>
      <p className='text-white text-sm md:text-base'>{reaction?.count || 0}</p>
    </div>
  )
};

ReactionBadge.propTypes = {
  reaction: PropTypes.shape({
    emoji: PropTypes.string,
    count: PropTypes.number
  })
}

export default ReactionBadge;
