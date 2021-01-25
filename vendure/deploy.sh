#!/bin/bash
export ENV_VARS=$(paste -sd, .env)
gcloud run deploy shops-api \
            --quiet \
            --image "eu.gcr.io/wormenkwekerijwasse/vendure:latest" \
            --region "europe-west1" \
            --platform "managed" \
            --allow-unauthenticated \
            --memory=1G \
            --project=wormenkwekerijwasse \
            --set-env-vars=$ENV_VARS
