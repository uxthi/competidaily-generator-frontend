import axios from 'axios';

const getRandomTheme = async () => {
    
    try {
        const { data } = await axios.get('https://rxofuxjdprcwcmyrg3j4sepx7q0qmhwb.lambda-url.us-east-1.on.aws/');
        const theme = data[0].theme;
        return theme;
    } catch (error) {
        console.log(error);
        return error;
    }
    
  };

  export default getRandomTheme;