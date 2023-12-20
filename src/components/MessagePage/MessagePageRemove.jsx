import axios from 'axios';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from '../Common/ConfirmModal';

function MessagePageRemove({ recipient, setOpenRemoveModal }) {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const navigate = useNavigate();

  const handleDismissModal = () => {
    setOpenRemoveModal(false);
  };

  const handlePaperRemove = async () => {
    try {
      await axios.delete(`https://rolling-api.vercel.app/2-5/recipients/${recipient.id}/`);
      setShowConfirmModal(true);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {!showConfirmModal && (
        <ConfirmModal
          title={
            <>
              <span className="text-2xl">{recipient?.name} 님</span>
              <br />의 롤링 페이퍼를 삭제하시겠습니까?
            </>
          }
          onConfirm={handlePaperRemove}
          onCancel={handleDismissModal}
        />
      )}

      {showConfirmModal && (
        <ConfirmModal
          title="삭제가 완료되었습니다."
          onConfirm={() => {
            navigate('/list');
          }}
          onCancel={() => {
            navigate('/list');
          }}
          showCancelButton={false}
        />
      )}
    </>
  );
}

MessagePageRemove.propTypes = {
  recipient: PropTypes.object,
  setOpenRemoveModal: PropTypes.func,
};

export default MessagePageRemove;
