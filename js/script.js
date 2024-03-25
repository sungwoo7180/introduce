// console.log("connected");

const $circle = document.querySelector('section#circle');
const $article = $circle.querySelectorAll('article');
// multiple 한 객체를 받음

//article 안의 face 들에 대하여, 하나 하나 이벤트 리스너를 할당한다.
for(let $face of $article) {
    $face.addEventListener('mouseenter', ()=> {
        //console.log('mouse entered!');

        // 애니메이션을 준 대상은 .wrap 의 #circle 이다.
        $circle.setAttribute('style', 'animation-play-state:paused')
    })
    $face.addEventListener('mouseleave', ()=> {
        //console.log('mouse left!');
        $circle.setAttribute('style', 'animation-play-state:running')
    })
}