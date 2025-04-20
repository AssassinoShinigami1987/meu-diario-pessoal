document.addEventListener('DOMContentLoaded', () => {
    // Efeito de digitação para textos
    const typingElements = document.querySelectorAll('.typing');
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        typeWriter();
    });

    // Efeito de glitch aleatório
    setInterval(() => {
        const glitchElements = document.querySelectorAll('.glitch-text');
        glitchElements.forEach(element => {
            if (Math.random() > 0.95) {
                element.style.textShadow = `
                    ${Math.random() * 10}px ${Math.random() * 10}px ${Math.random() * 10}px rgba(255,0,0,0.7),
                    ${Math.random() * -10}px ${Math.random() * -10}px ${Math.random() * 10}px rgba(0,0,255,0.7)
                `;
                setTimeout(() => {
                    element.style.textShadow = '';
                }, 100);
            }
        });
    }, 50);

    // Som de digitação (opcional)
    const typingSound = new Audio('assets/typing.mp3');
    typingSound.volume = 0.1;

    document.addEventListener('keypress', () => {
        typingSound.currentTime = 0;
        typingSound.play().catch(() => {}); // Ignora erros de autoplay
    });

    // Embaralhar texto "ENIGMA"
    const enigmaLinks = document.querySelectorAll('.enigma-link');
    enigmaLinks.forEach(link => {
        const originalText = link.textContent;
        const scrambledText = document.createElement('div');
        scrambledText.className = 'scrambled-text';
        
        // Extrair o número do enigma
        const match = originalText.match(/\[ENIGMA_(\d+)\]/);
        if (match) {
            const number = match[1];
            
            // Criar spans para cada letra de "ENIGMA"
            const letters = ['E', 'N', 'I', 'G', 'M', 'A'];
            letters.forEach(letter => {
                const span = document.createElement('span');
                span.textContent = letter;
                scrambledText.appendChild(span);
            });
            
            // Adicionar o número do enigma
            scrambledText.innerHTML += `_${number}]`;
            
            // Substituir o texto original
            link.textContent = '';
            link.appendChild(scrambledText);
            
            // Adicionar o texto original como atributo data para o efeito hover
            link.setAttribute('data-text', originalText);
        }
    });

    // Efeito de transição entre páginas
    const pageLinks = document.querySelectorAll('a[href]');
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Ignorar links externos ou âncoras
            if (this.hostname !== window.location.hostname || this.hash) {
                return;
            }
            
            e.preventDefault();
            
            // Criar elemento de transição
            const transition = document.createElement('div');
            transition.className = 'page-transition';
            document.body.appendChild(transition);
            
            // Ativar a animação
            setTimeout(() => {
                transition.classList.add('active');
            }, 10);
            
            // Redirecionar após a animação
            setTimeout(() => {
                window.location.href = this.href;
            }, 500);
        });
    });
}); 