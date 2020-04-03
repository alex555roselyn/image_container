package com.example.api_insert;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;





@SpringBootApplication
public class ApiInsertApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiInsertApplication.class, args);
	}

}
