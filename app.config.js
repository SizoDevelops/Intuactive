import * as dotenv from 'dotenv';

dotenv.config();

export default ({ config }) => ({
  ...config,
  slug: 'intuactive',
  name: 'Intuactive',
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
    config: {
      googleMaps: {
        apiKey: process.env.GOOGLE_CLOUD_API_KEY,
      },
    },
  },
});