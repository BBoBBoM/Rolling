// import RollingPaperList from './RollingPaperList';
import Button from '../Common/Button';
import { useRollingPaperList } from '../../hooks/hooks';
import { Suspense, lazy } from 'react';
import RollingPaperListSkeleton from './RollingPaperListSkeleton';

const RollingPaperList = lazy(() => import('./RollingPaperList'));

const RollingPaperListPage = () => {
  const [createdSortRollingPaper] = useRollingPaperList();
  const [likeSortRollingPaper] = useRollingPaperList('like');

  return (
    <Suspense fallback={<RollingPaperListSkeleton />}>
      <div className='pt-[40px] pl-5 md:pt-[50px] flex flex-col gap-[50px]'>
        <RollingPaperList title={'인기 롤링 페이퍼 10 🔥'} rollingPaperList={likeSortRollingPaper}/>
        <RollingPaperList title={'최근에 만든 롤링 페이퍼 10 ⭐️️'} rollingPaperList={createdSortRollingPaper}/>
        <Button to="/post">나도 만들어보기</Button>
      </div>
    </Suspense>
  );
};

export default RollingPaperListPage;
