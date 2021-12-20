import {ApiHostname, MavApiPaths} from "./config/mav-api-paths";
import https from "https";
import {MavApiResponse} from "./types/MavApiResponse";

export default function<InputType> (path: MavApiPaths, data: InputType){
    return new Promise<MavApiResponse>((resolve, reject)=>{
        console.log(data)
        const options = {
            method: "POST",
            hostname: ApiHostname,
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
                    let parsed: MavApiResponse = JSON.parse(str);
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