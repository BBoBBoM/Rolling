import img01 from '../../assets/landing-img01.svg';
import img02 from '../../assets/landing-img02.svg';

function Article() {
  return (
    <div className="mt-16 mb-16 mx-6">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-[30px] mb-[30px] py-[60px] px-[24px] max-w-[1100px] rounded-[16px] bg-[var(--Surface)] mx-auto">
        <div className="lg:w-1/2 flex-col items-start gap-4 inline-flex lg:ml-[30px]">
          <div className="px-3 py-1.5 bg-purple-600 rounded-3xl flex-col justify-center items-center gap-2.5 flex">
            <div className="text-white text-sm font-bold font-['Pretendard'] leading-tight">
              Point. 01
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-neutral-900 text-2xl font-bold font-['Pretendard'] leading-9">
              누구나 손쉽게, 온라인
              <br />
              롤링 페이퍼를 만들 수 있어요
            </div>
            <div className="text-neutral-600 text-lg font-normal font-['Pretendard'] leading-7">
              로그인 없이 자유롭게 만들어요.
            </div>
          </div>
        </div>
        <img className="" src={img01} />
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-[30px] py-[60px] px-[24px] max-w-[1100px] rounded-[16px] bg-[var(--Surface)] mx-auto">
        <img className="hidden lg:block" src={img02} />
        <div className="lg:order-2 lg:left-[720px] lg:w-1/2 flex-col items-start gap-4 inline-flex lg:ml-[30px]">
          <div className="px-3 py-1.5 bg-purple-600 rounded-3xl flex-col justify-center items-center gap-2.5 flex">
            <div className="text-white text-sm font-bold font-['Pretendard'] leading-tight">
              Point. 02
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-neutral-900 text-2xl font-bold font-['Pretendard'] leading-9">
              서로에게 이모지로 감정을
              <br />
              표현해보세요
            </div>
            <div className="text-neutral-600 text-lg font-normal font-['Pretendard'] leading-7">
              롤링 페이퍼에 이모지를 추가할 수 있어요.
            </div>
          </div>
        </div>
        <img className="lg:hidden w-full mt-[30px]" src={img02} />
      </div>
    </div>
  );
}

export default Article;
