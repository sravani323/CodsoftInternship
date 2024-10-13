let string = "";
let buttons = document.querySelectorAll(".button");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let value = e.target.value;

        if (value === "=") {
            try {
                string = eval(string);
            } catch (error) {
                string = "Error";
            }
        } else if (value === "C") {
            string = "";
        } else if (value === "X") {
            string = string.slice(0, -1);  
        } else {
            string += value; 
        }

        document.querySelector("#result").value = string;
    });
});
