AOS.init();

const eventTime = new Date ("May 27, 2024 19:00:00");
const eventTimeStamp = eventTime.getTime();

const counter = setInterval(function() {
    const now = new Date();
    const currentTimeStamp = now.getTime();

    const timeUntilEvent = eventTimeStamp - currentTimeStamp;

    const dayInMS = 1000 * 60 * 60 * 24;
    const hourInMS = 1000 * 60 * 60;
    const minutesInMS = 1000 * 60;

    const daysUntilEvent = Math.floor(timeUntilEvent / dayInMS);
    const hoursUntilEvent = Math.floor((timeUntilEvent % dayInMS) / hourInMS);
    const minutesUntilEvent = Math.floor((timeUntilEvent % hourInMS) / minutesInMS);
    const secondsUntilEvent = Math.floor((timeUntilEvent % minutesInMS) / 1000);

    document.getElementById('counter').innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`;

    if (timeUntilEvent < 0) {
        clearInterval(counter);
        document.getElementById('counter').innerHTML = "Evento Expirado";
    }

}, 1000)