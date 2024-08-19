package com.ofss.main.domain;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "account_details")
public class Account {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "account_id")
    private int accountId;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "customer_id")
    private Customer customer;
	@Column(name = "account_type")
    private String accountType;
	@Column(name = "balance")
    private double balance;
	@Column(name = "interest_rate")
    private float interest_rate;


    public Account() {
    }

    public Account(int accountId,String accountType,Customer customer) {
        this.accountId = accountId;
        this.customer = customer;
        this.accountType = accountType;
    }
    public Account(int accountId, String accountType, double balance,float interest_rate,Customer customer) {
        this.accountId = accountId;
        this.customer = customer;
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

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
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
        return "Account [accountId=" + accountId + ", customerId=" + customer + ", accountType=" + accountType
                + ", balance=" + balance +", interest_rate"+ interest_rate+"]";
    }

}
