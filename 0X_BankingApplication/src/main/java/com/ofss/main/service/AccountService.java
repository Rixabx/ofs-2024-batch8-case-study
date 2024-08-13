package com.ofss.main.service;

import java.util.List;

import com.ofss.main.domain.Account;
import com.ofss.main.domain.Transaction;
public interface AccountService {
	List<Account> getAllAccount(int customerId);
	boolean updateBalance(Account account);
	String CreateAccount(Account account);
}
