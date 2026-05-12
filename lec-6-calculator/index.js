let inp = document.querySelector("#input");
let buttons = document.querySelectorAll(".btn");

for (let btn of buttons) {

    btn.addEventListener("click", () => {

        let btnText = btn.innerText;

        if (btnText === "AC") {

            inp.value = "";

        }

        else if (btnText === "=") {

            try {

                let expression = inp.value
                    .replace(/×/g, "*")
                    .replace(/÷/g, "/")
                    .replace(/−/g, "-");

                inp.value = eval(expression);

            } 
            catch {

                inp.value = "Error";

            }

        }

        else {

            inp.value += btnText;

        }

    });

}