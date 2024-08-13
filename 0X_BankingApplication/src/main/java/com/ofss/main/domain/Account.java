package com.ofss.main.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "account_details")
public class Account {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "account_id")
    private int accountId;
    private long Customer_id;
    private String accountType;
    private double balance;
    private float interest_rate;


    public Account() {
    }

    public Account(int accountId,String accountType,long Customer_id) {
        this.accountId = accountId;
        this.Customer_id = Customer_id;
        this.accountType = accountType;
    }
    public Account(int accountId, String accountType, double balance,float interest_rate,long Customer_id) {
        this.accountId = accountId;
        this.Customer_id = Customer_id;
        this.accountType = accountType;
        this.balance = balance;
        this.interest_rate = interest_rate;
    }

    

    public float getinterest_rate() {
        return interest_rate;
    }

    public void setinterest_rate(float interest_rate) {
        this.interest_rate = interest_rate;
    }


    public int getAccountId() {
        return accountId;
    }

    public void setAccountId(int accountId) {
        this.accountId = accountId;
    }

    public long getCustomer_id() {
        return Customer_id;
    }

    public void setCustomer_id(long customer_id) {
        Customer_id = customer_id;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    @Override
    public String toString() {
        return "Account [accountId=" + accountId + ", customerId=" + Customer_id + ", accountType=" + accountType
                + ", balance=" + balance +", interest_rate"+ interest_rate+"]";
    }

}
