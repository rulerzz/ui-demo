var accordions = document.querySelectorAll(".accordion-item");
accordions.forEach(currentAccordion => {
    currentAccordion.addEventListener("click", function () {
        currentAccordion.childNodes.forEach(node => {
            if(node.classList && node.classList.contains("accordion-header")){
                if(!node.classList.contains("invert"))
                    node.classList.add("invert")
                else
                    node.classList.remove("invert")
            }
            if(node.classList && node.classList.contains("accordion-collapse")){
                if(!node.classList.contains("show")){
                    node.classList.add("show")
                }
                else
                    node.classList.remove("show")
            }
        })
    })
});
