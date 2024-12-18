document.getElementById("go-back").addEventListener("click", ()=>{
    history.back();
})

document.getElementById("go-forward").addEventListener("click", (e) => {
    history.forward();
  });

  document.getElementById("go-page").addEventListener("click", (e) => {
    history.go(1);
  });
