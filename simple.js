const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("click", () => {
    if (input.id) {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (input.type === "text" || input.type === "password") {
        input.addEventListener("input", () => {
          const words = input.value.trim().split(" ").toString();
          if (words.length <= 8) {
            label.style.opacity = 1;
            input.style.color = "red";
            input.classList.add("error");
          } else {
            label.style.opacity = 0;
            input.style.color = "black";
            input.classList.remove("error");
          }
        });
      }
      if (input.type === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        input.addEventListener("input", () => {
          if (!emailRegex.test(input.value)) {
            label.style.opacity = 1;
            input.classList.add("error");
          } else {
            label.style.opacity = 0;
            input.classList.remove("error");
          }
        });
      }
    }
  });
});
