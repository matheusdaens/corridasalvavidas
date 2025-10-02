document.addEventListener('DOMContentLoaded', function() {
    
    // CARROSSEL
    var imgs = document.querySelectorAll('.fotoshomepage img');
    if (imgs.length > 0) {
        var i = 0;
        for (var x = 1; x < imgs.length; x++) imgs[x].style.display = 'none';
        setInterval(function() {
            imgs[i].style.display = 'none';
            i = (i + 1) % imgs.length;
            imgs[i].style.display = 'block';
        }, 3000);
    }
    
    // MENU MOBILE
    var nav = document.querySelector('nav.navegacao');
    if (nav) {
        var ul = nav.querySelector('ul');
        var btn = document.createElement('button');
        btn.innerHTML = '☰ Menu';
        btn.style.cssText = 'display:none; background:#00A859; color:white; border:none; padding:10px 20px; cursor:pointer; border-radius:5px; margin:10px';
        nav.insertBefore(btn, ul);
        
        btn.onclick = function() {
            ul.style.display = ul.style.display === 'flex' ? 'none' : 'flex';
            if (ul.style.display === 'flex') ul.style.flexDirection = 'column';
        };
        
        window.onresize = function() {
            if (window.innerWidth <= 768) {
                btn.style.display = 'block';
                ul.style.display = 'none';
            } else {
                btn.style.display = 'none';
                ul.style.display = 'flex';
            }
        };
        window.onresize();
    }
    
    // VALIDAÇÃO DO EMAIL
    var forms = document.querySelectorAll('form');
    for (var k = 0; k < forms.length; k++) {
        forms[k].onsubmit = function(e) {
            e.preventDefault();
            var campos = this.querySelectorAll('input[required], textarea[required]');
            for (var m = 0; m < campos.length; m++) {
                if (!campos[m].value.trim()) {
                    alert('Preencha todos os campos!');
                    return;
                }
                if (campos[m].type === 'email' && campos[m].value.indexOf('@') === -1) {
                    alert('Email inválido!');
                    return;
                }
            }
            alert('Enviado com sucesso!');
            this.reset();
        };
    }
    
});