btn.addEventListener("click", gg);
btn1.addEventListener("click", jj);

  function gg (){
    if (answer3.checked){
      right.classList.remove("hidden");
      wrong_div.classList.add("hidden");
    }else{
      right.classList.add("hidden");
      wrong_div.classList.remove("hidden");
    }
  }
  function jj (){
    answer.classList.toggle("hidden");
    btn1.classList.toggle("opend");
  }