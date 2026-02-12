# 🏊 SmartPool: Cloud-Connected IoT Intelligent System

[![Python](https://img.shields.io/badge/IoT-ESP8266-blue.svg)](https://www.espressif.com/)
[![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB.svg)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Cloud-Firebase-FFCA28.svg)](https://firebase.google.com/)
[![TensorFlow](https://img.shields.io/badge/AI-TensorFlow-FF6F00.svg)](https://www.tensorflow.org/)

SmartPool is a comprehensive end-to-end IoT solution designed to transform traditional swimming pool maintenance into an automated, intelligent process[cite: 22, 530]. By integrating real-time sensor data with Cloud Computing and Machine Learning, the system ensures optimal water quality, enhanced safety, and energy efficiency[cite: 25, 308].

## 🌟 Key Features
- **Real-Time Monitoring:** Continuous tracking of water pH, temperature, and water levels[cite: 43, 123].
-**Autonomous Control:** Intelligent pump management via a 5V Relay based on sensor thresholds to prevent equipment damage and save energy[cite: 49, 52, 94].
- **AI-Powered Anomaly Detection:** A TensorFlow model with **~92% accuracy** detects chemical imbalances or abnormal physical parameters[cite: 331, 545].
- **Cloud Infrastructure:** Secure data historization and analysis using Firebase and Google Cloud Platform (GCP)[cite: 24, 137, 240].
- **Instant Notifications:** Automated alerts via Email (SendGrid) and Push Notifications when critical thresholds are exceeded[cite: 236, 237, 256].
- **Interactive Dashboard:** A modern Web application for remote control and data visualization[cite: 26, 424].

## 🛠️ Technical Stack

### IoT & Hardware
- **Microcontroller:** ESP8266 NodeMCU[cite: 80].
- **Sensors:** - HC-SR04 (Ultrasonic Water Level)[cite: 85, 144].
  - DS18B20 (Waterproof Temperature)[cite: 86, 160].
  - Analog pH Sensor[cite: 87, 165].
- **Actuators:** 5V Relay for pump control[cite: 93, 94].

### Cloud & Backend
- **Firebase:** Realtime Database, Firestore (NoSQL), Authentication, and Hosting[cite: 245, 246, 248].
- **Google Cloud Platform:** Cloud Functions (Serverless logic), BigQuery (Big Data analytics), and AI Platform[cite: 252, 253, 254].
- **Communication:** Secure HTTPS protocols with API key management[cite: 365, 383, 391].

### Frontend & AI
- [cite_start]**Web App:** React.js, Vite, and Chart.js[cite: 423, 425].
- [cite_start]**Machine Learning:** TensorFlow (Classifier for anomaly detection)[cite: 304, 324].

## 🚀 System Architecture

The system follows a clear functional cycle:
1. **Acquisition:** Sensors gather raw data[cite: 123].
2. **Processing:** ESP8266 converts signals and checks local safety thresholds[cite: 128].
3. **Cloud Sync:** Data is transmitted via Wi-Fi to Firebase[cite: 137].
4. **Analysis:** Google Cloud Functions and AI models analyze trends and detect anomalies[cite: 252, 274].
5. **Action:** Automated relay triggering or user notification via the Web App[cite: 134, 137, 426].

## 📁 Project Structure
- `/iot_firmware`: C++/Arduino code for ESP8266[cite: 564].
- `/web_app`: React + Vite frontend source code[cite: 565].
- `/cloud_functions`: Node.js scripts for backend automation[cite: 566].
- `/ml_model`: TensorFlow training scripts and exported models[cite: 567].

## 🔗 Live Demo & Source
- **GitHub Repository:** [https://github.com/fatma123m/SmartPool](https://github.com/fatma123m/SmartPool) 
- **Live Application:** [https://piscineintelligent.web.app/](https://piscineintelligent.web.app/) [cite: 570]

---
*Developed by Fatma Maaiguare and team as part of the Master ADIA program at Université Ibn Zohr[cite: 5, 9, 17].*
