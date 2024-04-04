let day = +prompt("brdan yettigacha son kiriting");
let dayName;


switch (day) {
    case 0:
        dayName = "Yakshanba";
        break;

    case 1:
        dayName = "Dushanba";
        break;

    case 2:
        dayName = "Seshanba";
        break;

    case 3:
        dayName = "Chorshanba";
        break;


    case 4:
        dayName = "Payshanba";
        break;

    case 5:
        dayName = "Juma";
        break;

    case 6:
        dayName = "Shanba";
        break;
    default:
        dayName = "Haftada 7 kun bor!";
        break;
}

// console.log(dayName);
alert(dayName);