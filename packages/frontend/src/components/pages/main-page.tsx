import {Page, PageAlignment} from "../containers/page-containers";
import {Widget, WidgetArea} from "../elements/widget";
import {Paths} from "../../utils/paths";
import {ReactComponent as StopIcon} from "../../assets/icons/stop-round-light.svg";
import {News} from "@styled-icons/fluentui-system-regular/News";
import styled from "styled-components";
import {colors} from "../../theme/theme";
import {P} from "../elements/basic";

export function MainPage() {
  return <Page $alignment={PageAlignment.TOP}>
    <h2>Tram-train információk</h2>
    <p>Hiteles forrásból, egyszerűen!</p>
    <WidgetArea>
      <Widget to={Paths.STOPS}>
        <StopIcon className="icon"/>
        <h2>Megállók</h2>
      </Widget>
      <Widget to={Paths.MAV_NEWS}>
        <IconWrapper className="icon">
          <News/>
        </IconWrapper>
        <h2>MÁV közlemények</h2>
      </Widget>
      <Widget to={Paths.SZKT_NEWS}>
        <IconWrapper className="icon">
          <News/>
        </IconWrapper>
        <h2>SZKT közlemények</h2>
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
  }
`
