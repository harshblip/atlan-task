export const codeSnippets = [
    `
    import requests
    import json
    
    # Replace these variables with actual values
    api_endpoint = 'https://api.example.com/text-analyzer'
    api_key = 'your_api_key'
    text_to_analyze = 'This is a sample text for analysis.'
    
    # Request headers with API key
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {api_key}'
    }
    
    # Request payload
    payload = {
        'text': text_to_analyze
    }
    
    try:
        # Make a POST request to the text analyzer API
        response = requests.post(api_endpoint, headers=headers, json=payload)
    
        # Check if the request was successful (status code 200)
        if response.status_code == 200:
            # Parse and print the analysis results
            analysis_results = response.json()
            print('Analysis Results:')
            print(json.dumps(analysis_results, indent=2))
        else:
            # Print an error message if the request was not successful
            print(f'Error: {response.status_code} - {response.text}')
    
    except Exception as e:
        # Handle exceptions such as network errors
        print(f'An error occurred: {str(e)}')
    `,
    `from imageai.Detection import ObjectDetection
    import os
    
    execution_path = os.getcwd()
    
    detector = ObjectDetection()
    detector.setModelTypeAsRetinaNet() # Set the model type to RetinaNet
    detector.setModelPath(os.path.join(execution_path , "resnet50_coco_best_v2.1.0.h5")) # Set the model path
    detector.loadModel() # Load the model
    
    detections = detector.detectObjectsFromImage(input_image=os.path.join(execution_path , "image.jpg"), output_image_path=os.path.join(execution_path , "image_new.jpg")) # Detect objects from image
    
    for eachObject in detections:
        print(eachObject["name"] , " : ", eachObject["percentage_probability"])
    `,
    `import speech_recognition as sr

    # Create a recognizer instance
    recognizer = sr.Recognizer()
    
    # Use the microphone as the audio source
    with sr.Microphone() as source:
        print("Listening...")
        # Listen for the first phrase and extract it into audio data
        audio_data = recognizer.listen(source)
        print("Done listening.")
    
    try:
        # Recognize speech using Google Speech Recognition
        text = recognizer.recognize_google(audio_data)
        print("You said: {}".format(text))
    except Exception as e:
        print("Could not understand audio: {}".format(e))
    `,
    `from imageai.Classification import ImageClassification
    import os
    
    execution_path = os.getcwd()
    
    # Initialize the ImageClassification class
    prediction = ImageClassification()
    
    # Set the model type (you can choose from MobileNetV2, ResNet50, InceptionV3, or DenseNet121)
    prediction.setModelTypeAsResNet()
    
    # Set the model path to the location of the pre-trained model file
    prediction.setModelPath(os.path.join(execution_path, "resnet50_weights_tf_dim_ordering_tf_kernels.h5"))
    
    # Load the model
    prediction.loadModel()
    
    # Perform image classification on an image
    predictions, probabilities = prediction.classifyImage(os.path.join(execution_path, "image.jpg"), result_count=5)
    
    # Print the top  5 predictions along with their probabilities
    for eachPrediction, eachProbability in zip(predictions, probabilities):
        print(eachPrediction, ":", eachProbability)
    `
];