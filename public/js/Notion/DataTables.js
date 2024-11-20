$(document).ready(function() {
    $('#exampleTable').DataTable({
        scrollX: true, // Active le défilement horizontal
        autoWidth: true, // Ajuste automatiquement les colonnes
        language: {
            url: "//cdn.datatables.net/plug-ins/1.13.6/i18n/fr-FR.json" // Fichier de traduction en français
        }
    });
});