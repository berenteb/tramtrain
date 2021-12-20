export enum ApiPaths {
  STOPS = "stops",
  TRAIN = "train",
  TRAIN_LOCATION = "train-location"
}

const host = "http://" + window.location.hostname + ":3001";

function getUrl(...paths: string[]) {
  return paths.join("/");
}

export function makeApiCall<ResponseType>({path, id}:{path:string, id?: string}) {
  const url = id ? getUrl(host, path, id) : getUrl(host, path);
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  };
  return new Promise((resolve: (value: ResponseType) => void, reject) => {
    fetch(url, {
      mode: "cors",
      method: "GET",
      headers: headers
    })
      .then(async (response) => {
        if (response.status === 200) return response.json();
        reject(await response.text());
      })
      .then((data) => {
        resolve(data);
      })
      .catch((e) => {
        reject(e);
      });
  });
}
