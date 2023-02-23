function validateForm() {
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
  
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
  
    const usernameRegex = /^[a-zA-Z0-9]+$/; // regex for alphanumeric characters only
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regex for valid email addresses
  
    if (!usernameRegex.test(username)) {
      console.log("Invalid username. Please enter alphanumeric characters only.");
      return;
    }
  
    if (!emailRegex.test(email)) {
      console.log("Invalid email address. Please enter a valid email address.");
      return;
    }
  
    if (password.length < 8) {
      console.log("Invalid password. Please enter a password that is at least 8 characters long.");
      return;
    }
  
    console.log("Form submitted successfully");
  }
  
  const products = ["Computers", "Monitors", "Speakers", "Keyboads", "Mice", "Laptops", "Consoles", "Controllers", "Chargers", "Extension Cord"];

  const searchField = document.getElementById("search");
  const productList = document.getElementById("products");


  function searchProducts(query){

      const matchProducts = products.filter((product)=>{
          return product.includes(query)
      })
      return matchProducts;
  }

  function updateProductList(){
      const query = searchField.value;
      const products = searchProducts(query);

      productList.innerHTML = "";

      for( let i = 0; i < products.length; i++){
          const product = products[i];
          const item = document.createElement("li");

          item.textContent = product;
          productList.appendChild(item);
      }
  }

  searchField.addEventListener("change", updateProductList);

  updateProductList();