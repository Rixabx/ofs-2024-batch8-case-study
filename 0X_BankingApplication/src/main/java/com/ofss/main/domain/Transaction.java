package com.ofss.main.domain;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "transaction_details")
public class Transaction {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "transaction_id")
    private int transactionId;
	@ManyToOne
	@JoinColumn(name = "account_id")
	private Account sender;
	@ManyToOne
	@JoinColumn(name = "receiverid")
	private Account receiver;
    private double amount;


    public Transaction(){

    }

    public Transaction(int transactionId,Account sender){
        this.transactionId = transactionId;
        this.sender = sender;

    }
    public Transaction(int transactionId, Account sender, Account receiver, double amount) {
        this.transactionId = transactionId;
        this.sender = sender;
        this.receiver = receiver;
        this.amount = amount;
    }

    public int getTransactionId() {
        return transactionId;
    }
    public void setTransactionId(int transactionId) {
        this.transactionId = transactionId;
    }
    public Account getsender() {
        return sender;
    }
    public void setsender(Account sender) {
        this.sender = sender;
    }
    public Account getReceiver() {
        return receiver;
    }
    public void setReceiver(Account receiver) {
        this.receiver = receiver;
    }
    public double getAmount() {
        return amount;
    }
    public void setAmount(double amount) {
        this.amount = amount;
    }
    
}
