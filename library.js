$(document).ready(function () {
    $("#newNameThatWorksPlease").on("click",libraryCalculation);
});



function libraryCalculation(){
    //gather info from person

    //ask how many dvds they are returning
    let dvdCount = parseInt($("#dvdCount").val());
    //ask how many books they are returning
    let bookCount = parseInt($("#bookCount").val());
    //ask how many days late with dvd
    let dvdDays = parseInt($("#dvdDays").val());
    //ask how many days late with book
    let bookDays = parseInt($("#bookDays").val());


    //calculate (days*fee)*book
    //gives us total of one book for fee and days and then multiplies that total for each book late
    let bookTotal = bookCount*.25*bookDays;

    //calculate (days*fee)*dvd
    //gives us total of one dvd for fee and days and then multiplies that total for each dvd late
    let dvdTotal = dvdCount*.50*dvdDays;
    let grandTotal = dvdTotal + bookTotal;
    grandTotal = grandTotal.toFixed(2);
    dvdTotal = dvdTotal.toFixed(2);
    bookTotal = bookTotal.toFixed(2);

    $("#libraryOutput").text(`You owe $${dvdTotal} for DVDs and $${bookTotal} for books so a total of $${grandTotal} for both`);}
