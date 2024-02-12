package ru.yaroslavfd.reactsushishopback;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@OpenAPIDefinition(
		info = @Info(
				title = "Магазин Суши",
				version = "01.000.00",
				contact = @Contact(
						email = "yaroslav.web9@gmail.com",
						name = "Yaroslav"
				)
		)
)


@SpringBootApplication
public class ReactSushiShopBackApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReactSushiShopBackApplication.class, args);
	}

}
