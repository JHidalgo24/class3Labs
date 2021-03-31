function calculator(){
    //gather info from person

    //ask how many dvds they are returning
    let dvdCount = parseInt(prompt("How many DVDs are you returning?"))
    //ask how many books they are returning
    let bookCount = parseInt(prompt("How many books are you returning?"))
    //ask how many days late with dvd
    let dvdDays = parseInt(prompt("How many days late are the DVDs you are returning?"))
    //ask how many days late with book
    let bookDays = parseInt(prompt("How many days late are the books you are returning?"))


    //calculate (days*fee)*book
    //gives us total of one book for fee and days and then multiplies that total for each book late
    let bookTotal = bookCount*.25*bookDays;

    //calculate (days*fee)*dvd
    //gives us total of one dvd for fee and days and then multiplies that total for each dvd late
    let dvdTotal = dvdCount*.50*dvdDays;

    dvdTotal = dvdTotal.toFixed(2);
    bookTotal = bookTotal.toFixed(2);

    alert(`You owe $${dvdTotal} for DVDs and $${bookTotal} for books so a total of $${dvdTotal+bookTotal} for both`)
}
