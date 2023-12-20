import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';

function Header() {
  const location = useLocation();
  const isVisiblePage = location.pathname === '/' || location.pathname === '/list';

  return (
    <div className={`${isVisiblePage ? 'flex' : 'hidden'} md:flex items-center justify-between flex-shrink-0 py-2 px-4 xl:px-24 max-w-screen-xl mx-auto h-16 border-b-[1px] border-zinc-100`}>
      <Link to={'/'}>
        <img src={logo} alt="로고" />
      </Link>
      {isVisiblePage && (
        <Link to={'/post'}>
          <button className="hover:bg-neutral-100 w-40 px-4 py-2 bg-white rounded-md border border-gray-300 justify-center items-center gap-2.5 flex text-center text-neutral-900 text-base font-bold font-pre">
            롤링 페이퍼 만들기
          </button>
        </Link>
      )}
    </div>
  );
}

export default Header;
