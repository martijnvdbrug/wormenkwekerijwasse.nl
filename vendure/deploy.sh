#!/bin/bash
export ENV_VARS=$(paste -sd, .env)
gcloud run deploy vendure \
            --quiet \
            --image "eu.gcr.io/wormenkwekerijwasse/vendure:latest" \
            --region "europe-west4" \
            --platform "managed" \
            --allow-unauthenticated \
            --memory=1G \
            --project=wormenkwekerijwasse \
            --set-env-vars=$ENV_VARS
