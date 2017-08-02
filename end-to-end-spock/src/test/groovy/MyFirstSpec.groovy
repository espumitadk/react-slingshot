import com.groovycoder.spockdockerextension.Testcontainers
import org.testcontainers.containers.GenericContainer
import redis.clients.jedis.Jedis
import spock.lang.Shared
import spock.lang.Specification

@Testcontainers
class MyFirstSpec extends Specification{

    @Shared
    private GenericContainer redisContainer = new GenericContainer("redis:3.0.6")
                                                         .withExposedPorts(6379)

    def "EXAMPLE REDIS CONTAINER TEST"(){
        given:
        Jedis redisClient = new Jedis(redisContainer.getContainerIpAddress(), redisContainer.getMappedPort(6379))
        redisClient.set("name","DAVID")

        when:
        String value = redisClient.get("name")

        then:
        value == "DAVID"
    }
}


