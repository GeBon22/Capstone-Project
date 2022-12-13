import styled from "styled-components";
import Link from "next/link";
import {CopyToClipboard} from "react-copy-to-clipboard";
import Breadcrumb from "../../components/Breadcrumb";
import ReturnButton from "../../components/ReturnButton";
import Body from "../../components/Body";
import StyledIcon from "../../components/BookmarkIcon";
import CopyButton from "../../components/CopyButton";
import StyledArticle from "../../components/Article";

export default function WannWiderruf() {
  const path = "/Widerruf und Retoure/Was muss im Widerruf stehen?";
  return (
    <Body>
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
        <CopyButton>Anschreiben kopieren</CopyButton>
      </CopyToClipboard>

      <StyledLink href="/widerruf">
        <ReturnButton />
      </StyledLink>
    </Body>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;
