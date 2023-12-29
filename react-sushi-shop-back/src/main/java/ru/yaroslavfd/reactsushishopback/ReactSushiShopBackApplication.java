package ru.yaroslavfd.reactsushishopback;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.freemarker.FreeMarkerAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jms.JmsAutoConfiguration;

@OpenAPIDefinition(
		info = @Info(
				title = "",
				version = "",
				contact = @Contact(
						email = "",
						name = ""
				)
		)
)


@SpringBootApplication(exclude = {
		DataSourceAutoConfiguration.class,
		FreeMarkerAutoConfiguration.class,
		JmsAutoConfiguration.class
})
public class ReactSushiShopBackApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReactSushiShopBackApplication.class, args);
	}

}
