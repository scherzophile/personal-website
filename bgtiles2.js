window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    // rotate angle from 0 to 360 degrees
    const angle = scrollPercent * 360;

    // update background gradient with original colors
    document.querySelector(".fixed-bg").style.background = `linear-gradient(${angle}deg, rgb(85, 0, 0), rgb(172, 149, 0))`;
});