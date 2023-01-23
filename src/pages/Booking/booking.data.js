const Data = [
  {
    title: "LET'S MATCH YOU WITH THE RIGHT THERAPIST",
    paragraph:
      "Please fill out this short questionnaire to provide some general and anonymous background about you and the issues you'd like to deal with in online therapy. It would help us match you with the most suitable therapist for you.",
    question: 'What Type Of Counseling Are You Looking For?',
    type: 'button',
    answers: [
      { id: '1', value: 'Individual counseling' },
      { id: '2', value: 'Teen counseling (for my child)' },
    ],
    btnValue: 'Next',
  },
  {
    title: "LET'S MATCH YOU WITH THE RIGHT THERAPIST",
    paragraph:
      "Please fill out this short questionnaire to provide some general and anonymous background about you and the issues you'd like to deal with in online therapy. It would help us match you with the most suitable therapist for you.",
    question: 'What Is Your Relationship S tatus?',
    type: 'button',
    answers: [
      { id: '1', value: 'Single' },
      { id: '2', value: 'Married' },
      { id: '3', value: 'Divorced' },
    ],
    btnValue: 'Next',
  },
  {
    title: "LET'S MATCH YOU WITH THE RIGHT THERAPIST",
    paragraph:
      "Please fill out this short questionnaire to provide some general and anonymous background about you and the issues you'd like to deal with in online therapy. It would help us match you with the most suitable therapist for you.",
    question: 'Have You Ever Been In Therapy Before?',
    type: 'button',
    answers: [
      { id: '1', value: 'Yes' },
      { id: '2', value: 'No' },
    ],
    btnValue: 'Next',
  },
  {
    title: "LET'S MATCH YOU WITH THE RIGHT THERAPIST",
    paragraph:
      "Please fill out this short questionnaire to provide some general and anonymous background about you and the issues you'd like to deal with in online therapy. It would help us match you with the most suitable therapist for you.",
    question:
      "Are There Any Specific Qualities That You'd like In A Counselor?",
    type: 'radio',
    answers: [
      { id: '1', value: 'I prefer a male counselor' },
      { id: '2', value: 'I prefer a female counselor' },
      { id: '3', value: 'I prefer an older counselor (45+)' },
      { id: '4', value: 'I prefer a non-religious counselor' },
    ],
    btnValue: 'Next',
  },
  {
    title: "LET'S MATCH YOU WITH THE RIGHT THERAPIST",
    question: "Are there any issues you'd like to focus on?",
    paragraph:
      "Please fill out this short questionnaire to provide some general and anonymous background about you and the issues you'd like to deal with in online therapy. It would help us match you with the most suitable therapist for you.",
    type: 'radio',
    answers: [
      { id: '1', value: 'Depression' },
      { id: '2', value: 'Stress and Anxiety' },
      { id: '3', value: 'Relationship issues' },
      { id: '4', value: 'Family conflicts' },
      { id: '5', value: 'Trauma and abuse' },
      { id: '6', value: 'Eating disorders' },
    ],
    btnValue: 'Next',
  },
  {
    title: 'What brings you here?',
    paragraph:
      "Please specify (in a few sentences) why you'd like counseling. This will give your counselor a good understanding of where to start.",
    question: 'What brings you here?',
    type: 'textarea',
    btnValue: 'Next',
  },
  {
    title: 'Submit your appointment',
    paragraph: 'Click Submit if you are sure of all your choices.',
    question: 'Submit Appointment?',
    message: 'Please be aware that this action will cost you a ticket!',
    btnValue: 'Submit',
  },
  {
    title: 'your request has been submitted!',
    paragraph:
      'You will receive an email guiding you to book a date and time soon.',
    question: 'request submitted',
    message:
      'you will receive a confirmation email soon please keep an eye on your mail.',
    btnValue: 'Back to home',
  },
];

export default Data;
