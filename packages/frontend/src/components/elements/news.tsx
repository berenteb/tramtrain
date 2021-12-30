import {NewsElement} from "../types/NewsElement";
import styled from "styled-components";
import {colors, spacing} from "../../theme/theme";

export function NewsField({data}:{data:NewsElement}){
    return <NewsFieldWrapper>
        <h3>{data.title}</h3>
        <p>{data.text}</p>
        <a target="_blank" rel="noreferrer" href={data.link}>További információ</a>
        <HR/>
    </NewsFieldWrapper>
}

const NewsFieldWrapper = styled.div`
    margin: ${spacing.md} ${spacing.sm};
  max-width: 600px;
  p{
    text-align: justify;
  }
`

const HR = styled.hr`
  -webkit-appearance: none;
  border: none;
  height: 5px;
  background-color: ${colors.primary};
  width: 100%;
  border-radius: 300px;
`