import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";

const ToastModal = () => {
  return(
    <div className="w-[524px] h-16 border flex bg-black/80 items-center justify-between px-[30px] py-[19px] rounded-lg absolute top-[75vh] right-60">
      <div className="flex items-center justify-center gap-3">
        <IoIosCheckmarkCircle className="fill-green-600"/>
        <p className="text-white">URL이 복사되었습니다.</p>
      </div>
      <button><MdOutlineClose className="fill-white"/></button>
    </div>
  )
};

export default ToastModal;
