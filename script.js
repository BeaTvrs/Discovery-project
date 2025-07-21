function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  //Mudar a descrição da imagem
  if (html.classList.contains("light")) {
    //Se tiver light mode
    img.setAttribute(
      "alt",
      "Palhaço de cabelo preto, chapeu e gola laranja e maquiagem azul nos olhos e vermelha na boca sorrindo, desenhado por Tiago Orelha"
    )
  } else {
    //Se tiver sem light mode manter a descrição normal
    img.setAttribute(
      "alt",
      "Palhaço de cabelo preto, chapeu e gola laranja e maquiagem azul nos olhos e vermelha na boca triste, desenhado por Tiago Orelha"
    )
  }
}
