

// Команда для открытие скрытых данных git hub 
// git config --list --show-origin

//Home work 
// Book

let book = {
    name: "Цветы для Элджернова",
    autor: {
        autorName: "Дэниел",
        autorSirname: "Киз",
        autorYearOfBirth: 1927},
    yers: 1966,
    isMadeinKZ: false,
    genre: "Science fiction"
}
book.autor.dead = 2014;

console.log(`Кітаптың авторы ${book.autor.autorName} ${book.autor.autorSirname}`);
console.log(`${book.name} - ${book.yers} жылы шыққан`);
console.log(`${book.autor.autorName} деген кісі ${book.autor.dead} жылы қайтыс болды`);

if (book.isMadeinKZ){
    console.log(`${book.name} Қазақстанда шығарылған`);
} else {
    console.log(`${book.name} Қазақстанда шығарылмаған`);
};


//Person 
let person = {
    name: "Шерхан",
    sirname: "Дарханұлы",
    age: 30,
    married: true,
    children: ['Абдурахман', 'Раййан', 'Осман', 'Айша', 'Дара'],
    amountOfChildren: 5,

}

console.log(person.children.length);

if (person.married) {
    console.log(`${person.name} Үйленген, және ${person.children.length} бала шағасы бар`);
} else {
    delete person.children;
    delete person.amountOfChildren;
    console.log(`${person.name} - Бойдақ`);
}

console.log(person);

