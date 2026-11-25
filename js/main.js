  document.getElementById('form-reserva').addEventListener('submit', function(e){
    e.preventDefault();
    if(!this.checkValidity()){ this.classList.add('was-validated'); return; }
    document.getElementById('ok').classList.remove('d-none');
    this.reset();
  });
