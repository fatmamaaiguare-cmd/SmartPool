# 🏊 SmartPool: IoT & Cloud-Connected Intelligent Swimming Pool

[![IoT](https://img.shields.io/badge/IoT-ESP8266-orange.svg)](https://www.espressif.com/)
[![Cloud](https://img.shields.io/badge/Cloud-Firebase%20%26%20GCP-yellow.svg)](https://firebase.google.com/)
[![ML](https://img.shields.io/badge/ML-TensorFlow-ff6f00.svg)](https://www.tensorflow.org/)
[![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-blue.svg)](https://reactjs.org/)

[cite_start]SmartPool is a complete end-to-end solution designed to transform traditional swimming pool management into an automated, intelligent, and connected system[cite: 5, 19, 530]. [cite_start]By combining IoT hardware with Cloud Computing and Machine Learning, the system ensures water quality, optimizes energy consumption, and provides real-time monitoring[cite: 22, 25, 546].

🏊 SmartPool: Intelligent IoT & Cloud Pool Management

SmartPool est une solution complète visant à transformer la gestion manuelle des piscines en un système intelligent et autonome. Ce projet illustre la convergence de l'IoT, du Cloud Computing et du Machine Learning pour garantir la qualité de l'eau et optimiser la consommation énergétique.
+3

🌟 Caractéristiques Clés

Surveillance en Temps Réel : Mesure continue du pH, de la température et du niveau d'eau.


Contrôle Automatique : Activation intelligente de la pompe via un relais selon des seuils définis.
+2


Intelligence Artificielle : Détection d'anomalies avec un modèle TensorFlow atteignant 92% de précision.
+1


Alertes Intelligentes : Notifications automatiques envoyées par e-mail via SendGrid en cas de valeurs critiques.
+1


Interface Web & Mobile : Dashboard développé avec React et Vite pour visualiser les données et contrôler la pompe à distance.
+2

🛠️ Stack Technique

Hardware : ESP8266 NodeMCU, capteur ultrasonique HC-SR04, capteur de température DS18B20 et capteur de pH analogique.
+1


Cloud (Firebase & GCP) : Realtime Database pour la synchronisation instantanée, Cloud Functions pour le traitement serverless et BigQuery pour l'analyse statistique.
+2


Machine Learning : Modèle de classification binaire (normal / anomalie) entraîné avec TensorFlow.


Sécurité : Communication sécurisée via le protocole HTTPS et authentification des utilisateurs via Firebase Authentication.
+2

🚀 Installation & Configuration

Montage Physique : Connectez les capteurs à l'ESP8266 (HC-SR04 sur D0/D1, DS18B20 sur D2, pH sur A0 et Relais sur D3).


Firmware : Configurez vos identifiants Wi-Fi et vos clés API Firebase dans le code Arduino/C++.

3 Application Web :

cd smartpool-web
npm install
npm run dev
