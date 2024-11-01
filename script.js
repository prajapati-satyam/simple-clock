setInterval(() => {
    let hourHand = document.getElementById('hourHand');
    let minitueHand = document.getElementById('minitueHand');
    let secondHand = document.getElementById('secondHand');
    let date =  new Date();
    let hours =  date.getHours();
    let minitue = date.getMinutes();
    let second = date.getSeconds();
    let hoursHandRotaion = (hours*30) + (minitue/2);
    let minitueHandRotaion = 6*minitue + (second/120);
    let secondHandRotaion = 6 * second;
    hourHand.style.transform = `rotate(${hoursHandRotaion}deg)`;
    minitueHand.style.transform = `rotate(${minitueHandRotaion}deg)`;
    secondHand.style.transform = `rotate(${secondHandRotaion}deg)`;
}, 1000);