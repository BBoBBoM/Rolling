import Article from './Article';
import Button from '../Common/Button';

function LandingPage() {
  return (
    <>
      <Article />
      <Button to="/list">구경해보기</Button>
    </>
  );
}

export default LandingPage;
