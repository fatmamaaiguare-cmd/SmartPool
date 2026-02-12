# 🏊 SmartPool: IoT & Cloud-Connected Intelligent Swimming Pool

[![IoT](https://img.shields.io/badge/IoT-ESP8266-orange.svg)](https://www.espressif.com/)
[![Cloud](https://img.shields.io/badge/Cloud-Firebase%20%26%20GCP-yellow.svg)](https://firebase.google.com/)
[![ML](https://img.shields.io/badge/ML-TensorFlow-ff6f00.svg)](https://www.tensorflow.org/)
[![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-blue.svg)](https://reactjs.org/)

[cite_start]SmartPool is a complete end-to-end solution designed to transform traditional swimming pool management into an automated, intelligent, and connected system[cite: 5, 19, 530]. [cite_start]By combining IoT hardware with Cloud Computing and Machine Learning, the system ensures water quality, optimizes energy consumption, and provides real-time monitoring[cite: 22, 25, 546].

## 🌟 Key Features
- [cite_start]**Real-Time Monitoring:** Continuous tracking of water pH, temperature, and water levels using specialized sensors[cite: 43, 533].
- [cite_start]**Automated Pump Control:** Intelligent pump activation based on sensor thresholds to maintain pool health without human intervention[cite: 49, 52, 191].
- [cite_start]**AI Anomaly Detection:** A TensorFlow model with **~92% accuracy** that detects critical anomalies in pool parameters[cite: 331, 450, 537].
- [cite_start]**Cloud Integration:** Data synchronization with **Firebase Realtime Database** and **Firestore** for historical analysis[cite: 24, 228, 246].
- [cite_start]**User Dashboard:** A modern web interface (React + Vite) for remote control and live data visualization[cite: 26, 423, 536].
- [cite_start]**Smart Alerts:** Automated email notifications via **SendGrid** for critical events like low water levels or dangerous pH[cite: 237, 256, 451].

## 🛠️ Tech Stack
- [cite_start]**Hardware:** ESP8266 NodeMCU, HC-SR04 (Ultrasonic), DS18B20 (Temperature), Analog pH Sensor, 5V Relay[cite: 80, 85, 87, 94].
- [cite_start]**Cloud Infrastructure:** Firebase Authentication, Firestore, Cloud Functions, Google AI Platform, and BigQuery[cite: 244, 250, 253, 277].
- [cite_start]**Machine Learning:** TensorFlow (Classifier for anomaly detection)[cite: 304, 324].
- [cite_start]**Communication:** Wi-Fi with secure HTTPS protocol[cite: 137, 365, 383].
- [cite_start]**Frontend:** React, Vite, Tailwind CSS, Chart.js[cite: 423, 425].

## 🚀 System Architecture
1. [cite_start]**Acquisition:** ESP8266 collects raw data from sensors[cite: 123, 127].
2. [cite_start]**Processing:** Local logic handles immediate pump control while data is sent to the Cloud[cite: 128, 134, 137].
3. [cite_start]**Analysis:** Google Cloud Functions and AI Platform process data for predictive insights[cite: 139, 252, 275].
4. [cite_start]**Visualization:** Users interact with the system via the Web/Mobile Dashboard[cite: 264, 426].

## 🔧 Installation & Setup

### 1. Hardware Setup
- Connect sensors to the ESP8266 according to the following mapping:
  - [cite_start]**HC-SR04:** TRIG -> D0, ECHO -> D1 [cite: 98]
  - [cite_start]**DS18B20:** Data -> D2 [cite: 98]
  - [cite_start]**pH Sensor:** Analog Out -> A0 [cite: 98]
  - [cite_start]**Relay:** IN -> D3 [cite: 98]

### 2. Firmware
- Navigate to the `/firmware` folder.
- [cite_start]Configure your Wi-Fi credentials and Firebase API keys in the code[cite: 361, 389].
- [cite_start]Upload the C++/Arduino code to the ESP8266.

### 3. Web Application
```bash
cd web-app
npm install
npm run dev
