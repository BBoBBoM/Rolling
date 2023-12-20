const RollingPaperListSkeleton =  () => {
  return(
    <div className='pt-[50px] flex flex-col gap-[50px]'>
      <div className=" mx-auto flex flex-col gap-4">
        <div className="skeleton w-48 h-9"></div>
        <div className="skeleton w-[1160px] h-[290px]"></div>
      </div>
      <div className=" mx-auto flex flex-col gap-4">
        <div className="skeleton w-48 h-9"></div>
        <div className="skeleton w-[1160px] h-[290px]"></div>
      </div>
    </div>
  )
};

export default RollingPaperListSkeleton;
