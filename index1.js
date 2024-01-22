//HTML DOM 事件處理練習
//Window：整個瀏覽器的功能
//Document：檔案上的標籤

//callback 回呼
window.addEventListener('load',function() //幫window新增載入完成的監聽器事件
{       
    const p1 = document.getElementById ('title') //透過id取得元素
    console.log(p1)
    p1.innerText = "text"

    const btn = document.getElementById ('btn1')
    btn.addEventListener('click', function ()    //監聽發生click事件
    {
        console.log("點擊")
    })    

    const box1 = document.getElementById ('box')
    box1.innerHTML = '<p>Test</p>'  //填入並取代box

    const input1 = document.getElementById ('input')
    input1.addEventListener('keyup', function (e)    //偵測按下鍵盤的動作
    {
        console.log("e.target.value", e.target.value)   //拿到輸入值
    })

})