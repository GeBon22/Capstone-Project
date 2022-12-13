import styled from "styled-components"

export default function StyledBody(props) {
return <Body>{props.children}</Body>
}

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  background-color: #f3e8e8;
  color: #572887;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 90vw;
  height: 75vh;
  margin-top: 1rem;
  margin-bottom: 1rem;
  overflow: auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;