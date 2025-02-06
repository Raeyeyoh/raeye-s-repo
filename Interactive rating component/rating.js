document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("#d1 button");
    let selectedRating = null;

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            for (let j = 0; j < buttons.length; j++) {
                buttons[j].style.backgroundColor = "";
            }

            this.style.backgroundColor = "white";
            selectedRating = this.textContent;

            
            localStorage.setItem("selectedRating", selectedRating);
        });
    }
});
