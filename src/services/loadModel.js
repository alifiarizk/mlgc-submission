const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/submission-ml-alifiarizki/submissions-model/model.json');
}
module.exports = loadModel;