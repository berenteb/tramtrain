import express from "express";
export default function apiMW(allowEmpty?: boolean) {
  return async function (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    console.log("\n" + req.originalUrl);
    if(process.env.DEBUG==="true")console.log(res.locals.payload);
    if (!res.locals.payload && !allowEmpty) return next("Nem található adat!");
    console.log("OK")
    res.send(res.locals.payload);
  };
}
