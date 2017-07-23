import com.groovycoder.spockdockerextension.Testcontainers
import spock.lang.Specification

@Testcontainers
class MyFirstSpec extends Specification{

    def "EXAMPLE TEST"(){
        when:
        name.size() == length

        then:
        name        | length
        "Spock"     |   5
        "Spoc"      |   4
        "Spockk"    |   6

    }
}
