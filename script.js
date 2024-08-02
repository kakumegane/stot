document.getElementById('more-info-btn').addEventListener('click', function() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    startLoading();
});

function startLoading() {
    const loadingTexts = [
        "Wi-Fiに接続中",
        "Wi-Fiの詳細確認中",
        "IPアドレス取得中",
        "メールアドレス送信中",
        "パスワード送信中"
    ];
    let index = 0;
    const progressBar = document.getElementById('progress');
    const loadingText = document.getElementById('loading-text');
    const interval = setInterval(() => {
        if (index < loadingTexts.length) {
            loadingText.textContent = loadingTexts[index];
            progressBar.style.width = ((index + 1) / loadingTexts.length) * 100 + '%';
            index++;
        } else {
            clearInterval(interval);
            document.getElementById('loading').style.display = 'none';
            document.getElementById('billing').style.display = 'block';
            startCountdown();
        }
    }, 1000);
}

function startCountdown() {
    let timeLeft = 60;
    const countdown = document.getElementById('countdown');
    const interval = setInterval(() => {
        if (timeLeft > 0) {
            countdown.textContent = `残り時間: ${timeLeft}秒`;
            timeLeft--;
        } else {
            clearInterval(interval);
            countdown.textContent = "時間切れ";
        }
    }, 1000);
}

document.getElementById('confirm-btn').addEventListener('click', function() {
    document.getElementById('billing').style.display = 'none';
    document.getElementById('virus-warning').style.display = 'block';
    startVirusProgress();
    showVirusAlerts();
});

document.getElementById('check-virus-btn').addEventListener('click', function() {
    document.getElementById('virus-warning').style.display = 'none';
    document.getElementById('virus-install').style.display = 'block';
});

document.getElementById('install-btn').addEventListener('click', function() {
    document.getElementById('install-progress-bar').style.display = 'block';
    startInstall();
});

function startVirusProgress() {
    const progressBar = document.getElementById('virus-progress');
    let width = 0;
    const interval = setInterval(() => {
        if (width < 100) {
            width++;
            progressBar.style.width = width + '%';
        } else {
            clearInterval(interval);
        }
    }, 100);
}

function startInstall() {
    const progressBar = document.getElementById('install-progress');
    let width = 0;
    const interval = setInterval(() => {
        if (width < 100) {
            width++;
            progressBar.style.width = width + '%';
        } else {
            clearInterval(interval);
            window.location.href = 'https://www.google.com';
        }
    }, 100);
}

function showVirusAlerts() {
    for (let i = 0; i < 30; i++) {
        alert("ウイルスが検出されました。");
    }
}
