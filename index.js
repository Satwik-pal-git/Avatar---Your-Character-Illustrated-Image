document.getElementById("clickme").onclick = function () {
    const naam = document.getElementById("Name").value;
    // console.log(naam);
    var url = "https://joeschmoe.io/api/v1/" + naam;
    // console.log(url);
    fetch(url).then((Data) => {
        return Data;
    }).then((image) => {
        try {
            // console.log(image);
            var Image = document.getElementById("avatar").setAttribute("src", image.url);
        } catch (error) {
            console.log(error);
        }
    });
};

let timer;

document.addEventListener('input', e => {
    const el = e.target;

    if (el.matches('[data-color]')) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            document.documentElement.style.setProperty(`--color-${el.dataset.color}`, el.value);
        }, 100)
    }
})