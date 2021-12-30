import * as cheerio from "cheerio";
import {request} from "https";
import {NewsElement} from "../types/NewsElement";

const host = "szkt.hu"
export function getSzktNews() {
    return new Promise<NewsElement[]>((resolve, reject) => {
        const req = request({ hostname: host, path: "/hirek" }, (response) => {
            let str = "";
            response.on('data', (chunk) => {
                str += chunk;
            });
            response.on('end', () => {
                try {
                    let parsed_feed: NewsElement[] = [];
                    const $ = cheerio.load(str);
                    const data = $('div.upnews');
                   $(data).each((index, element) => {
                        let field:NewsElement = {
                            title: $(element).find("span.title").text(),
                            text: $(element).find("span.con").text(),
                            link: $(element).find("a.more").attr("href")
                        }
                        parsed_feed.push(field);
                    })
                    resolve(parsed_feed);
                } catch (error) {
                    reject("Nem sikerült a hírfolyamot összeállítani (SZKT).");
                }
            });
        });
        req.on('error', () => {
            reject("Nem sikerült a hírfolyam lekérdezése (SZKT).")
        })
        req.end();
    })
}