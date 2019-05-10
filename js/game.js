window.onload = function () {
    // 當前玩家
    var currentPalyer = 1;
    var palyer1Tscore = 0;
    var palyer2Tscore = 0;
    var counter = 1;
    var isPlaying = true;

    // DOM
    // 純文本修改
    //document.querySelector('#player1-current-score').textContent = dice;
    //document.querySelector('#player' + currentPalyer + '-current-score').textContent = dice;

    //document.querySelector('#player' + currentPalyer + '-current-score').textContent 

    document.querySelector('.dice').style.visibility = 'hidden';
    document.querySelector('.winner1').style.visibility = 'hidden';
    document.querySelector('.winner2').style.visibility = 'hidden';

    // event 監聽
    document.querySelector('.roll').addEventListener('click', function () {

        if (isPlaying) {
            // 隨機獲得 1~6的數
            var dice = Math.floor(Math.random() * 6) + 1;
            console.log(dice);
            document.querySelector('.dice').style.visibility = 'visible';
            // 將圖片編號賦值給dice 使隨機數與骰子點數相同
            document.querySelector('.dice').src = "./img/Image" + dice + ".png";

            if (currentPalyer === 1) {

                document.getElementById('player' + currentPalyer + '-current-score').textContent = dice;

                // 分數加總
                palyer1Tscore += dice;
                document.getElementById('player' + currentPalyer + '-total-score').textContent = palyer1Tscore;

                // 切換狀態
                // 移除相應列表
                document.querySelector('.pannel-' + currentPalyer).classList.remove('active');
                currentPalyer = 2;
                //// 添加相應列表
                document.querySelector('.pannel-' + currentPalyer).classList.add('active');
                document.getElementById('player' + currentPalyer + '-current-score').textContent = 0;
            } else {
                document.getElementById('player' + currentPalyer + '-current-score').textContent = dice;

                // 分數加總
                palyer2Tscore += dice;
                document.getElementById('player' + currentPalyer + '-total-score').textContent = palyer2Tscore;

                // 切換狀態
                document.querySelector('.pannel-' + currentPalyer).classList.remove('active');
                currentPalyer = 1;
                document.querySelector('.pannel-' + currentPalyer).classList.add('active');
                document.getElementById('player' + currentPalyer + '-current-score').textContent = 0;
            }

            counter++;
            // console.log(counter);
            if (counter === 7) {

                if (palyer1Tscore > palyer2Tscore) {
                    document.querySelector('.winner1').style.visibility = 'visible';
                    document.getElementById('player1-current-score').style = "margin-top: 0 px";
                } else if (palyer1Tscore < palyer2Tscore) {
                    document.querySelector('.winner2').style.visibility = 'visible';
                    document.getElementById('player2-current-score').style = "margin-top: 0 px";
                } else {
                    document.querySelector('.roll').textContent = '平手';
                }
                isPlaying = false;
            }
        } else {
            init();
            isPlaying = true;
        }
        document.querySelector('.newGame').addEventListener('click', function () {
            init();
            isPlaying = true;
        })
    });

    function init() {
        // 初始化
        counter = 1;
        currentPalyer = 1;
        palyer1Tscore = 0;
        palyer2Tscore = 0;
        
        document.querySelector('.dice').style.visibility = 'hidden';
        document.querySelector('.winner1').style.visibility = 'hidden';
        document.querySelector('.winner2').style.visibility = 'hidden';
        document.getElementById('player1-current-score').textContent = 0;
        document.getElementById('player2-current-score').textContent = 0;
        document.getElementById('player1-total-score').textContent = 0;
        document.getElementById('player2-total-score').textContent = 0;

        document.querySelector('.pannel-1').classList.add('active');
        document.querySelector('.pannel-2').classList.remove('active');

        document.querySelector('.roll').textContent = '擲骰子';
    }
}

