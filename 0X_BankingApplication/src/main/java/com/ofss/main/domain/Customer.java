package com.ofss.main.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "customer_details")
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "customer_id")
    private int customerId;
	@Column(name = "first_name")
    private String firstName;
	@Column(name = "last_name")
    private String lastName;
	@Column(name = "age")
    private int age;
	@Column(name = "gender")
    private String gender;
	@Column(name = "mobile")
    private long mobile;
	@Column(name = "email")
    private String email;
	@Column(name = "address")
    private String address;
	@Column(name = "pan")
    private String pan;
	@Column(name = "aadhar")
    private long aadhar;
	@Column(name = "login_id")
    private String loginId;
	@Column(name = "password")
    private String password;
	@Column(name = "verified")
    private boolean verified;
    
    public boolean isVerified() {
        return verified;
    }

    public void setVerified(boolean verified) {
        this.verified = verified;
    }

    private boolean locked;
    public boolean isLocked() {
        return locked;
    }

    public void setLocked(boolean locked) {
        this.locked = locked;
    }

    private int attempts;
   
   

    public int getAttempts() {
        return attempts;
    }

    public void setAttempts(int attempts) {
        this.attempts = attempts;
    }

    public Customer() {
    	
    }

    public Customer(String firstName, String lastName, int age, String gender, String email, long mobile,
                    String loginId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.mobile = mobile;
        this.loginId = loginId;
        
    }
    

    public Customer(int customerId, String firstName, String lastName, int age, String gender, String email,
                    long mobile, String address, String pan, long aadhar, String loginId,String password,boolean verified, boolean locked, int attempts) {
        this.customerId = customerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.mobile = mobile;
        this.address = address;
        this.pan = pan;
        this.aadhar = aadhar;
        this.loginId = loginId;
        this.password = password;
        this.verified = verified;
        this.locked = locked;
        this.attempts = attempts;
    }

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public long getMobile() {
        return mobile;
    }

    public void setMobile(long mobile) {
        this.mobile = mobile;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPan() {
        return pan;
    }

    public void setPan(String pan) {
        this.pan = pan;
    }

    public long getAadhar() {
        return aadhar;
    }

    public void setAadhar(long aadhar) {
        this.aadhar = aadhar;
    }

    public String getLoginId() {
        return loginId;
    }

    public void setLoginId(String loginId) {
        this.loginId = loginId;
    }

   

    @Override
    public String toString() {
        return "Customer [customerId=" + customerId + ", firstName=" + firstName + ", lastName=" + lastName
                + ", age=" + age + ", gender=" + gender + ", mobile=" + mobile + ", email=" + email
                + ", address=" + address + ", pan=" + pan + ", aadhar=" + aadhar + ", loginId=" + loginId
                + "password=" + password + "verified=" + verified
                + ", locked=" + locked + ", attempts=" + attempts +"]";
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
