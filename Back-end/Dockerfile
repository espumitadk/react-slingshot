FROM java:8

RUN apt-get update && apt-get install -y maven

WORKDIR /back-end-app

ADD pom.xml /back-end-app/pom.xml
RUN ["mvn", "dependency:resolve"]
RUN ["mvn", "verify"]

ADD src /back-end-app/src
RUN ["mvn", "package"]

EXPOSE 4567
CMD ["/usr/lib/jvm/java-8-openjdk-amd64/bin/java", "-jar", "target/sparkexample-jar-with-dependencies.jar"]