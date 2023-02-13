import { Box, Title, StyledLink as Link } from './NotExistingPage.styled.';

const NotExistingPage = () => {
  return (
    <Box>
      <Title>Not Existing Page</Title>
      <Link to="/">To my Phonebook</Link>
    </Box>
  );
};

export default NotExistingPage;
