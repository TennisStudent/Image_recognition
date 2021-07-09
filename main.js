Webcam.set
({
    width: 300,
    height: 300,
    image_format: 'png',
    png_qualtiy: 90,

    constraints:
{
    facingMode: 'environment'
}

});

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_picture()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = "<img id='captured_image' src='"+data_uri+"'>"
    });
}

console.log("ml5_version", ml5.version);

classifier = ml5.imageClassifier("MobileNet", modelLoaded);

function modelLoaded()
{
    console.log("Model Loaded");
}

function identify_photo()
{
    img = document.getElementById("captured_image")
    classifier.classify(img, gotResult)
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error)
    }
    else
    {
        console.log(results)
        document.getElementById("image_name").innerHTML = results[0].label;
    }
}


