function tabuada() {
    var num = document.getElementById('num');
    var res = document.querySelector('div#res');

    if (num.value.length == 0) {
        alert('Por favor, digite um número!');
    } else {
        let n = Number(num.value);
        let c = 1;
        res.innerHTML = ''
        res.innerHTML = `Tabuada de ${n}`
        while (c <= 10) {            
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `res${c}`
            res.appendChild(item);
            c++
        }
    } 
}