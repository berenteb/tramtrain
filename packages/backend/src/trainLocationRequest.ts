import {LocatorApiHostname, MavApiPaths} from "./config/mav-api-paths";
import https from "https";
import {LocatorApiResponse} from "./types/LocatorTypes";

export default function (path: MavApiPaths, data: {Nyelv: string, UAID: string}){
    return new Promise<LocatorApiResponse>((resolve, reject)=>{
        const options = {
            method: "POST",
            hostname: LocatorApiHostname,
            path: path,
            headers:{
                "Content-Type": "application/json; charset=utf-8",
                "Language": "hu",
            }
        }

        const request = https.request(options, (res) => {
            if(res.statusCode !== 200)reject("Not 200 status!");
            let str = "";
            res.on('data', (d) => {
                str+=d;
            });

            res.on("end",()=>{
                if(res.statusCode !== 200) console.log(str);
                try{
                    let parsed: LocatorApiResponse = JSON.parse(str);
                    resolve(parsed);
                }catch (err){
                    reject("Parse error!");
                }
            })
        });
        request.on('error', (e) => {
            reject(e);
        });
        request.write(JSON.stringify(data))
        request.end();
    })
}