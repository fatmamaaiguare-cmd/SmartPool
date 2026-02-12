# 🏊 SmartPool: IoT & Cloud-Connected Intelligent Swimming Pool

[![IoT](https://img.shields.io/badge/IoT-ESP8266-orange.svg)](https://www.espressif.com/)
[![Cloud](https://img.shields.io/badge/Cloud-Firebase%20%26%20GCP-yellow.svg)](https://firebase.google.com/)
[![ML](https://img.shields.io/badge/ML-TensorFlow-ff6f00.svg)](https://www.tensorflow.org/)
[![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-blue.svg)](https://reactjs.org/)

SmartPool is a complete end-to-end solution designed to transform traditional swimming pool management into an automated, intelligent, and connected system. By combining IoT hardware with Cloud Computing and Machine Learning, the system ensures water quality, optimizes energy consumption, and provides real-time monitoring.

## 🌟 Key Features
- **Real-Time Monitoring:** Continuous tracking of water pH, temperature, and water levels using specialized sensors.
- **Automated Pump Control:** Intelligent pump activation based on sensor thresholds to maintain pool health without human intervention.
- **AI Anomaly Detection:** A TensorFlow model with **~92% accuracy** that detects critical anomalies in pool parameters.
- **Cloud Integration:** Data synchronization with **Firebase Realtime Database** and **Firestore** for historical analysis.
- **User Dashboard:** A modern web interface (React + Vite) for remote control and live data visualization.
- **Smart Alerts:** Automated email notifications via **SendGrid** for critical events like low water levels or dangerous pH.

## 🛠️ Tech Stack
- **Hardware:** ESP8266 NodeMCU, HC-SR04 (Ultrasonic), DS18B20 (Temperature), Analog pH Sensor, 5V Relay.
- **Cloud Infrastructure:** Firebase Authentication, Firestore, Cloud Functions, Google AI Platform, and BigQuery.
- **Machine Learning:** TensorFlow (Classifier for anomaly detection).
- **Communication:** Wi-Fi with secure HTTPS protocol.
- **Frontend:** React, Vite, Tailwind CSS, Chart.js.

## 🚀 System Architecture
1. **Acquisition:** ESP8266 collects raw data from sensors[cite: 123, 127].
2. **Processing:** Local logic handles immediate pump control while data is sent to the Cloud.
3. **Analysis:** Google Cloud Functions and AI Platform process data for predictive insights.
4. **Visualization:** Users interact with the system via the Web/Mobile Dashboard.

## 🔧 Installation & Setup

### 1. Hardware Setup
- Connect sensors to the ESP8266 according to the following mapping:
  -**HC-SR04:** TRIG -> D0, ECHO -> D1 
  -**DS18B20:** Data -> D2 [cite: 98]
  -**pH Sensor:** Analog Out -> A0 
  -**Relay:** IN -> D3 

### 2. Firmware
- Navigate to the `/firmware` folder.
- Configure your Wi-Fi credentials and Firebase API keys in the code.
- Upload the C++/Arduino code to the ESP8266.

### 3. Web Application
```bash
cd web-app
npm install
npm run dev
