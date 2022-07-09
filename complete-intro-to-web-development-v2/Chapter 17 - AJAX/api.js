const img = document.createElement('img')
document.body.appendChild(img)

const DOG_URL = "https://dog.ceo/api/breeds/image/random"

const promise = fetch(DOG_URL)

promise
  .then((response) => {
    const processingPromise = response.json()
    return processingPromise
  })
  .then((processedResponse) => {
    console.log(processedResponse.status)
    img.src = processedResponse.message
  })

console.log("this will log first");
