import styled from "styled-components";
import Link from "next/link";
import {Icon} from "@iconify/react";
import Breadcrumb from "../../components/Breadcrumb";
import ZurueckButton from "../../components/Zurueckbutton";
import StyledBody from "../../components/StyledBody";

export default function VerzugPage() {
  const path = "/online bestellen und kaufen/Ware o. Paket verloren";
  return (
    <StyledBody>
      <StyledLink href="/bestellung">
        <Breadcrumb path={path} />
      </StyledLink>
      <StyledArticle>
        <h3>Meine Ware kommt nicht an!</h3>
        <StyledIcon icon="mingcute:bookmark-fill" color="#572887" />
        <p>
          {`Für den Verlust der Ware – also bis sie bei Dir ankommt - trägt der Verkäufer das Risiko. 
          Geht das Paket verloren oder gibt es über den Verbleib der Ware keine Informationen, liegt die Verantwortung beim Verkäufer. 
      Kontaktiere den Verkäufer und mache ihn auf den Schaden aufmerksam. 
      Auch hier ist es ratsam, eine angemessene Frist (zB. 7-10 Werktage) zu setzen, um dem Verkäufer ausreichend Zeit zu geben, eine Lösung anzubieten und seiner Pflicht aus dem Vertrag nachzukommen.`}{" "}
        </p>
        <StyledLink href="/bestellung">
          <ZurueckButton />
        </StyledLink>
      </StyledArticle>
    </StyledBody>
  );
}

const StyledArticle = styled.article`
  text-align: center;
  color: #572887;
  font-size: 1.2rem;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  padding: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledIcon = styled(Icon)`
  width: 40px;
  height: 50px;
  position: absolute;
  top: 6.5rem;
  right: 2rem;
`;
