$(document).ready(function() {
    $(function() {
        $("#moneyRange").slider({
            range: "max",
            min: 10000,
            max: 10000000,
            value: 2800000,
            slide: function(event, ui) {
                $("#moneyAmount").val(ui.value + ' ₽');
            }
        });
        $("#moneyAmount").val($("#moneyRange").slider("value") + ' ₽');
    });

    $(function() {
        $("#monthRange").slider({
            range: "max",
            min: 6,
            max: 100,
            value: 12,
            slide: function(event, ui) {
                $("#monthAmount").val(ui.value + ' месяцев');
            }
        });
        $("#monthAmount").val($("#monthRange").slider("value") + ' месяцев');
    });
});