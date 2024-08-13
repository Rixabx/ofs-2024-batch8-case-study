package com.ofss.main.service;

import com.ofss.main.domain.Transaction;

public interface TransactionService {
	public Transaction performTransaction(int senderAccountId, int receiverAccountId, double amount);
}
