import { scroller } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const useNavigateAndScroll = () => {
  const navigate = useNavigate();

  const navigateAndScroll = async (path, elementId) => {
    await navigate(path);

    setTimeout(() => {
      scroller.scrollTo(elementId, {
        duration: 500,
        smooth: true,
        offset: -75,
        spy: true,
      });
    }, 100);
  };

  return navigateAndScroll;
};

export default useNavigateAndScroll;
