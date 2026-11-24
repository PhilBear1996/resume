console.log("main.js 有載入");
document.getElementById("year").textContent = new Date().getFullYear()+"年";

//差別練習1
/*const now = new Date();
const formatted = now.toLocaleString("zh-TW", {
    year: "numeric", month: "numeric", day: "numeric",
    hour: "numeric", minute: "2-digit", second: "2-digit",
    hour12: true
});
document.getElementById("OpenedTime").textContent = formatted;

//差別練習2
const now2  = new Date();
document.getElementById("OpenedTime2").textContent =
  now2.toLocaleString("zh-TW", { hour12: true, timeZone: "Asia/Taipei" });*/
  
//差別練習3
const now3 = new Date();
document.getElementById("OpenedTime3").textContent = now3.toLocaleString("zh-TW",{
    year: "numeric", month: "numeric", day: "numeric",
    hour: "numeric", minute: "2-digit", second: "2-digit",
    hour12: true    
});
