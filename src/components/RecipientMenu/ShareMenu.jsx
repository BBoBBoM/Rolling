import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ToastModal from './ToastModal';

const ShareMenu = () => {
  const [isShareSuccess, setIsShareSuccess] = useState(false);
  const location = useLocation();

  const handleShareUrl = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsShareSuccess(true);
    } catch (error) {
      alert(error);
    } finally {
      setTimeout(() => setIsShareSuccess(false), 2000);
    }
  };

  return(
    <>
      <div className="flex flex-col py-2.5 px-px border border-gray-300 rounded-lg absolute top-11 right-0 z-10 bg-white">
        <button className="py-3 px-4 hover:bg-gray-100">카카오톡 공유</button>
        <button className="py-3 px-4 hover:bg-gray-100" onClick={() => handleShareUrl(location.pathname)}>URL 공유</button>
      </div>
      {isShareSuccess && <ToastModal />}
    </>
  )
};

export default ShareMenu;
