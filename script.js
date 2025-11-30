document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.getElementById('typewriter');
    const neofetchElements = document.querySelectorAll('.neofetch-output, .terminal-line.hidden');
    const text = "I build modern, fast, and reliable web experiences. I turn complex problems into simple, beautiful, and intuitive designs. I am a code craftsman, a digital architect, and a problem solver.";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typewriterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            neofetchElements.forEach(el => el.classList.remove('hidden'));
        }
    }

    typeWriter();
});
