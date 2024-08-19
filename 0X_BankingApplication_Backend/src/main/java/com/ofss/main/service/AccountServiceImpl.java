package com.ofss.main.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ofss.main.domain.Account;
import com.ofss.main.domain.Customer;
import com.ofss.main.domain.Transaction;
import com.ofss.main.repository.AccountRepository;
import com.ofss.main.repository.CustomerRepository;
import com.ofss.main.repository.TransactionRepository;

@Component
public class AccountServiceImpl implements AccountService{
	
	@Autowired
	private  AccountRepository accountRepository;
	@Autowired
	private  CustomerRepository customerRepository;
	@Autowired
	private  TransactionRepository transactionRepository;

	@Override
	public List<Account> getAllAccount(int customerId) {

		Optional<Customer> customerOptional = customerRepository.findById(customerId);
		if (customerOptional.isPresent()) {
			Customer customer = customerOptional.get();
			List<Account> accounts = accountRepository.findByCustomer(customer);
			System.out.println(accounts);
			return accounts;
		}
		return null;
	}


	@Override
	public boolean updateBalance(Account account) {
	    Optional<Account> accountOptional = accountRepository.findById(account.getAccountId());

	    if (accountOptional.isPresent()) {
	        Account existingAccount = accountOptional.get();

	        double newBalance = existingAccount.getBalance() + account.getBalance();
	        
	        existingAccount.setBalance(newBalance);
	        accountRepository.save(existingAccount);
	        return true;
	    }

	
	    return false;
	}



	@Override
	public String CreateAccount(Account account) {
		Account accountss = accountRepository.save(account);
		return "Account Created id:" + accountss.getAccountId();
	}



}
