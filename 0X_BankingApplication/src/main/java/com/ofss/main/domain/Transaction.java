package com.ofss.main.domain;



public class Transaction {
    private int transactionId;
    private int accountId;
    private int receiver;
    private double amount;


    public Transaction(){

    }

    public Transaction(int transactionId,int accountId){
        this.transactionId = transactionId;
        this.accountId = accountId;

    }
    public Transaction(int transactionId, int accountId, int receiver, double amount) {
        this.transactionId = transactionId;
        this.accountId = accountId;
        this.receiver = receiver;
        this.amount = amount;
    }

    public int getTransactionId() {
        return transactionId;
    }
    public void setTransactionId(int transactionId) {
        this.transactionId = transactionId;
    }
    public int getAccountId() {
        return accountId;
    }
    public void setAccountId(int accountId) {
        this.accountId = accountId;
    }
    public int getReceiver() {
        return receiver;
    }
    public void setReceiver(int receiver) {
        this.receiver = receiver;
    }
    public double getAmount() {
        return amount;
    }
    public void setAmount(double amount) {
        this.amount = amount;
    }
    
}
