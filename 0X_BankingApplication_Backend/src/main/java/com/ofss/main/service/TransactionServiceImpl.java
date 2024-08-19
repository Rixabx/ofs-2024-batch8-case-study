package com.ofss.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ofss.main.domain.Account;
import com.ofss.main.domain.Transaction;
import com.ofss.main.repository.AccountRepository;
import com.ofss.main.repository.TransactionRepository;

@Service
public class TransactionServiceImpl implements TransactionService{

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private AccountRepository accountRepository; // Assuming you have an AccountRepository

    @Transactional
    public Transaction performTransaction(int senderAccountId, int receiverAccountId, double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Amount must be greater than zero");
        }

        Account sender = accountRepository.findById(senderAccountId)
                .orElseThrow(() -> new IllegalArgumentException("Sender account not found"));
        Account receiver = accountRepository.findById(receiverAccountId)
                .orElseThrow(() -> new IllegalArgumentException("Receiver account not found"));

        if (sender.getBalance() < amount) {
            throw new IllegalArgumentException("Insufficient balance in sender's account");
        }
        sender.setBalance(sender.getBalance() - amount);
        receiver.setBalance(receiver.getBalance() + amount);

        accountRepository.save(sender);
        accountRepository.save(receiver);

        // Create and save transaction record
        Transaction transaction = new Transaction();
        transaction.setsender(sender);
        transaction.setReceiver(receiver);
        transaction.setAmount(amount);

        return transactionRepository.save(transaction);
    }
}

