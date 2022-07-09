// TODO: define addFavoriteBook(..) function
const addFavoriteBook = (bookName) => {
  if (!favoriteBooks.includes(bookName) && !bookName.includes("Great")) {
    favoriteBooks.push(bookName)
  }
}

// TODO: define printFavoriteBooks() function
const printFavoriteBooks = () => {
  console.log(`Favorite Books: ${favoriteBooks.length}`)
  for (let book of favoriteBooks) {
    console.log(book)
  }
}

var favoriteBooks = []

addFavoriteBook("A Song of Ice and Fire")
addFavoriteBook("The Great Gatsby")
addFavoriteBook("Crime & Punishment")
addFavoriteBook("Great Expectations")
addFavoriteBook("You Don't Know JS")

// TODO: print out favorite books
printFavoriteBooks()
