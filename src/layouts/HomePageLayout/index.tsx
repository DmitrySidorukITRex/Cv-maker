import { useRouter } from 'next/router';
import { URL } from '../../appConstants';
import * as Styled from './styled';

const HomePageLayout = () => {
  const router = useRouter();

  const onCreateResume = () => {
    router.push(URL.BUILDER_PERSONAL_DETAILS);
  };

  return (
    <Styled.Wrapper>
      <h1>Create your professional Resume with CV maker</h1>
      <div>
        Create your very own professional Resume and download it within 15
        minutes
      </div>
      <Styled.Button onClick={onCreateResume}>Create your Resume</Styled.Button>
    </Styled.Wrapper>
  );
};

export default HomePageLayout;
