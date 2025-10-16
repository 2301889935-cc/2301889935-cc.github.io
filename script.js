// 生成1-100的随机数（游戏答案）
let secretNumber = Math.floor(Math.random() * 100) + 1;
// 记录猜测次数
let guessCount = 0;

// 获取页面元素（输入框、结果提示、次数显示）
const guessInput = document.getElementById('guessInput');
const tipElement = document.getElementById('tip');
const countElement = document.getElementById('count');

// 核心函数：检查用户猜测
function checkGuess() {
    // 获取用户输入的数字（转为整数）
    const userGuess = parseInt(guessInput.value);
    
    // 验证输入是否有效（必须是1-100的数字）
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        tipElement.textContent = "请输入1-100之间的数字！";
        tipElement.style.color = "red"; // 错误提示红色
        return; // 输入无效，不继续执行
    }

    // 猜测次数+1
    guessCount++;
    countElement.textContent = guessCount; // 更新次数显示

    // 判断大小并提示
    if (userGuess > secretNumber) {
        tipElement.textContent = "猜大了！试试更小的数字~";
        tipElement.style.color = "#ff6347"; // 橙色提示
    } else if (userGuess < secretNumber) {
        tipElement.textContent = "猜小了！试试更大的数字~";
        tipElement.style.color = "#4169e1"; // 蓝色提示
    } else {
        // 猜对了！
        tipElement.textContent = `恭喜猜对了！答案就是${secretNumber}，共猜了${guessCount}次！🎉`;
        tipElement.style.color = "#4CAF50"; // 绿色提示
        guessInput.disabled = true; // 猜对后禁用输入框
    }

    // 清空输入框，方便下次输入
    guessInput.value = "";
}

// 重置游戏函数（重新开始）
function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1; // 新随机数
    guessCount = 0; // 次数重置
    countElement.textContent = guessCount;
    tipElement.textContent = "开始猜吧！";
    tipElement.style.color = "#333"; // 恢复默认颜色
    guessInput.disabled = false; // 启用输入框
}
