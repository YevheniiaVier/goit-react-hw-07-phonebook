import { ThreeDots } from 'react-loader-spinner';
import { Box } from 'pages/NotExistingPage/NotExistingPage.styled.';

export const Loader = () => {
  return (
    <Box>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#38D2D2"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Box>
  );
};
