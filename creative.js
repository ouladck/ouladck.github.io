document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.getElementById('typewriter');
    const text = "I build modern, fast, and reliable web experiences. I turn complex problems into simple, beautiful, and intuitive designs. I am a code craftsman, a digital architect, and a problem solver.";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typewriterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();
});
