 - Cloud Provider - GCP

- party-api (code repository): https://github.com/parulgohil27/party-api.git

- kubernetes yaml files are stored at : party-api/manifest
    api-rollingupdate.yaml - yaml file for API deployment to showcase rolling update
    api.yaml - yaml file for API Deployment 
    config.yaml - yaml file for ConfigMap 
    db.yaml - yaml file for MYSQL DB Deployment 
    pv.yaml - yaml file for PersistentVolume
    pvc.yaml - yaml file for PersistentVolumeClaim
    secrets.yaml - yaml file for Secrets

- Docker image is uploaded in Dockerhub : 
    docker pull parulgohil27/partyapi
    https://hub.docker.com/r/parulgohil27/partyapi/tags

- I have used Artifact Registry (Gcloud bucket storage) to build API image : https://console.cloud.google.com/artifacts/docker/nagp2024-424905/us-central1/api-repo/partyapi-gke?hl=en&project=nagp2024-424905

- OneDrive link for recording : https://nagarro-my.sharepoint.com/:v:/p/parul_gohil/EXyr0FT6uPdIlScgy3vg9HkBabjeKUxTYkKBrUX_IpZmtQ?e=Klm9zX

- Service API Tier URL : http://35.202.144.170:8080/parties
