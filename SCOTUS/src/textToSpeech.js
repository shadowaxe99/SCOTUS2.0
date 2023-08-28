import axios from 'axios';

const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const apiUrl = 'https://texttospeech.googleapis.com/v1/text:synthesize';

async function convertTextToSpeech(text) {
  const requestBody = {
    input: { text },
    voice: { languageCode: 'en-US', ssmlGender: 'FEMALE' },
    audioConfig: { audioEncoding: 'MP3' }
  };

  try {
    const response = await axios.post(`${apiUrl}?key=${apiKey}`, requestBody);
    const audioContent = response.data.audioContent;
    // Save the audioContent or play it using a media player
  } catch (error) {
    console.error('Error converting text to speech:', error);
  }
}

export default convertTextToSpeech;