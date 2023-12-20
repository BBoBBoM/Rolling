import loadingAnimation from '../../assets/loading.gif';

function MessageLoading() {
  return (
    <div className="flex justify-center py-5">
      <img src={loadingAnimation} className="w-12" />
    </div>
  );
}

export default MessageLoading;
