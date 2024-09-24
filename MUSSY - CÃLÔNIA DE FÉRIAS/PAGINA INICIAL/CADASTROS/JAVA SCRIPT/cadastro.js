
function nextStep(step) {
    document.getElementById(`step${step}`).classList.add('hidden');
    document.getElementById(`step${step + 1}`).classList.remove('hidden');
}

function prevStep(step) {
    document.getElementById(`step${step}`).classList.add('hidden');
    document.getElementById(`step${step - 1}`).classList.remove('hidden');
}


document.getElementById('meuFormulario').addEventListener('submit',function(event) {
    event.preventDefault(); 
    
    document.querySelectorAll('.form-step').forEach(step => step.classList.add('hidden'));

    document.getElementById('confirmationMessage').style.display = 'block';
});


document.getElementById('meuFormulario').addEventListener('submit',function(event) {
            event.preventDefault(); 

            
            document.querySelectorAll('.form-step').forEach(step => step.classList.add('hidden'));

            
            document.getElementById('confirmationMessage').style.display = 'block';
       });

