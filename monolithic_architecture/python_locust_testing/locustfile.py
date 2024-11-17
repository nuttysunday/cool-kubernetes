from locust import HttpUser, task

class HelloWorldUser(HttpUser):
    @task
    def hello_world(self):
        self.client.get("/")
        
# 1 CPU = 1000m

# 5 % of cpu = 50m
# 10 % of CPU = 100m