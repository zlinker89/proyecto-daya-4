$(document).ready(() => {
    var typeWriter = new Audio("audio.mp3");
typeWriter.currentTime = 20;
typeWriter.autoplay = true;

typeWriter.ontimeupdate = function () {
  Playing();
};

var Texto_animado = "";

function animacion_letra() {
  anime
    .timeline({ loop: false })
    .add({
      targets: ".ml2 .letter",
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70 * i,
    })
    // .add({
    //   targets: ".ml2",
    //   opacity: 0,
    //   duration: 1000,
    //   easing: "easeOutExpo",
    //   delay: 1000,
    // });
}



function pass_word(letra, textWrapper) {
  if (letra != Texto_animado) {
    textWrapper.innerHTML = letra.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
    animacion_letra();
    Texto_animado = letra;
  }
}

var textWrapper = document.querySelector(".ml2");

function Playing() {
    console.log(typeWriter.currentTime);
    if (typeWriter.currentTime > 13 && typeWriter.currentTime < 15.8) {
      pass_word("Voy a empezar con tu sonrisa", textWrapper);
    } else if (typeWriter.currentTime > 17.5 && typeWriter.currentTime < 20) {
      pass_word("Fue lo primero que me cautivo", textWrapper);
    } else if (typeWriter.currentTime > 20.8 && typeWriter.currentTime < 23.5) {
        pass_word("Y seguir con tu mirada", textWrapper);
    } else if (typeWriter.currentTime > 24 && typeWriter.currentTime < 26.5) {
        pass_word("Mirada que me derritió", textWrapper);
    } else if (typeWriter.currentTime > 27 && typeWriter.currentTime < 31) {
        pass_word("Continuaré con esos ojos", textWrapper);
    } else if (typeWriter.currentTime > 31.5 && typeWriter.currentTime < 34) {
        pass_word("Que me hicieron creer", textWrapper);
    } else if (typeWriter.currentTime > 35 && typeWriter.currentTime < 39) {
        pass_word("Que todavía el amor existe", textWrapper);
    } else if (typeWriter.currentTime > 39.5 && typeWriter.currentTime < 42) {
        pass_word("Y en ellos lo pude ver", textWrapper);
    } else {
      textWrapper.innerHTML = "";
    }
}
});

