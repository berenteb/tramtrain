import {Page, PageAlignment} from "../containers/page-containers";
import {Widget, WidgetArea} from "../elements/widget";
import {Paths} from "../../utils/paths";
import {ReactComponent as StopIcon} from "../../assets/icons/stop-without-background.svg";
import {News} from "@styled-icons/fluentui-system-regular/News";
import styled from "styled-components";
import {colors} from "../../theme/theme";
import {P} from "../elements/basic";

export function MainPage() {
  return <Page $alignment={PageAlignment.TOP}>
    <h1>Tram-train információk</h1>
    <WidgetArea>
      <Widget to={Paths.STOPS}>
        <IconWrapper className="icon">
          <StopIcon/>
        </IconWrapper>
        <p>Megállók</p>
      </Widget>
      <Widget to={Paths.MAV_NEWS}>
        <IconWrapper className="icon">
          <News/>
        </IconWrapper>
        <p>MÁV közlemények</p>
      </Widget>
      <Widget to={Paths.SZKT_NEWS}>
        <IconWrapper className="icon">
          <News/>
        </IconWrapper>
        <p>SZKT közlemények</p>
      </Widget>
    </WidgetArea>
    <h2>A projektről</h2>
    <P>
      A projekt célja, hogy a fellelhető információkat egy helyen gyűjtse össze, ezzel megkönnyítve a Szeged és Hódmezővásárhely
      vonalon közlekedő utasok életét.
    </P>
    <P>
      A weboldal, mely webalkalmazásként is elérhető, számos forrásból merít adatokat. Így például a MÁV modern felületéről szerez adatokat,
      mely a késésekről is küld információt (olykor). Merít továbbá a MÁV vonatkövető rendszeréből is, így a járműveket (igaz szaggatottan)
      is lehet követni a térképen. Néhány információ sajnos nem volt elérhető ilyen formában, ezek kézileg lettek megírva (ezekért felelősséget nem vállalok).
    </P>
    <P>
      A közlemények is a hivatalos weboldalakról származnak. Ezeket kísérleti jelleggel próbálja szűrni a rendszer, ez nem jelent teljeskörű tájékoztatást.
    </P>
    <P>
      Szakmabelieknek itt a projekt tárolójának linkje: <a target="_blank" rel="noreferrer" href="https://github.com/berenteb/tramtrain">Tramtrain</a>
    </P>
  </Page>
}

const IconWrapper = styled.div`
   background-color: ${colors.primaryTranslucent};
  border-radius: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg{
    height: 60px;
    stroke: ${colors.primary};
    stroke-width: .1px;
    .a{
      opacity: 1;
    }
  }
`
