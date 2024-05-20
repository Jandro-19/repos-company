document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('.key');
    const output = document.getElementById('output');

    keys.forEach(key => {
        key.addEventListener('click', () => {
            const keyValue = key.getAttribute('data-key');
            if (keyValue === 'BACKSPACE') {
                output.textContent = output.textContent.slice(0, -1);
            } else {
                output.textContent += keyValue;
            }

            // Agregar clase hover temporalmente
            key.classList.add('hover');
            setTimeout(() => {
                key.classList.remove('hover');
            }, 200);
        });
    });

    document.addEventListener('keydown', (e) => {
        const key = e.key.toUpperCase();
        if (e.key === 'Backspace') {
            output.textContent = output.textContent.slice(0, -1);
        } else {
            const virtualKey = document.querySelector(`.key[data-key="${key}"]`);
            if (virtualKey) {
                output.textContent += key;

                // Agregar clase hover temporalmente
                virtualKey.classList.add('hover');
                setTimeout(() => {
                    virtualKey.classList.remove('hover');
                }, 200);

                virtualKey.classList.add('active');
                setTimeout(() => {
                    virtualKey.classList.remove('active');
                }, 200);
            }
        }
    });
});
