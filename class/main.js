class Book {
    constructor(name, autor, years, isMadeinKZ, genre){
        this.name = name;
        this.autor = autor;
        this.years = years;
        this.isMadeinKZ = isMadeinKZ;
        this.genre = genre;

    }

}

let book = new Book("Цветы для Элджернова", "Дэниел", 1966, false, "Science fiction");
console.log(book);

class NeedPerson {
    constructor(name, surname, iin, status, verifed, phone){
        this.name = name;
        this.surname = surname;
        this.iin = iin;
        this.status = status;
        this.verifed = verifed;
        this.phone = phone; 
    }
}



class statusKopbalaly extends NeedPerson {
    constructor(balasany, asp, name, surname, iin, status, verifed, phone){
        super(name, surname, iin, status, verifed, phone);
        this.balasany = balasany;
        this.asp = asp;
    }
}

class statusInvolid extends NeedPerson{
    constructor(group, pensiya, name, surname, iin, status, verifed, phone){
        super(name, surname, iin, status, verifed, phone);
        this.group = group;
        this.pensiya = pensiya;
    }
}

class Status {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

let statusNeedKopbalaly = new Status(1, "Kopbalaly");
let statusNeedInvolid = new Status(2, "Involid")

let palensheev = new statusKopbalaly (5, true, "Palenshe", "Palensheev", 123456789123, statusNeedKopbalaly, true, 87021234567);
console.log(palensheev);


class Product {
    constructor(id, code, name, desc, price, catalog_id, model_id){
        this.id = id;
        this.code = code;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.catalog_id = catalog_id;
        this.model_id = model_id; 
    }
}

class Catalogs {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

class Shiny extends Product {
    constructor(size, height, width, type_id, id, code, name, desc, price, catalog_id, model_id){
        super(id, code, name, desc, price, catalog_id, model_id);
        this.size = size;
        this.height = height;
        this.width = width;
        this.type_id = type_id;
    }
}

class Maslo extends Product {
    constructor(brend, litr, type, id, code, name, desc, price, catalog_id, model_id){
        super(id, code, name, desc, price, catalog_id, model_id);
        this.brend = brend;
        this.litr = litr;
        this.type = type;
    }
}

let shinyYokohama = new Shiny(16, 65, 215, "Zimniy", 1, 123456, "Shina Yokohama", "Qystyq yokohama shinasy ${shinyYokohama[6]}", 130000, "1", "Yokohama" )

console.log(shinyYokohama);