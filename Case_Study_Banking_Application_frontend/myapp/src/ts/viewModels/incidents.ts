/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
//--------- case study----------//
import * as ko from 'knockout';
import "oj-c/input-text";
import 'oj-c/input-password';
import 'oj-c/form-layout';
import "oj-c/button";
import "ojs/ojknockout";
import { whenDocumentReady } from "ojs/ojbootstrap";

class LoginViewModel {
    // Observables for user input
    inputEmail = ko.observable<string>("");
    inputPassword = ko.observable<string>("");

    // API URL
    private apiUrl = "http://localhost:8080/customerapi/login";

    // Method to handle form submission
    login = async () => {
        // Create the login object from input observables
        const loginDetails = {
            email: this.inputEmail(),
            password: this.inputPassword()
        };

        // Create and send request to REST service to login
        const request = new Request(this.apiUrl, {
            headers: new Headers({
                "Content-Type": "application/json; charset=UTF-8"
            }),
            body: JSON.stringify(loginDetails),
            method: "POST"
        });

        try {
            const response = await fetch(request);
            if (!response.ok) throw new Error("Network response was not ok.");
            const result = await response.json();
            console.log("Login successful:", result);
            sessionStorage.setItem("id", JSON.stringify(result)); // Assuming the response contains the customer ID
            window.location.href = "http://localhost:8000/?ojr=customers";
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    // Method to check if the form is valid
    isFormValid = ko.pureComputed(() => {
        return this.inputEmail().trim() !== "" && this.inputPassword().trim() !== "";
    });
}

// Initialize ViewModel and apply bindings


whenDocumentReady().then(() => {
  ko.applyBindings(new LoginViewModel(), document.getElementById("div1"));
});

export = LoginViewModel;
