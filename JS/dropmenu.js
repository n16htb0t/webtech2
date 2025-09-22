document.addEventListener("DOMContentLoaded", () => {
    const selectElement = document.getElementById("RandomOption");
  
    // selectElement.addEventListener("change", (e) => {
    //   const selectedValue = e.target.value;
    //   console.log(`You selected Option ${selectedValue}`);
    //   alert(`You selected Option ${selectedValue}`);
    // });
  
        const resultElement = document.getElementById("result");
      
        selectElement.addEventListener("change", (e) => {
          const selectedValue = e.target.value;
      
          if (selectedValue === "1") {
            resultElement.textContent = "You picked Option 1 – Nice choice!";
          } else if (selectedValue === "2") {
            resultElement.textContent = "Option 2, classic.";
          } else if (selectedValue === "3") {
            resultElement.textContent = "Option 3 – bold move!";
          } else if (selectedValue === "4") {
            resultElement.textContent = "Option 4 it is!";
          } else {
            resultElement.textContent = "";
          }
        });
      });
  