import type { NextPage } from 'next';
import Navigation from 'components/common/Navigation';
import Main from 'components/Main';
import About from 'components/About';
import DownloadButton from 'components/common/DownloadButton';
import LiveVideo from 'components/LiveVideo';
import ReadingBooks from 'components/ReadingBooks';
import Footer from 'components/common/Footer';

import useMedia from 'utils/hooks/useMedia';

const Home: NextPage = () => {
  const { isTablet, isPc } = useMedia();

  return (
    <div>
      <Navigation />
      <Main />
      <About isPc={isPc} />
      <LiveVideo isPc={isPc} />
      <ReadingBooks isTablet={isTablet} />
      <Footer isTablet={isTablet} isPc={isPc} />
      <DownloadButton />
    </div>
  );
};

export default Home;
