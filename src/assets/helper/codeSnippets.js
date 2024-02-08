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
    `
    from imageai.Classification import ImageClassification
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
    `,
    `
    pip install vaderSentiment

    from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

    # Initialize the sentiment intensity analyzer
    sentiment_analyzer = SentimentIntensityAnalyzer()

    # Define the text to analyze
    text = "The product was great!"

    # Get the sentiment scores for the text
    sentiment_scores = sentiment_analyzer.polarity_scores(text)

    # Print the sentiment scores
    print("Sentiment Scores: ", sentiment_scores)
        `,
        `
        from chatterbot import ChatBot
    from chatterbot.trainers import ListTrainer

    # Create a new chatbot named Chatpot
    chatbot = ChatBot("Chatpot")

    # Define exit conditions for the chat loop
    exit_conditions = (":q", "quit", "exit")

    # Start the chat loop
    while True:
        query = input("> ")
        if query in exit_conditions:
            break
        else:
            print(f"🪴 {chatbot.get_response(query)}")

    Further to train the model you can extend the code like -
    from chatterbot import ChatBot
    from chatterbot.trainers import ListTrainer

    # Create a new chatbot named Chatpot
    chatbot = ChatBot("Chatpot")

    # Create a new trainer for the chatbot
    trainer = ListTrainer(chatbot)

    # Train the chatbot with some conversation pairs
    trainer.train([
        "Hi",
        "Hello, how can I assist you today?",
        "Who are you?",
        "I am Chatpot, a virtual assistant.",
        "That's interesting!",
        "Thank you!",
        # Add more conversation pairs as needed
    ])

    # Define exit conditions for the chat loop
    exit_conditions = (":q", "quit", "exit")

    # Start the chat loop
    while True:
        query = input("> ")
        if query in exit_conditions:
            break
        else:
            print(f"🪴 {chatbot.get_response(query)}")
    `,
    `
    pip install scikit-surprise

    from surprise import Dataset
    from surprise import Reader
    from surprise import KNNBasic
    from surprise.model_selection import cross_validate

    # Define the file format of the dataset
    reader = Reader(line_format='user item rating', sep=',', skip_lines=1)

    # Load the MovieLens dataset
    data = Dataset.load_from_file('path_to_your_dataset.csv', reader=reader)

    # Use the KNN algorithm
    sim_options = {'name': 'cosine', 'user_based': True}
    algo = KNNBasic(sim_options=sim_options)

    # Run  5-fold cross-validation and print results
    cross_validate(algo, data, measures=['RMSE', 'MAE'], cv=5, verbose=True)

    # Train the algorithm on the entire dataset
    trainset = data.build_full_trainset()
    algo.fit(trainset)

    # Make a prediction for a specific user and item
    uid = str(196)  # raw user id
    iid = str(302)  # raw item id
    prediction = algo.predict(uid, iid, r_ui=4, verbose=True)
    print("Predicted rating for user %s and item %s is %.2f" % (uid, iid, prediction.est))
    `,
    `
    import cv2
    import face_recognition
    import numpy as np
    import os

    # Define the path to where your known faces are stored
    known_faces_dir = 'path_to_known_faces_directory'

    # Initialize some variables
    face_locations = []
    face_encodings = []
    face_names = []
    process_this_frame = True

    # Load a sample picture and learn how to recognize it.
    obama_image = face_recognition.load_image_file(os.path.join(known_faces_dir, "obama.jpg"))
    obama_face_encoding = face_recognition.face_encodings(obama_image)[0]

    # Create arrays of known face encodings and their names
    known_face_encodings = [
        obama_face_encoding,
        # Add more known face encodings here
    ]

    known_face_names = [
        "Barack Obama",
        # Add more known face names here
    ]

    # Initialize some variables
    face_locations = []
    face_encodings = []
    face_names = []
    process_this_frame = True

    # Capture video from the webcam
    video_capture = cv2.VideoCapture(0)

    while True:
    # Grab a single frame of video
    ret, frame = video_capture.read()

    # Resize frame of video to  1/4 size for faster face recognition processing
    small_frame = cv2.resize(frame, (0,  0), fx=0.25, fy=0.25)

    # Convert the image from BGR color (which OpenCV uses) to RGB color (which face_recognition uses)
    rgb_small_frame = small_frame[:, :, ::-1]

    # Only process every other frame of video to save time
    if process_this_frame:
        # Find all the faces and face encodings in the current frame of video
        face_locations = face_recognition.face_locations(rgb_small_frame)
        face_encodings = face_recognition.face_encodings(rgb_small_frame, face_locations)

        face_names = []
        for face_encoding in face_encodings:
            # See if the face is a match for the known face(s)
            matches = face_recognition.compare_faces(known_face_encodings, face_encoding)
            name = "Unknown"

            # Or instead, use the known face with the smallest distance to the new face
            face_distances = face_recognition.face_distance(known_face_encodings, face_encoding)
            best_match_index = np.argmin(face_distances)
            if matches[best_match_index]:
                name = known_face_names[best_match_index]

            face_names.append(name)

    process_this_frame = not process_this_frame

    # Display the results
    for (top, right, bottom, left), name in zip(face_locations, face_names):
        # Scale back up face locations since the frame we detected in was scaled to  1/4 size
        top *=  4
        right *=  4
        bottom *=  4
        left *=  4

        # Draw a box around the face
        cv2.rectangle(frame, (left, top), (right, bottom), (0,  0,  255),  2)

        # Draw a label with a name below the face
        cv2.rectangle(frame, (left, bottom -  35), (right, bottom), (0,  0,  255), cv2.FILLED)
        font = cv2.FONT_HERSHEY_DUPLEX
        cv2.putText(frame, name, (left +  6, bottom -  6), font,  1.0, (255,  255,  255),  1)

    # Display the resulting image
    cv2.imshow('Video', frame)

    # Hit 'q' on the keyboard to quit!
    if cv2.waitKey(1) &  0xFF == ord('q'):
        break

    # Release handle to the webcam
    video_capture.release()
    cv2.destroyAllWindows()
`,
    `
    First, import the necessary libraries
    
    import pandas as pd
    from sklearn.model_selection import train_test_split
    from sklearn.linear_model import LogisticRegression
    from sklearn.metrics import confusion_matrix, classification_report

    Next, load your dataset -
    # Replace 'dataset.csv' with the path to your dataset file
    df = pd.read_csv('dataset.csv')

    Assuming you have identified the feature columns and the target column, prepare your data:
    # Define your features and target
    features = ['feature1', 'feature2', 'feature3']  # Replace with your actual feature names
    target = 'target'  # Replace with your actual target column name

    # Prepare the feature matrix X and the target vector y
    X = df[features]
    y = df[target]

    Split the dataset into training and testing sets:
    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

    Make predictions on the test set:
    # Make predictions on the test set
    y_pred = logreg.predict(X_test)

    Evaluate the model
    # Print the confusion matrix
    print(confusion_matrix(y_test, y_pred))

    # Print the classification report
    print(classification_report(y_test, y_pred))
`,
    `
import numpy as np
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, LSTM
from tensorflow.keras.callbacks import LambdaCallback
from tensorflow.keras.optimizers import RMSprop

# Function to encode the text
def encode_text(text, char_to_idx):
    encoded_text = np.zeros((len(text), len(char_to_idx)), dtype=np.bool)
    for i, char in enumerate(text):
        encoded_text[i, char_to_idx[char]] =  1
    return encoded_text

# Function to decode the text
def decode_text(encoded_text, idx_to_char):
    decoded_text = ""
    for i in range(len(encoded_text)):
        char_index = np.argmax(encoded_text[i])
        decoded_text += idx_to_char[char_index]
    return decoded_text

    # Load your text data here, for example:
    text = """Your text data goes here. It should be long enough to train the model."""

    # Convert the text to lower case and remove punctuation
    text = text.lower().replace('.', '')

    # Create character to index mappings
    chars = sorted(list(set(text)))
    char_to_idx = dict((c, i) for i, c in enumerate(chars))
    idx_to_char = dict((i, c) for i, c in enumerate(chars))

    # Encode the text
    encoded_text = encode_text(text, char_to_idx)
`

];