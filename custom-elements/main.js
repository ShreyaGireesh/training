class ExpandingList extends HTMLUListElement{
    constructor(){
        self = super();
    }

    connectedCallback(){
        const uls = Array.from(self.querySelectorAll("ul"));
        const lis = Array.from(self.querySelectorAll("li"));
        console.log(uls);
        console.log(lis);

        uls.forEach((ul) => {
            ul.style.display = "none";
          });
        lis.forEach((li) => {
            if (li.querySelectorAll("ul").length > 0){ //to check if the li has any child ul
                li.setAttribute("class", "closed"); //adds a class=closed as attribute
                const childText = li.childNodes[0]; //first child of li
                const newSpan = document.createElement("span");
                newSpan.textContent = childText.textContent;
                newSpan.style.cursor = "pointer";

                newSpan.addEventListener("click", (e)=>{
                    const nextUl = e.target.nextElementSibling;
                    if (nextUl.style.display == "block") {
                        nextUl.style.display = "none";
                        nextUl.parentNode.setAttribute("class", "closed");
                      } else {
                        nextUl.style.display = "block";
                        nextUl.parentNode.setAttribute("class", "open");
                      }
                });
                // Add the span and remove the bare text node from the li
                childText.parentNode.insertBefore(newSpan, childText);
                childText.parentNode.removeChild(childText);
            }
        });
    }
}
    

customElements.define("expanding-list", ExpandingList, { extends: "ul" });