Elasticsearch: Elasticsearch is a distributed, RESTful search and analytics engine built on top of Apache Lucene. It provides a scalable and near real-time search platform with powerful full-text search capabilities, as well as support for aggregations and analytics. Elasticsearch is commonly used for log and event data analysis, application search, and various other use cases that require high-performance searching and indexing capabilities.

Logstash: Logstash is a flexible, server-side data processing pipeline that ingests, processes, and forwards data to various outputs, including Elasticsearch. Logstash supports multiple input sources, such as log files, databases, and message queues, and can transform and enrich data using filters before forwarding it. Logstash is often used to collect and normalize logs and events from various sources, making it easier to analyze and visualize the data in Elasticsearch.

Kibana: Kibana is a web-based data visualization and exploration tool that provides a user interface for interacting with Elasticsearch data. Kibana offers various visualization types, such as bar charts, line charts, pie charts, and maps, as well as support for creating custom dashboards to display and analyze data. Kibana also includes features such as Dev Tools for Elasticsearch query testing, monitoring, and alerting capabilities, and machine learning integration.

Filebeat: Filebeat is a logging agent installed on the machine generating the log files, tailing them, and forwarding the data to either Logstash for more advanced processing or directly into Elasticsearch for indexing.

Prometheus: Prometheus is an open source monitoring solution written in Go that collects metrics data and stores that data in a time series database. It was originally built by SoundCloud in 2012 and became part of the Cloud Native Computing Foundation (CNCF) in 2016. It uses PromQL, a powerful query language for querying your time series data.

Grafana: Grafana is an open-source analytics and interactive visualization web application used for monitoring application performance. It allows users to ingest data from a wide range of sources, query and display it in customizable charts, set alerts for abnormal behavior, and visualize data on dashboards.

Process to setup Central Log Management using ELK Stack

1. First up the ELK and application containers using "docker compose up"
2. Hit the endpoints 4 endpoints of 2 microservices using the api-gateway.

PRODUCTS:

Success: http://localhost:3000/products/success/
Failure: http://localhost:3000/products/failure/

PAYMENTS:

Success: http://localhost:3000/payments/success/
Failure: http://localhost:3000/payments/failure/

3. Go to "http://localhost:9200/\_cat/indices?v" and check if the log-\* is visible. (Logstash index in Elasticsearch)
4. Go to "http://localhost:5601/app/home#/" which opens up Kibana for you.
5. In Kibana, go to "Stack Management" & click on "Index Patterns" under Kibana.
6. Click on "Create Index Pattern" and hence create the index pattern with "name" & "@timestamp".
7. In Kibana, go to "Discover" under "Analytics" and check your logs. You can also select specific fields from left pane.

Process to setup Container Monitoring & Container Host Monitoring using Prometheus, Grafana, Node Exporter & CAdvisor

1. Go to "http://localhost:9090/" and check if your Prometheus container is running.
2. Go to "http://localhost:4090/" and check if you can see Grafana login screen.
3. Login in Grafana using default credentials. (You may change the default credentials)
4. In homescreen of Grafana, click on "Add data source" and then select "Prometheus".
5. Provide prometheus server url. (http://prometheus:9090/)
6. Click on Save & Test. Now, data source is added.
7. Once done, click on "Create Your First Dashboard".
8. Import node exporter(1860) dashboard id from "Grafana Dashboards" (https://grafana.com/grafana/dashboards/) and put it under import + select prometheus.
9. Click on "Import"
10. Repeat step 8 & 9 for cAdvisor(14282) dashboard as well.
11. Now both dashboards will appear under "Home > Dashboard". (http://localhost:4090/dashboards)
