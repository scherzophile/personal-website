window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    // rotate angle from 0 to 360 degrees
    const angle = scrollPercent * 360;

    // update background gradient with original colors
    document.querySelector(".fixed-bg").style.background = `linear-gradient(${angle}deg, rgba(0, 0, 77, 1), rgba(0, 61, 23, 1))`;
});