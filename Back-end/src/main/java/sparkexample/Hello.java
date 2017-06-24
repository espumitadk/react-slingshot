package sparkexample;

import static spark.Spark.get;
import static spark.Spark.options;
import static spark.Spark.before;

public class Hello {

    public static void main(String[] args) {
        enableCORS("http://localhost:3000","GET, POST","accept, content-type");

        get("/", "application/json", (request, response) -> {
            String state = request.queryParams("state");
            return state;
        });
    }

    private static void enableCORS(final String origin, final String methods, final String headers) {

        options("/*", (request, response) -> {

            String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
            }

            String accessControlRequestMethod = request.headers("Access-Control-Request-Method");
            if (accessControlRequestMethod != null) {
                response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
            }

            return "OK";
        });

        before((request, response) -> {
            response.header("Access-Control-Allow-Origin", origin);
            response.header("Access-Control-Request-Method", methods);
            response.header("Access-Control-Allow-Headers", headers);
            response.type("application/json");
        });
    }
}