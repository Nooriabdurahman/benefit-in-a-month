

function myfunction() {
    const total = document.getElementById("result");
    const sodinput = document.getElementById("sod");
    const moneyinput = document.getElementById("money");
    const yearinput = document.getElementById("year"); 

    let year = Number(yearinput.value);
    let sod = Number(sodinput.value);
    let money = Number(moneyinput.value) / 100;

    
    if (isNaN(sod) || isNaN(money) || isNaN(year) || sod <= 0 || money <= 0 || year <= 0) {
        total.textContent = "please enter a number .";
        return;  
    }


    const result = sod * Math.pow((1 + money), year);

    total.textContent = result.toLocaleString(undefined, {
        style: "currency",
        currency: "USD"
    });
}
