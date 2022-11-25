$(document).ready(function() {
    $("#calculate").click(function() {
        var investment = parseFloat($("#investment").val());
        var annualRate = parseFloat($("#rate").val());
        var years = parseInt($("#years").val());
        if (isNaN(investment) || investment <= 0) {
            alert("Investment must be a valid number greater than zero.");
        } else if (isNaN(annualRate) || annualRate <= 0) {
            alert("Annual rate must be a valid number greater than zero.");
        } else if (isNaN(years) || years <= 0) {
            alert("Years must be a valid number\nand greater than zero.");
        } else {
            var futureValue = investment;
            for (i = 1; i <= years; i++) {
                futureValue += futureValue * annualRate / 100;
            }
            futureValue = futureValue.toFixed(2);
            $("#future_value").val(futureValue);
        }
        $("#investment").focus();
    });
});