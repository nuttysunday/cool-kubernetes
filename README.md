# cool-kubernetes

1. First had a monotlithic architecture, which had two dummy services called serviceA and service B, which would be triggered after request to that respective endpoint is made.

2. Distributing them into microservices so that they can be scaled independently.

3. Autoscale each service depending upon the load.

#grafana
#kubernetes

kubectl (cmd tool to interact with the k8 cluster)
minikube (to start a k8 one cluster locally)

docker engine up

minikube start

minikube dashboard

To start the dashboard
kubectl proxy  

deployement:- desired state of application.
hpa:- automatically scale the number of pods based on CPU usage.
service:- network service that expose the app (pods) externally

kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml

kubectl create serviceaccount dashboard -n kubernetes-dashboard

kubectl create clusterrolebinding dashboard-admin -n kubernetes-dashboard --clusterrole=cluster-admin --serviceaccount=kubernetes-dashboard:dashboard

kubectl -n kubernetes-dashboard create token dashboard

kubectl proxy

http://127.0.0.1:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/

eyJhbGciOiJSUzI1NiIsImtpZCI6IlVtX2xPNXJfVGM3TE1Mcl9qREZrNWxEeUE2WnB3bGFySXNmM3daX3NfQjQifQ.eyJhdWQiOlsiaHR0cHM6Ly9rdWJlcm5ldGVzLmRlZmF1bHQuc3ZjLmNsdXN0ZXIubG9jYWwiXSwiZXhwIjoxNzMxNzg2ODY2LCJpYXQiOjE3MzE3ODMyNjYsImlzcyI6Imh0dHBzOi8va3ViZXJuZXRlcy5kZWZhdWx0LnN2Yy5jbHVzdGVyLmxvY2FsIiwianRpIjoiY2VhZDA2NzAtNTQ3OS00ZjhkLWI4YTItMTdkNzRkYjg2YzlhIiwia3ViZXJuZXRlcy5pbyI6eyJuYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsInNlcnZpY2VhY2NvdW50Ijp7Im5hbWUiOiJkYXNoYm9hcmQiLCJ1aWQiOiJiOTViODQyNS1mNzc0LTRkNDgtODExZC0yYzI1YjAzMmU3ZGMifX0sIm5iZiI6MTczMTc4MzI2Niwic3ViIjoic3lzdGVtOnNlcnZpY2VhY2NvdW50Omt1YmVybmV0ZXMtZGFzaGJvYXJkOmRhc2hib2FyZCJ9.QObE-MxNg4VNen6aUWX9mEbl2wdbrjinbV0-hDTAv7CgKbVM5HlJ5ZkvNAnPT36XPJXlO7pBiRfXZajqzB9cZ2-z8ti8-h9CO4l5W5qgs3X2FMkgE2B6po4-ulZk33G1TI2ccamp8NFXIkqyJxfWl5eBv0Y_44hvHmYl6VZgwddlqT-k-7Ir5f8g0BKR0ljcE336xL3J3WVOas3Yfx-OlWQB1x5G087OfGTZGBoa8T0U9ItJQBuA6klWCDv5oKvjCiu6jGdASCi2FC4eRGbKYvZ-LF6U9SuFGmjFkBk8yz-5vMveCmhbEBfvYKyjK_3gCjOqxNOPR_BBvn6cvx7_TQ


kubectl -n kubernetes-dashboard create token dashboard