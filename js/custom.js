const form = document.querySelector("form");

form.addEventListener("submit", function (e){
    e.preventDefault();

    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if((weight === "") || (weight < 0) || (isNaN(weight))){
        results.innerHTML = "Please provide a valid height";
    } else {
        const cupsWater = ((weight/2)/8).toFixed(0);
        results.innerHTML = `You need <span>${cupsWater} cups</span> of water each day.`;
    }
});
