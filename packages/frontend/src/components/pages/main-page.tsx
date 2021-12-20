import {Page} from "../containers/page-containers";
import {Widget, WidgetArea} from "../elements/widget";
import {Paths} from "../../utils/paths";
import {ReactComponent as StopIcon} from "../../assets/icons/stop-round-light.svg";

export function MainPage() {
  return <Page>
    <WidgetArea>
      <Widget to={Paths.STOPS}>
        <StopIcon/>
        <h2>Megállók</h2>
      </Widget>
    </WidgetArea>
  </Page>
}
