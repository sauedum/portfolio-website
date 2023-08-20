const slide1 = [1, 2, 3];
const slide2 = [4, 5, 6];
const slides = [slide1, slide2];

const convertSlides = arr => {
    let newSlide = [];
    let newIndex = 0;
    for (let i = 0; i < arr.length; i++ ) {
        for (let x = 0; x < arr[i].length; x++) {
            newSlide[newIndex] = arr[i][x];
            newIndex++
        }
    }
    return newSlide;
}


console.log(convertSlides(slides)[0]);
console.log(slides[0]);