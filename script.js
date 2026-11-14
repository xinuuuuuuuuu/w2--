const quizData = [
    {
        q: "1. 在網頁三層架構中，CSS 主要是負責哪一部分的工作？",
        options: [
            "(A) 負責網頁的內容與結構（只管「有什麼」）",
            "(B) 負責網頁的視覺外觀與樣式，如顏色、圓角與漸層（只管「長怎樣」）",
            "(C) 負責按鈕點擊後的抽籤或累加分數等動態互動（只管「會做什麼」）",
            "(D) 負責提供網頁給瀏覽器讀取的文字編碼設定"
        ],
        answer: 1,
        explanation: "解析：網頁三層架構中，CSS 就像「衣服」，專門負責樣式、色彩與視覺效果（只管「長怎樣」）。HTML 才是負責內容骨架，JavaScript 負責互動動作。"
    },
    {
        q: "2. 關於 HTML 檔案與圖片的命名規矩，下列哪一個檔名寫法放上網路最容易導致「破圖」或找不到檔案？",
        options: [
            "(A) index.html",
            "(B) about.html",
            "(C) my photo.JPG",
            "(D) my-photo.jpg"
        ],
        answer: 2,
        explanation: "解析：檔名必須遵循三大規矩：全部英文小寫、不要有空格、副檔名為 .html 或對應圖片副檔名。「my photo.JPG」包含空格與大寫副檔名，在個人電腦或許能讀取，但放上伺服器後極易造成連線破圖。"
    },
    {
        q: "3. 在 VS Code 中寫 HTML 時，若想快速將某一行程式碼改為瀏覽器會自動忽略的「註解」，可以使用哪個快捷鍵？",
        options: [
            "(A) Shift + /",
            "(B) Ctrl + /（Mac 為 Cmd + /）",
            "(C) Alt + /",
            "(D) Tab + /"
        ],
        answer: 1,
        explanation: "解析：HTML 的註解格式為 <!-- -->，寫在裡面的文字瀏覽器會完全忽略。在 VS Code 中可以按 Ctrl + / 快速切換註解語法。"
    },
    {
        q: "4. 下列有關 HTML 屬性與標籤的撰寫格式，哪一個是正確的寫法？",
        options: [
            "(A) &lt;img src=“me.jpg”&gt;",
            "(B) &lt;img src=\"me.jpg\" alt=\"我的照片\"&gt;",
            "(C) &lt;img src=\"me.jpg\"alt=\"我的照片\"&gt;",
            "(D) &lt;img src='me.jpg' alt=我的照片&gt;"
        ],
        answer: 1,
        explanation: "解析：寫 HTML 屬性時，屬性值一律必須使用半形雙引號 \"\"（不可用全形引號 “”），且不同屬性之間必須用「空白」隔開。"
    },
    {
        q: "5. 關於 HTML 中的 &lt;br&gt; 與 &lt;hr&gt; 標籤，下列敘述何者正確？",
        options: [
            "(A) &lt;br&gt; 是水平分隔線，&lt;hr&gt; 是強制換行",
            "(B) 兩者皆為不需要結束標籤的「空元素」",
            "(C) 在 HTML 程式碼中按下 Enter 鍵，畫面上就會自動產生與 &lt;br&gt; 一樣的換行效果",
            "(D) 兩者都必須寫在 &lt;head&gt; 區塊內"
        ],
        answer: 1,
        explanation: "解析：<br>（強制換行）與 <hr>（水平分隔線）都沒有文字內容，因此不需要結束標籤，屬於「空元素」。此外，在程式碼中直接按 Enter 鍵並不會在實際畫面上換行。"
    },
    {
        q: "6. 在 Chrome 或 Edge 瀏覽器中，按下哪個按鍵可以打開「開發者工具」（DevTools），進而檢視或臨時修改網頁上的 HTML 內容？",
        options: [
            "(A) F5",
            "(B) F12",
            "(C) Esc",
            "(D) Tab"
        ],
        answer: 1,
        explanation: "解析：按下 F12（Mac 為 Cmd + Option + I）可開啟瀏覽器的開發者工具，點選元素後即可檢視或雙擊修改 HTML 文字。"
    },
    {
        q: "7. 請 AI 幫忙寫 HTML 時，來源建議的「提示詞公式」包含四個零件，下列何者「不屬於」這四個零件之一？",
        options: [
            "(A) 角色背景",
            "(B) 任務",
            "(C) 限制",
            "(D) 視覺顏色指定"
        ],
        answer: 3,
        explanation: "解析：來源說明的提示詞公式四要素為：角色背景 + 任務 + 限制 + 輸出格式。明確給出這四個零件能避免 AI 回答出超出當前學習進度的語法。"
    },
    {
        q: "8. 初學者請 AI 協助寫 HTML 時，下列何者屬於講義提到的「本週 AI 常見陷阱」？",
        options: [
            "(A) AI 自動幫忙加上了 &lt;title&gt; 標籤",
            "(B) AI 偷渡了沒學過的 style 屬性或 &lt;div&gt; 標籤",
            "(C) AI 寫出了 &lt;h1&gt; 到 &lt;h6&gt; 的標題",
            "(D) AI 使用了 &lt;p&gt; 標籤包覆段落"
        ],
        answer: 1,
        explanation: "解析：AI 常見陷阱包含偷渡沒學過的標籤（如 div、ul/li、span）或 style 屬性。其中 style 屬於 CSS 範疇，會破壞 HTML 專心管理結構的原則。"
    },
    {
        q: "9. 關於 HTML 的 &lt;strong&gt; 與 &lt;em&gt; 語意標籤，下列敘述何者正確？",
        options: [
                    "(A) &lt;strong&gt; 常用於表示重要資訊（預設粗體），&lt;em&gt; 用於表示強調（預設斜體）",
            "(B) &lt;strong&gt; 只能用在標題 &lt;h1~h6&gt; 裡面",
            "(C) &lt;em&gt; 會強制將字體顏色變成紅字",
            "(D) 兩者都是空元素，不能包覆任何文字"
        ],
        answer: 0,
        explanation: "解析：<strong> 用於表示重要資訊（預設呈現粗體），<em> 用於表示強調（預設呈現斜體），螢幕閱讀器讀到這兩個標籤時會加重語氣。"
    },
    {
        q: "10. 搭配 Live Server 開發網頁時，在 VS Code 裡面開啟哪一項設定，可以讓你打字存檔的同時，瀏覽器畫面自動更新？",
        options: [
            "(A) 「自動編譯」",
            "(B) 「自動儲存」（Auto Save）",
            "(C) 「自動排版」",
            "(D) 「自動除錯」"
        ],
        answer: 1,
        explanation: "解析：勾選 VS Code 的「檔案 → 自動儲存」後，配合 Live Server，修改完程式碼就能讓瀏覽器自動重新整理即時顯示成果。"
    }
];

