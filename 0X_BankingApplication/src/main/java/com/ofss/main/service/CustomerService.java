package com.ofss.main.service;

import java.util.List;


import com.ofss.main.domain.Customer;



public interface CustomerService {
		public List<Customer> getAllUserAccounts();
		public Customer addNewUser(Customer customer);
		public int loginUser(Customer customer);
//		public Account createNewAccount(Account account);
//		public boolean depositToAccount(int account_id,double depositAmount,Account account);
//		public boolean withdrawfromAccount(int account_id,double withdrawAmount,Account account);
//		public boolean createNewTransaction(Transaction transaction);
}
