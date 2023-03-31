document.querySelector('#clear').addEventListener('click', () => {
    document.getElementById("result").value = "";
})

document.querySelectorAll('.inp').forEach((inp) => {
    inp.addEventListener('click', () => {
        document.getElementById("result").value += inp.value;
    })
})

document.querySelector('#calc').addEventListener('click', () => {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;

})
