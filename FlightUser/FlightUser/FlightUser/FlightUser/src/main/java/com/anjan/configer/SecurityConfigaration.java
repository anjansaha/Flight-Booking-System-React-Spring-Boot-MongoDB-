//package com.anjan.configer;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
//
//public class SecurityConfigaration extends WebSecurityConfigurerAdapter {
//protected void configure(HttpSecurity http) throws Exception {
//		
//		http
//		.csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
//		.and()
//		.authorizeRequests((requests) -> requests.antMatchers("/home").permitAll()
//				.antMatchers("/").hasRole("")
//				.anyRequest()
//				.authenticated());
//			
//			http.formLogin();
//			http.httpBasic();
//				
//	}
//	
//	@Override
//	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		auth.inMemoryAuthentication().withUser("Jon").password(this.passwordEncoder().encode("1234")).roles("NORMAL");
//		auth.inMemoryAuthentication().withUser("ron").password(this.passwordEncoder().encode("5678")).roles("ADMIN");
//	}
//	@Bean
//	public PasswordEncoder passwordEncoder() {
//		return new BCryptPasswordEncoder(10);
//	}
//}
