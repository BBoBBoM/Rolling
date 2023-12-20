import PropTypes from 'prop-types';

const propTypes = {
  subject: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Subject = ({ subject, description = '' }) => {
  return (
    <div className="flex flex-col">
      <div className="font-Pretendard font-bold text-2xl leading-9 tracking-wide ">{subject}</div>
      {description !== '' && <p className="mb-6">{description}</p>}
    </div>
  );
};
Subject.propTypes = propTypes;
export default Subject;
