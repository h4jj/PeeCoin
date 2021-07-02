// let screenPosition = window.innerHeight;

// let contentLineBottom = contentLine.getBoundingClientRect().bottom;
// let contentPositionTop = content.getBoundingClientRect().top;
// let contentPositionBottom = content.getBoundingClientRect().bottom;
// let svg = document.querySelector('.roadmap-svg');
// console.log(contentPositionBottom);
// console.log(contentPositionTop);
// console.log(window.pageYOffset);
// console.log(contentLineBottom);


let element = document.querySelector('.roadmap-line.tablet');
let height = element.getBoundingClientRect().height;
let roadmapContainer = document.querySelector('.roadmap-main-container.tablet');
let svg = document.querySelector('.roadmap-svg');
svg.style.top = "1px";
let svgMobile = document.querySelector('.roadmap-svg.mobile');
let roadmapInnerLine = document.querySelector('.roadmap-line-inner');

let roadmapActiveOne = document.querySelector('.roadmap-container-one');
let roadmapActiveTwo = document.querySelector('.roadmap-container-two');
let roadmapActiveThree = document.querySelector('.roadmap-container-three');
let roadmapActiveFour = document.querySelector('.roadmap-container-four');



window.addEventListener('scroll', () => {
    let roadmapContainerHeight = roadmapContainer.getBoundingClientRect().top;
    if (roadmapContainerHeight < 0 && Math.abs(parseInt(svg.style.top)) <= Math.abs(height + 200)) {

        if (parseInt(svg.style.top) >= height * 0.08) {
            roadmapActiveOne.classList.add("active");
        }
        else {
            roadmapActiveOne.classList.remove("active");
        }

        if (parseInt(svg.style.top) >= height * 0.30) {
            roadmapActiveTwo.classList.add("active");
        }
        else {
            roadmapActiveTwo.classList.remove("active");
        }

        if (parseInt(svg.style.top) >= height * 0.6) {
            roadmapActiveThree.classList.add("active");
        }
        else {
            roadmapActiveThree.classList.remove("active");
        }

        if (parseInt(svg.style.top) >= height * 0.9) {
            roadmapActiveFour.classList.add("active");
        }
        else {
            roadmapActiveFour.classList.remove("active");
        }

        svg.style.top = Math.abs(roadmapContainerHeight) + 'px';
        roadmapInnerLine.style.height = Math.abs(roadmapContainerHeight) + 'px';
    }
})


