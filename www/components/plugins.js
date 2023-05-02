// This is a JavaScript file
document.getElementById("codigo").addEventListener("click", function() {
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            alert("Temos um código de barras\n"+
            "Resultado:" + result.text + "\n" +
            "Formato:" + result.format);
        },
        function (error) {
            alert("Scanning failed: "+error);
        },
        {
            preferFrontCamera : false, //ios and android
            showFlipCameraButton :true, //ios and andorid
            showTorchButton : true , //ios and andorid
            torchOn: true, // android, launch with the torch switched on(if available)
            saveHistory: true, //android,save scan history (default false)
            prompt : "Place a barcode inside the scan area", //android
            resulDisplayDuraction: 500, //android, display scanner text for x ms. 0 suppresses it entirely, default 1500
            formats : "QR_CODE,PDF_417,CODE_39",//default: all but PDF_417 and RSS_EXPANDED
            orientation : "landscape", // android only (portrait|landscape),default unset so it rotates with the device
            disableAnimations : true, // ios
            disableSuccessBeep: false // ios and android
        }
    );
});
