export enum ApiPaths {
  STOPS = "stops",
  TRAIN = "train",
  TRAIN_LOCATION = "train-location"
}

const host = process.env.REACT_APP_BACKEND_URL || "http://"+window.location.hostname+":3001/api"

function getUrl(...paths: string[]) {
  return paths.join("/");
}

export function makeApiCall<ResponseType>({path, id, timeout}:{path:string, id?: string, timeout?: number}) {
  const url = id ? getUrl(host, path, id) : getUrl(host, path);
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  };

  const requestPromise = new Promise((resolve: (value: ResponseType) => void, reject) => {
    fetch(url, {
      mode: "cors",
      method: "GET",
      headers: headers
    })
      .then(async (response) => {
        if (response.status === 200) return response.json();
        if(response.status === 400) reject("Érvénytelen lekérdezés!")
        if(response.status === 404) reject("Nem található!")
        else reject(await response.text());
      })
      .then((data) => {
        resolve(data);
      })
      .catch((e) => {
        reject(e);
      });
  });
  if(!timeout) return requestPromise;
  else return Promise.race<ResponseType>([requestPromise,new Promise<ResponseType>((_, reject) => setTimeout(() => reject("Időtúllépés a kérésnél!"), timeout))])
}
