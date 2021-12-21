import {Page} from "../containers/page-containers";
import {DocumentError} from "@styled-icons/fluentui-system-regular"
import {ButtonKinds, LinkButton} from "../elements/button";
import styled from "styled-components";
import {colors} from "../../theme/theme";

export function ErrorPage({text}:{text?:string}){
    return <Page>
        <Icon/>
        <h1>{text || "Hiba történt!"}</h1>
        <LinkButton to="/" kind={ButtonKinds.PRIMARY}>Főoldal</LinkButton>
    </Page>
}

const Icon = styled(DocumentError)`
  height: 200px;
  fill: ${colors.danger};
`