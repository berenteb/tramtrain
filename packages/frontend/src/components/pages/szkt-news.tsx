import {Page} from "../containers/page-containers";
import {useEffect, useState} from "react";
import {ApiPaths, makeApiCall} from "../../utils/api";
import {LoadingPage} from "../elements/loader";
import {ErrorPage} from "./error";
import {Title} from "../../utils/title";
import {NewsApiResponse} from "../types/NewsElement";
import {NewsField} from "../elements/news";

export function SzktNewsPage() {
  Title("SZKT közlemények");
  const [news, setNews] = useState<NewsApiResponse>()
  const [error, setError] = useState<string | undefined>();
  useEffect(()=>{
    makeApiCall<NewsApiResponse>({path:ApiPaths.SZKT_NEWS, timeout: 10000}).then(result=>{
      setNews(result);
    }).catch(e=>{
      setError(e.toString());
    });
  },[])
  if(error) return <ErrorPage text={error}/>
  if(!news) return <LoadingPage/>
  return <Page>
    <h1>SZKT közlemények</h1>
    {news.news.map(element=><NewsField data={element}/>)}
  </Page>
}
