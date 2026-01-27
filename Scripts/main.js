// Product navigation

const products = document.querySelectorAll(".product-section");

const options = {
  root: null,
  threshold: .43,
  rootMargin: "-110px"
};

const observer = new IntersectionObserver(function (entries) {

  // console.log(entries)

  entries.forEach((entry) => {

    const navProducts = document.querySelectorAll(".product-nav");

    function activeNav() {
      for (const navProduct of navProducts) {
        if(entry.target.id === navProduct.dataset.label){
            navProduct.classList.add("product-nav-active");

            // console.log("data: " + navProduct.dataset.label);
            // console.log("target: " + entry.isIntersecting);
        }
      }
    }

      if(entry.isIntersecting) {
        activeNav();
      }

      else{
        
        for (const navProduct of navProducts) {
          navProduct.classList.remove("product-nav-active");
        }

        return
      }
      
    });

}, options);

products.forEach(product => {
  observer.observe(product);
});
