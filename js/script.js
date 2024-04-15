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