let answeredCount = 0;
let score = 0;

function renderQuiz() {
    answeredCount = 0;
    score = 0;
    const container = document.getElementById('quiz-form');
    let html = '';
    
    quizData.forEach((item, qIndex) => {
        html += `<div class="question" id="q-block-${qIndex}">
            <p>${item.q}</p>
            <div class="options" id="options-${qIndex}">`;
        
        item.options.forEach((opt, oIndex) => {
            html += `<label id="label-${qIndex}-${oIndex}">
                <input type="radio" name="q${qIndex}" value="${oIndex}" onclick="selectAnswer(${qIndex}, ${oIndex})"> ${opt}
            </label>`;
        });

        html += `</div>
            <div class="feedback" id="feedback-${qIndex}"></div>
            <div class="explanation" id="explanation-${qIndex}">${item.explanation}</div>
        </div>`;
    });

    container.innerHTML = html;
    document.getElementById('result-display').innerText = '';
}

// 點選選項時立即檢查對錯並顯示詳解
function selectAnswer(qIndex, selectedOpt) {
    const item = quizData[qIndex];
    const feedbackEl = document.getElementById(`feedback-${qIndex}`);
    const explanationEl = document.getElementById(`explanation-${qIndex}`);
    const radios = document.querySelectorAll(`input[name="q${qIndex}"]`);
    
    // 鎖定該題所有選項，避免重複點選
    radios.forEach(r => r.disabled = true);

    // 判斷對錯並上色
    if (selectedOpt === item.answer) {
        document.getElementById(`label-${qIndex}-${selectedOpt}`).classList.add('correct-ans');
        feedbackEl.innerHTML = "✔ 答對了！";
        feedbackEl.className = "feedback correct";
        score += 10;
    } else {
        document.getElementById(`label-${qIndex}-${selectedOpt}`).classList.add('wrong-ans');
        document.getElementById(`label-${qIndex}-${item.answer}`).classList.add('correct-ans');
        feedbackEl.innerHTML = `✖ 答錯了！正確答案是：${item.options[item.answer]}`;
        feedbackEl.className = "feedback incorrect";
    }

    // 顯示該題的詳細解析
    explanationEl.style.display = "block";

    answeredCount++;

    // 當 10 題全部答完時，顯示總成績
    if (answeredCount === quizData.length) {
        document.getElementById('result-display').innerText = `🎉 恭喜完成測驗！你的總分是：${score} 分（滿分 100 分）`;
    }
}

function resetQuiz() {
    renderQuiz();
}

// 初始化執行
renderQuiz();