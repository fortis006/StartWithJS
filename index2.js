const content = document.getElementById('content')  //取得記事內容
const date = document.getElementById('date')  //取得日期內容
const time = document.getElementById('time')  //取得時間內容
const addedBtn = document.getElementById('addedBtn')  
const deletedBtn = document.getElementById('deletedBtn')  

const ListContent = []

addedBtn.addEventListener('click', function () //幫新增按鈕增加監聽器事件
{
    console.log(content.value)
    console.log(date.value)
    console.log(time.value)
    ListContent.push({      //新增物件至陣列
        content: content.value,
        date: date.value,
        time: time.value
    })

    let htmlstr = ''

    ListContent.forEach(function (item) {     //item：陣列中的每個項目
        htmlstr = htmlst + `
        <div class="item">
        <div>
          <p>內容：${item.content}</p>
          <p>時間：${item.date} ${item.time}</p>
        </div>
      </div>
      `
    })

    list.innerHTML = htmlstr
})  