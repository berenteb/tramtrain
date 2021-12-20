import styled from "styled-components";
import {
  animations,
  borderRadius,
  boxShadows, colors,
  margins,
  spacing,
} from "../../theme/theme";
import { ReactNode } from "react";
import {useNavigate} from "react-router";

const ButtonBaseStyle = styled.button`
  appearance: none;
  cursor: pointer;
  text-decoration: none;
  border: none;
  font-size: large;
  > * {
    height: 30px;
  }
  border-radius: ${borderRadius.sm};
`;

export enum ButtonKinds{
  TINTED = "tinted",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  PLAIN = "plain"
}

export const Button = styled(ButtonBaseStyle)<{kind?: ButtonKinds}>`
  padding: ${spacing.md} ${spacing.lg};
  box-shadow: ${boxShadows.md};
  -webkit-box-shadow: ${boxShadows.md};
  -moz-box-shadow: ${boxShadows.md};
  ${({kind})=>{switch (kind){
    case ButtonKinds.TINTED:
      return `background-color: ${colors.primaryTranslucent}; color: ${colors.primary};`;
    case ButtonKinds.PRIMARY:
      return `background-color: ${colors.primary}; color: white;`;
    case ButtonKinds.SECONDARY:
      return `background-color: white; color: ${colors.primary}; border: 2px solid ${colors.primary};`;
    default:
      return `background-color: white; color: black;`;
  }}};
  ${animations.scale}
  margin:${margins.xs};
`;

export function LinkButton({
  to,
  children,
    kind,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
  kind?: ButtonKinds;
}) {
  const navigate = useNavigate();
  return (
    <Button
        kind={kind}
      className={className}
      onClick={() => {
        navigate(to);
      }}
    >
      {children}
    </Button>
  );
}

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: ${margins.sm} 0;
  width: 100%;
`;
