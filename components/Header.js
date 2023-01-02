import styled from "styled-components";
import lottie from "lottie-web";
import {useEffect, useRef} from "react";
import Link from "next/link";

export default function Header() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("/public/HeaderAnimation.json"),
    });
    return () => lottie.destroy();
  });

  return (
    <StyledLink href="/">
      <StyledHeader>
        <Styledh3>Taschen</Styledh3>
        <AnimationContainer ref={container}></AnimationContainer>
        <Styledh3>Anwalt</Styledh3>
      </StyledHeader>
    </StyledLink>
  );
}

const AnimationContainer = styled.div`
  width: 70px;
  height: 90px;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid var(--secondary-color) 2px;
  padding: 5px;
  border-radius: var(--default-border-radius);
  box-shadow: var(--box-shadow);
  background-color: var(--primary-color);
  margin: 5px;
  color: var(--secondary-color);
  text-decoration: none;
`;

const Styledh3 = styled.h3`
  text-decoration: none;
  font-size: 1.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
