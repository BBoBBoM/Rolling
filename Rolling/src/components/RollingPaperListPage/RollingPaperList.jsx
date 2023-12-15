import propTypes from 'prop-types'
import { useState } from "react";
import RollingPaperCard from "./RollingPaperCard";
import ItemsCarousel from 'react-items-carousel';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const RollingPaperList = ({ title, rollingPaperList }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  
  return(
    <div className="w-full">
      <div className=" max-w-[1160px] mx-auto flex flex-col gap-4">
        <div className="font-pre text-2xl font-bold tracking-[-0.24px]">{title}</div>
        <ItemsCarousel
          requestToChangeActive={(value) => setActiveItemIndex(value)}
          activeItemIndex={activeItemIndex}
          numberOfCards={4}
          gutter={20}
          leftChevron={<button className="w-10 h-10 bg-white/90 border rounded-full border-gray-300 px-3 py-3 flex items-center justify-center"><IoIosArrowBack /></button>}
          rightChevron={<button className="w-10 h-10 bg-white/90 border rounded-full border-gray-300 px-3 py-3 flex items-center justify-center"><IoIosArrowForward /></button>}
          outsideChevron={false}
          chevronWidth={0}
          className='bg-black'
        >
          {rollingPaperList ? rollingPaperList?.slice(0, 10).map((rollingPaper) => <RollingPaperCard key={rollingPaper.id} rollingPaper={rollingPaper} />) : [...Array(4)].map((no, index) => <div key={index}></div>)}
        </ItemsCarousel>
      </div>
    </div>
  )
};

RollingPaperList.propTypes = {
  title: propTypes.string,
  rollingPaperList: propTypes.array
}

export default RollingPaperList;
