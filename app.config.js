import {GOOGLE_MAPS_API_KEY} from '@env'

export default {
  expo: {
    name: "Intuactive",
    slug: "intuactive",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "dark",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "cover",
      backgroundColor: "#000000"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: false,
      bundleIdentifier: "com.sizodevelops.Intuactive"
    },
    android: {
      icon: "./assets/adaptive-icon.png",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#000000"
      },
      package: "com.sizodevelops.Intuactive",
      config: {
        googleMaps: {
          apiKey: GOOGLE_MAPS_API_KEY
        }
      },
      permissions: [
        "android.permission.ACCESS_COARSE_LOCATION",
        "android.permission.ACCESS_FINE_LOCATION",
        "android.permission.READ_EXTERNAL_STORAGE",
        "android.permission.WRITE_EXTERNAL_STORAGE",
        "android.permission.ACCESS_MEDIA_LOCATION",
        "android.permission.health.READ_BODY_TEMPERATURE",
        "android.permission.health.READ_BLOOD_PRESSURE",
        "android.permission.health.READ_HEART_RATE",
        "android.permission.health.READ_SLEEP",
       
      ]
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    plugins: [
      "expo-health-connect",
      [
        "expo-location",
        {
          locationAlwaysAndWhenInUsePermission: "Allow Intuactive to use your location."
        }
      ],
      [
        "expo-media-library",
        {
          photosPermission: "Allow Intuactive to access your photos.",
          savePhotosPermission: "Allow Intuactive to save photos.",
          isAccessMediaLocationEnabled: true
        }
      ],
      [
        "expo-build-properties",
        {
          "android": {
            "compileSdkVersion": 34,
            "targetSdkVersion": 35,
            "minSdkVersion": 26
          },
        }
      ],
      [
        "expo-notifications",
        {
          "icon": "./assets/adaptive-icon.png",
          "color": "#ffffff",
          "defaultChannel": "default",
          
        }
      ]
    
    ],
    extra: {
      eas: {
        projectId: "dc25a065-297c-4c64-aebb-e00c623dca51"
      }
    }
  }
};
