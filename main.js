function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }
    var max = arr[0];
    var maxIndex = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }
    return maxIndex;
}

var class_names = ['Malignant', 'Benign'];           
   

         
var img2 = new Image();
img2.crossOrigin = "anonymous";
img2.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Melanoma.jpg';
function preprocess(img) {
	const tensor = tf.browser.fromPixels(img,3); 	
	let resized = tf.image.resizeBilinear(tensor,[112,122]).toFloat();
	 resized=tf.expandDims(resized,0)	
	console.log(resized.shape);
	return resized;

 
}



async function bruh() {
const model= await tf.loadLayersModel('https://raw.githubusercontent.com/bjhaj/models/master/skincancermodel/model.json');
const predictions_single = model.predict(preprocess(img2)).dataSync();
const predictedClassIndices=predictions_single>0.5;
console.log((predictions_single));
document.write(("(Images from Wikipedia work quite well; consider using them)").fontsize(1));
document.write("<br><br><br>");
console.log(predictedClassIndices);
if (predictedClassIndices===true){
document.write("The Model predicts that the Skin Mole is likely"+((" Malignant").fontsize(8)));
} else {
document.write("The Model predicts that the Skin Mole is likely"+((" Benign").fontsize(8)));
}
}
bruh();
//thats all for today folks 