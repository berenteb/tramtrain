import {NewsElement} from "../types/NewsElement";
import Parser from "rss-parser";

export function getMavNews(){
    return new Promise<NewsElement[]>((resolve, reject)=>{
        let parsed_feed: NewsElement[] = [];
        let parser = new Parser();
        parser.parseURL("https://www.mavcsoport.hu/mavinform/rss.xml").then(feed=>{
            feed.items.forEach(element=>{
                let field:NewsElement = {
                    title: element.title,
                    text: element.content,
                    link: element.link
                }
                parsed_feed.push(field);
            })
            resolve(parsed_feed);
        }).catch(()=>{
            reject("Nem sikerült a hírfolyam lekérdezése (MÁV).")
        })
    })
}