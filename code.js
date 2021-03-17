let array = ["Bruh", "Rookie", "Lmfao","Obama","Maks"];
let podpowiedzi = ["A popular variant of the slang term bro that is often used as an interjection to convey frustration or disappointment at something", "A new recruit, especially in the army or police/a member of a sports team in their first full season", "Party rock anthem","Thanks, *****/The 44th President of USA","Nie sprawdzaj tego już gościu XDDD"];
let calosc = document.getElementById("Calosc");
let PodkreslenieILiterki = document.createElement("div");
PodkreslenieILiterki.classList = "PodkreslenieILiterki";
PodkreslenieILiterki.id = "PodkreslenieILiterki";
calosc.appendChild(PodkreslenieILiterki);

alfabet = "abcdefghijklmnopqrstuvwxyz".split("");
let KontenerAlfabet = document.getElementById("Alfabet");

function Renderuj() {
  document.getElementById("Przycisk").onclick=()=>{OdNowa()};

  let Losowa = Math.floor(Math.random() * (array.length - 1 + 1)) + 1;

  let Slowo = array[Losowa - 1];

  let Length = Slowo.length;

  let LiczbaProb = 2;

  let Koniec = document.createElement("div");

  for (let i = 1; i < alfabet.length + 1; i++) {
    let moje = document.createElement("div");
    moje.innerHTML = alfabet[i - 1];
    KontenerAlfabet.appendChild(moje);
    moje.addEventListener("click", () => {
      CzyZawiera(alfabet[i - 1]);
    });
  }

  let Literki = document.createElement("div");
  
  Literki.classList.add("Literki");
  Literki.id = "Literki";
  PodkreslenieILiterki.appendChild(Literki);

  let Podkresl = document.createElement("div");

  Podkresl.classList.add("Podkresl");
  Podkresl.id = "Podkresl";
  PodkreslenieILiterki.appendChild(Podkresl);

  let literkiSlowa = array[Losowa - 1].split("");

  let KontenerPodkreslenie = document.getElementById("Podkresl");

  let KontenerLiterki = document.getElementById("Literki");

  for (let i = 1; i < array[Losowa - 1].length + 1; i++) {
    let temp = document.createElement("div");

    temp.innerHTML = "";

    let temp2 = document.createElement("div");

    temp2.innerHTML = literkiSlowa[i - 1];
    temp2.id = i - 1;
    temp2.style.opacity = "20%";
    KontenerLiterki.appendChild(temp2);
    KontenerPodkreslenie.appendChild(temp);
  }

  let IleProb = document.createElement("Div");

  IleProb.id="LiczbaProb";
  IleProb.classList.add("LiczbaProb");
  IleProb.innerHTML = `Liczba prób :  ${LiczbaProb}`;
  calosc.appendChild(IleProb);

  let btn = document.createElement("BUTTON");

  btn.classList.add("PodpowiedzPrzycisk");
  btn.innerHTML = "Podpowiedź?";
  btn.id="PodpowiedzPrzycisk";
  btn.onclick = Hint;
  calosc.appendChild(btn);

  let HintBox = document.createElement("Div");

  HintBox.classList.add("HintBox");
  HintBox.innerHTML = "";
  HintBox.id="HintBox";
  calosc.appendChild(HintBox);

  function toCreateButton() {
    let buttonZagraj = document.createElement("BUTTON");
    buttonZagraj.classList.add("ZagrajPonowie");
    buttonZagraj.innerHTML = "ZagrajPonowie";
    buttonZagraj.onclick = () => OdNowa();
    return buttonZagraj;
  }

  function Hint() {
    HintBox.innerHTML = podpowiedzi[Losowa - 1];
    HintBox.style.backgroundColor = "#dfdede";
  }
  
  let WinLose = document.getElementById("WinLose");

  WinLose.id="WinLose";

  let WarunekZwyciestwa = 0;

  function CzyZawiera(X) {
    if (Slowo.includes(X)||Slowo.includes(X.toUpperCase())) {
      literkiSlowa = Slowo.split("");
      for (let j = 0; j < Slowo.length; j++) {
        if (literkiSlowa[j] == X ||literkiSlowa[j]==X.toUpperCase()){
          document.getElementById(j.toString()).style.opacity = "100%";
          WarunekZwyciestwa++;
        }
      }
    } else {
      if (LiczbaProb > -1) LiczbaProb = LiczbaProb - 1;
      IleProb.innerHTML = `Liczba prób :  ${LiczbaProb} `;
      if (LiczbaProb === 0) {
        WinLose.classList.add("WinLose");
        Koniec.innerHTML = " No lipton przegrana szkoda no ;//";
        WinLose.append(Koniec);
        WinLose.appendChild(toCreateButton());
        WinLose.style='display:block;' 
      }
    }
    if (WarunekZwyciestwa == Slowo.length) {
      WinLose.classList.add("WinLose");
      Koniec.innerHTML = "Wow wygrales wygralas super jest wow";
      WinLose.appendChild(Koniec);
      WinLose.appendChild(toCreateButton());
      WinLose.style='display:block;' 
    }
  }

}
function OdNowa() {
  console.log("Zaczynam od nowa!!!!");

  let KontenerPodkreslenie = document.getElementById("Podkresl");

  let KontenerLiterki = document.getElementById("Literki");

  let PodpowiedzPrzycisk = document.getElementById("PodpowiedzPrzycisk");

  KontenerAlfabet.innerHTML='';
  KontenerPodkreslenie.parentNode.removeChild(KontenerPodkreslenie);
  KontenerLiterki.parentNode.removeChild(KontenerLiterki);
  document.getElementById("LiczbaProb").parentNode.removeChild(document.getElementById("LiczbaProb"));
  PodpowiedzPrzycisk.parentNode.removeChild(PodpowiedzPrzycisk);
  document.getElementById("HintBox").parentNode.removeChild(document.getElementById("HintBox"));
  WinLose.innerHTML='';
  WinLose.style='display:none;' 
  Renderuj();
}
