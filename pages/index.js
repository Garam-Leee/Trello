import styled from '@emotion/styled';

export default function Home() {
  return <Container>styled componet</Container>;
}

const Container = styled.section`
  background-color: var(--color-purple10);
  color: var(--color-white);
  overflow-y: hidden;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100vh;
`;
