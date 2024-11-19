//페이지 넘어가는 거
function nextIntro(introNumber) {
    document.querySelectorAll('.section').forEach(section => section.style.display = 'none');
    document.getElementById('intro' + introNumber).style.display = 'block';
}

//노래 플레이
const toggleButton = document.getElementById('bgmButton');
const audioPlayer = document.getElementById('audioPlayer');
let isPlaying = false;
toggleButton.addEventListener('click', () => {
  if (isPlaying) {
    // 음악 정지 및 이미지 변경
    audioPlayer.pause();
    toggleButton.src = "icon/bgm2.png";  // 정지-이미지 변경
    isPlaying = false;
  } else {     // 음악 재생 및 이미지 변경
    if (audioPlayer.paused && audioPlayer.currentTime === 0) {      // 처음 재생하는 경우
      audioPlayer.play();
    } else {    //이어서
      audioPlayer.play();
    }
    toggleButton.src = "icon/bgm1.png";  // 재생-이미지 변경
    isPlaying = true;
  }
});

//타이틀 단어 랜덤
const texts = ["슈붕", "호떡", "팥붕", "물떡", "어묵", "간식"];
const animatedText = document.getElementById('anitext');

function changeText() {
  const randomIndex = Math.floor(Math.random() * texts.length); // 랜덤 인덱스 생성
  const newText = texts[randomIndex]; // 랜덤 텍스트 선택
  


  setTimeout(() => {
    // 텍스트 변경 후 애니메이션을 다시 추가
    animatedText.textContent = newText;
    animatedText.classList.remove('hidden');
  }, 500); // 애니메이션 지속 시간 (0.5초 후 텍스트 변경)
}

// 일정 시간 간격으로 텍스트 변경
setInterval(changeText, 500); 


