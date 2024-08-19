package com.ofss.main.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.ofss.main.domain.Account;
import com.ofss.main.domain.Customer;
import com.ofss.main.domain.Transaction;

import com.ofss.main.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService{
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Override
	public int loginUser(Customer customer) {
		List<Customer> allCustomers = (List<Customer>) customerRepository.findAll();
		   // Iterate through the customers
	    for (Customer existingCustomer : allCustomers) {
	    	System.out.println(existingCustomer);
	        // Check if the email matches
	        if (existingCustomer.getEmail().equals(customer.getEmail()) && existingCustomer.getPassword().equals(customer.getPassword())) {
	            // If a match is found, return "success"
	        	System.out.println("Sucess");
	            return existingCustomer.getCustomerId();
	        }
	    }
	    // If no match is found, return "failure"
	    return 0;
		
	}

    @Override
    public List<Customer> getAllUserAccounts() {
        return (List<Customer>) customerRepository.findAll();
    }


	@Override
	public Customer addNewUser(Customer customer) {
		return customerRepository.save(customer);
	}
    
    
//    @Override
//    public Account createNewAccount(Account account) {
//        return accountRepository.save(account);
//    }


	
//    @Override
//    public boolean depositToAccount(int account_id, double depositAmount,Account account) {
//        return customerRepository.depositToAccount(account_id, depositAmount,account);
//    }
//
//    @Override
//    public boolean withdrawfromAccount(int account_id, double withdrawAmount, Account account) {
//        return customerRepository.withdrawfromAccount(account_id, withdrawAmount, account);
//    }

//    @Override
//    public boolean createNewTransaction(Transaction transaction) {
//        return customerRepository.createNewTransaction(transaction);
//    }


}
