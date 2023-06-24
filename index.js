alert("Bem Vindo ao Pizzaria Dev !");

//capturando Id da tag form
const form = document.getElementById("form");

//adicionando evento ao Id capturado
form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  //capturando elementos HTML
  const fullName = document.querySelector("input[name='name']").value;
  const adress = document.querySelector("input[name='adress']").value;
  const phone = document.querySelector("input[name='phone']").value;
  const massType = document.querySelector("select[name='massType']").value;
  const border = document.querySelector("select[name='borda']").value;
  const flavors = document.querySelector("input[name='main']:checked").value;
  const observations = document.querySelector(
    "textarea[name='observations']"
  ).value;

  //dando um console log em formato de objeto
  console.log({
    fullName,
    adress,
    phone,
    massType,
    border,
    flavors,
    observations,
  });

  //Alert final
  alert(
    "Pedido Realizado !\n" +
      "\nNome do Cliente : " +
      fullName +
      "\nEndereço do Cliente : " +
      adress +
      "\nTelefone do Cliente : " +
      phone +
      "\nTipo de Massa : " +
      massType +
      "\nTipo de Borda : " +
      border +
      "\nSabor : " +
      flavors +
      "\nObservações : " +
      observations
  );

  //apagando os valores so inputs e selects
  document.querySelector("input[name='name']").value = "";
  document.querySelector("input[name='adress']").value = "";
  document.querySelector("input[name='phone']").value = "";
  massType = document.querySelector("select[name='massType']").value = "";
  border = document.querySelector("select[name='borda']").value = "";
  document.querySelector("input[name='main']:checked").value = "";
  document.querySelector("textarea[name='observations']").value = "";
});
