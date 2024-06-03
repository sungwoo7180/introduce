// console.log("connected");
let autoRotate = true;  // 자동 회전 활성화
let isDragging = false;
let startAngle = 0;
let currentAngle = 0;

const $circle = document.querySelector('section#circle');
const $article = $circle.querySelectorAll('article');
// multiple 한 객체를 받음

//article 안의 face 들에 대하여, 하나 하나 이벤트 리스너를 할당한다.
for(let $face of $article) {
    $face.addEventListener('mouseenter', ()=> {
        //console.log('mouse entered!');
        if (autoRotate) {
            // 애니메이션을 준 대상은 .wrap 의 #circle 이다.
            $circle.setAttribute('style', 'animation-play-state:paused')
        }
    });
    $face.addEventListener('mouseleave', ()=> {
        //console.log('mouse left!');
        if (autoRotate) {
            $circle.setAttribute('style', 'animation-play-state:running')
        }
    });
}

// 드래그 이벤트 핸들링
$circle.addEventListener('mousedown', function(e) {
    if (!autoRotate) {
        isDragging = true;
        startAngle = e.pageX - currentAngle;
    }
});
document.addEventListener('mousemove', function(e) {
    if (!autoRotate && isDragging) {
        currentAngle = e.pageX - startAngle;
        $circle.style.transform = 'rotateY(' + currentAngle + 'deg)';
    }
});
document.addEventListener('mouseup', function(e) {
    if (!autoRotate) {
        isDragging = false;
    }
});

// 토글 스위치를 추가하여 자동 회전과 수동 드래그를 전환
const toggleButton = document.getElementById('toggleButton');
toggleButton.textContent = '자동 회전으로 전환'; // 초기 텍스트 설정

toggleButton.addEventListener('click', function() {
    autoRotate = !autoRotate;
    toggleButton.textContent = autoRotate ? 'Switch to Manual Drag' : 'Switch to Auto Rotate';
    if (autoRotate) {
        $circle.style.animation = 'panorama-spin linear 10s infinite';
        $circle.style.transform = '';
    } else {
        $circle.style.animation = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // 모바일 크기를 정의합니다.
    const mobileSize = window.matchMedia("(max-width: 800px)");

    // 특정 요소의 텍스트를 변경하는 함수를 정의합니다.
    function changeTextForMobile(mq) {
        var textElement = document.querySelector('.wrap #circle article nav div .hobby');
        if (textElement) {
            if (mq.matches) {
                // 화면 크기가 480px 이하이면 텍스트를 변경합니다.
                textElement.textContent = 'HOBBY'; // 또는 'LOVE'로 변경
            } else {
                // 화면 크기가 480px 초과이면 원래 텍스트로 되돌립니다.
                textElement.textContent = 'What I Love';
            }
        }
    }

    // 미디어 쿼리에 이벤트 리스너를 추가하여 화면 크기에 따라 함수를 실행합니다.
    mobileSize.addListener(changeTextForMobile);
    changeTextForMobile(mobileSize); // 초기 로드 시 함수를 실행합니다.
});

// face2 기술 스택 JS
document.addEventListener('DOMContentLoaded', function() {
    let flipButtons = document.querySelectorAll('.flip-button');
    flipButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            let container = this.closest('.flip-container');
            container.classList.toggle('flip');
        });
    });
});