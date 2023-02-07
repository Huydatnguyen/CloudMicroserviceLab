# CloudMicroserviceLab
Name: Huy Dat NGUYEN

Email: <huy-dat.nguyen@etu.univ-grenoble-alpes.fr>

Github ID: Huydatnguyen

Master 2 MOSIG

**Lab on Microservices – Pratices with Jhipster**

I. **Introduction**

The objective of the practical session is to be more familiar and get acquainted with the way to construct a microservice application with Jhipster tool and the way to deploy the application on some cloud platform such as Google Cloud Platform (GCP). This lab is also an oppoturnity to recall, pratice and learn more about the concept of Kuberneters, Docker, which was introduced in the previous lab. 

The first stage is to generate and deploy locally a microservice application with Jhipster. The architecture is composed of:

- The Jhipster Sercive Registry (Service discovery uses Haezlcast).
- The Jhipster API Gateway.
- One microsevice productorder (using a mysql database).
- One microsevice invoice (using a postgresql database).
- One microsevice notification (using a mongodb database).

After generating and browsering microservices, we need to build Docker images corresponding with each service and generate a Docker-compose file for configuring the running of all microservices at one time. 

The next stage is to deploy the application on Google Kubernetes Engine (an open-source container orchestration system for automating software deployment, scaling and mangement , a part of GCP) using Docker images generated from previous stage and perform a scalability for one microservice and monitor dashboard through Promethous/Grafana or GCP dashboard.

The result is to provide some screenshots illustrating the deployment of the microservice application on GKE and the way to enable scalability on GKE and the way to monitor the dashboard.


II. **Result**
1. **Deployment of Microservices with JHipster on GCP**

![services](https://user-images.githubusercontent.com/116315166/217358051-2e840f57-6e55-4a50-a9f5-f5b899bf64e3.JPG)

Picture 1: List of services



![pods](https://user-images.githubusercontent.com/116315166/217358137-9716272a-83ad-47fd-b1eb-29d08a17bbc2.JPG)

Picture 2: List of pods



![interface](https://user-images.githubusercontent.com/116315166/217358207-2caaf51c-f3b3-427e-8ab4-7a4f5efe905e.JPG)

Picture 3: Application interface deployed with assigned IP from GCP

2. **Enabling scalability on GCP for one microservice**

![scalability](https://user-images.githubusercontent.com/116315166/217358502-f2c1b6de-1122-40e3-9a09-967438b68223.JPG)

Picture 4: Enabling the scalability

![replicas](https://user-images.githubusercontent.com/116315166/217358571-c5173d22-30a2-4222-827f-5f7c17e86a4e.JPG)

Picture 5: Enabling the scalability

3. **Monitoring dashboard** 

   3.1. Dashboard metrics scraper

![metric-scraper](https://user-images.githubusercontent.com/116315166/217358617-bc875849-33e6-4900-a996-3add1dabddac.JPG)

Picture 6: Monitoring the dashboard with the Dashboard metrics scraper

   3.2. Kubernetes dashboard

![kubernetes-dashboard](https://user-images.githubusercontent.com/116315166/217358659-f044159d-3acb-4f2c-924f-92515b17cc4f.JPG)

Picture 7: Monitoring the dashboard with the Kubernetes Dashboard
