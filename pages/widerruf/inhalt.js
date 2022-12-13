import styled from "styled-components";
import Link from "next/link";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {Icon} from "@iconify/react";
import Breadcrumb from "../../components/Breadcrumb";
import ZurueckButton from "../../components/Zurueckbutton";
import StyledBody from "../../components/StyledBody";


export default function WannWiderruf() {
  const path = "/Widerruf und Retoure/Was muss im Widerruf stehen?";
  return (
    <StyledBody>
      <StyledLink href="/widerruf">
        <Breadcrumb path={path} />
      </StyledLink>
      <StyledArticle>
        <StyledIcon icon="mingcute:bookmark-fill" color="#572887" />
        <p>
          {`Was muss in einem Widerruf stehen?

          In einem Widerruf muss nicht ausdrücklich das Wort Widerruf verwendet
        werden. Es empfiehlt sicher aber, klar zu machen, dass man
        vom Vertrag Abstand nehmen möchte und den Kaufpreis zurück erstattet
        verlangt.
        Es muss außerdem kein Grund für den Widerruf angegeben werden.
        
        Möchtest Du ein vorgefertigtes Anschreiben verwenden, drücke den Button und Fülle die eckigen Klammern mit dem zutreffenden Inhalt aus.`}
        </p>
      </StyledArticle>

      <CopyToClipboard
        text="Sehr geehrte Damen und Herren. Hiermit widerrufe/n ich/wir den abgeschlossenen Vertrag über den Kauf folgender Waren/Einbringung
     folgender Dienstleistungen:[]. Bestellt am [] und erhalten am []. [Name und Anschrift des Verbrauchers] [Datum] [Unterschrift]."
        onCopy={() => alert("Anschreiben in die Zwischenablage kopiert!")}
      >
        <StyledKopierenButton>Anschreiben kopieren</StyledKopierenButton>
      </CopyToClipboard>

      <StyledLink href="/widerruf">
        <ZurueckButton />
      </StyledLink>
    </StyledBody>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledIcon = styled(Icon)`
  width: 40px;
  height: 50px;
  position: absolute;
  top: 7.5rem;
  right: 2rem;
`;

const StyledKopierenButton = styled.button`
  color: #572887;
  font-size: 1.2rem;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  background-color: #e6ceee;
  border-radius: 10px;
  border: 1px solid rgba(163, 134, 182, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 8vh;
  width: 40vw;
  position: relative;
  cursor: pointer;
`;

const StyledArticle = styled.article`
  text-align: justify;
  text-align-last: none;
  color: #572887;
  font-size: 1.2rem;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  padding: 15px;
  white-space: pre-line;
`;
