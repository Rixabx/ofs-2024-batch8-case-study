package com.ofss.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ofss.main.domain.Customer;
import com.ofss.main.service.CustomerService;



@RequestMapping("customerapi")
@RestController
@CrossOrigin(origins = "*")
public class BankingController {
	@Autowired
	private CustomerService customerService;
	
	@PostMapping("customers")
	public Customer AddNewCutomerToDB(@RequestBody Customer customer) {
		return customerService.addNewUser(customer);
	}
	
	@GetMapping("getcustomers")
	public List<Customer> getAllCustomerFromDB() {
		return customerService.getAllUserAccounts();
	}
	
	@PostMapping("login")
	public int LoginCustomer(@RequestBody Customer customer) {
		return customerService.loginUser(customer);
	}
	
	
}
