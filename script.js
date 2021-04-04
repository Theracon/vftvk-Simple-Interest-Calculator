function compute() {
    var i = 0;
    var currentYear = new Date().getFullYear();

    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var t = document.getElementById("years").value;

    var p = parseFloat(p, 10);
    var r = parseFloat(r, 10);
    var t = parseFloat(t, 10);

    i = (p * r * t) / 100;

    var yearToMature = parseInt(currentYear, 10) + t;

    document.querySelector(".result").innerHTML = `
        <p>If you deposit <span>${p}</span>,</p>
        <p>at an interest of <span>${r}%</span>,</p>
        <p>you will receive an amount of <span>${i}</span>,</p>
        <p>in the year <span>${yearToMature}</span></p>.
    `;
}