function updateAnimalFields() {
    const numGuests = parseInt(document.getElementById('num-guests').value);
    const animalFieldsContainer = document.getElementById('animal-fields-container');

    
    animalFieldsContainer.innerHTML = '';

    
    for (let i = 0; i < numGuests; i++) {
        // Container para o nome do animal e opções de tamanho
        const container = document.createElement('div');
        container.className = 'animal-fields';

        // Caixa de texto para o nome do animal
        const nameLabel = document.createElement('label');
        nameLabel.textContent = `Nome do animal ${i + 1}:`;
        container.appendChild(nameLabel);

        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.name = `animal-name-${i + 1}`;
        nameInput.placeholder = 'Digite o nome do animal';
        container.appendChild(nameInput);

        
        const sizeLabel = document.createElement('label');
        sizeLabel.textContent = 'Tamanho:';
        container.appendChild(sizeLabel);

        const sizes = ['Pequeno', 'Médio', 'Grande'];
        const sizeOptions = document.createElement('div');
        sizeOptions.className = 'size-options';

        sizes.forEach(size => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = `animal-size-${i + 1}`;
            checkbox.value = size;

            const sizeLabel = document.createElement('label');
            sizeLabel.textContent = size;
            sizeLabel.appendChild(checkbox);

            sizeOptions.appendChild(sizeLabel);
        });

        container.appendChild(sizeOptions);
        animalFieldsContainer.appendChild(container);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateAnimalFields();
});