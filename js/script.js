document.addEventListener('DOMContentLoaded', function () {
    // Obtenez la date actuelle
    var currentDate = moment();

    // Ajoutez 14 jours à la date actuelle pour obtenir la date future
    var futureDate = moment(currentDate).add(14, 'days');

    // Mettez à jour l'affichage initial du compte à rebours
    updateCountdown(currentDate, futureDate);

    // Mettez en place un intervalle pour mettre à jour le compte à rebours chaque seconde
    var intervalId = setInterval(function () {
        currentDate = moment();
        updateCountdown(currentDate, futureDate); // Mettez à jour l'affichage
    }, 1000);

    function updateCountdown(currentDate, futureDate) {
        // Calculez la différence entre la date actuelle et la date future
        var duration = moment.duration(futureDate.diff(currentDate));

        if (futureDate.diff(currentDate) <= 0) {
            // Arrêtez l'intervalle si le compte à rebours a atteint 0
            clearInterval(intervalId);
            return;
        }

        // Mettez à jour l'affichage avec les jours, heures, minutes et secondes restants
        document.getElementById('days-span-number').textContent = Math.floor(duration.asDays());
        document.getElementById('hours-span-number').textContent = duration.hours();
        document.getElementById('minutes-span-number').textContent = duration.minutes();
        document.getElementById('seconds-span-number').textContent = duration.seconds();
    }
});
