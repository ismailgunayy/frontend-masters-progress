document.querySelector(".request-complement").addEventListener("click", () => {
  fetch("/complement")
    .then((res) => res.json())
    .then(
      (data) =>
        (document.querySelector(".complement").innerText = data.complement)
    )
    .catch((error) => console.log(error))
})
