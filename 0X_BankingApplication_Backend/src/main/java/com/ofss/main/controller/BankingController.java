package com.ofss.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ofss.main.domain.Account;
import com.ofss.main.domain.Customer;
import com.ofss.main.domain.Transaction;
import com.ofss.main.service.AccountService;
import com.ofss.main.service.CustomerService;
import com.ofss.main.service.TransactionService;



@RequestMapping("customerapi")
@RestController
@CrossOrigin(origins = "*")
public class BankingController {
	@Autowired
	private CustomerService customerService;
	
	@Autowired
	private AccountService accountService;
	
	@Autowired
	private TransactionService transactionService;
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
	
	
	@PutMapping("account")
	public String account(@RequestBody Account body) {
		return accountService.CreateAccount(body);
	}
	
	
	@GetMapping("allaccount/{id}")
	public List<Account> account(@PathVariable int id) {
		return accountService.getAllAccount(id);
	}

	
	@PutMapping("deposit")
	public boolean deposit(@RequestBody Account body) {
		return accountService.updateBalance(body);
	}	
	
	@PostMapping("/transfer")
    public ResponseEntity<?> transferFunds(
            @RequestParam("senderAccountId")  int senderAccountId,
            @RequestParam("receiverAccountId") int receiverAccountId,
            @RequestParam("amount") double amount) {

        try {
            Transaction transaction = transactionService.performTransaction(senderAccountId, receiverAccountId, amount);
            return ResponseEntity.ok(transaction);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
