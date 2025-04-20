// Função para embaralhar texto
function shuffleText(text) {
    const chars = text.split('');
    for (let i = chars.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [chars[i], chars[j]] = [chars[j], chars[i]];
    }
    return chars.join('');
}

// Função para criar efeito de embaralhamento
function scrambleEffect(element) {
    const originalText = element.textContent;
    let iterations = 0;
    const maxIterations = 10;
    
    const interval = setInterval(() => {
        element.textContent = shuffleText(originalText);
        iterations++;
        
        if (iterations >= maxIterations) {
            clearInterval(interval);
            element.textContent = originalText;
        }
    }, 50);
}

// Adicionar efeito de embaralhamento aos links
document.querySelectorAll('.enigma-link').forEach(link => {
    const text = link.textContent;
    link.innerHTML = `<span>${text}</span>`;
    
    link.addEventListener('mouseenter', () => {
        const span = link.querySelector('span');
        scrambleEffect(span);
    });
}); 