export function timeText(date?:string){
    if(!date) return;
    let d = new Date(date);
    return d.toLocaleTimeString("hu-HU", {hour: "2-digit", minute:"2-digit"});
}