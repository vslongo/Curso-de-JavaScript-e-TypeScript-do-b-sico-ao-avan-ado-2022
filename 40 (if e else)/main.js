const hora = 30;

if (hora >= 0 && hora < 12){
    console.log ('Bom dia');
}else if (hora >= 12 && hora <= 17 ) {
    console.log ('Boa Tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log ('Boa noite')
} else {
    console.log ('KK Burro n sabe digitar uma hora valida');
}
