// import { RESTDataProvider } from "ojs/ojrestdataprovider";
// import * as ko from 'knockout';
// import "ojs/ojtable";
// import "oj-c/input-text";
// import 'oj-c/input-number';
// import "oj-c/button";
// import 'oj-c/form-layout';

// type D = {
//     employeeId: number;
//     firstname: string;
//     lastname: string;
//     salary: number;
// };
// type K = D["employeeId"];

// class ViewModel {
//     dataprovider: RESTDataProvider<K, D>;
//     keyAttributes = "employeeId";
//     url = "http://localhost:8080/employeecrudapi/getemployees"; // GET API endpoint

//     // Observables for user input
//     inputEmployeeId = ko.observable<number | null>(null);
//     inputFirstName = ko.observable<string>("");
//     inputLastName = ko.observable<string>("");
//     inputSalary = ko.observable<number | null>(null);

//     // Observables for selected row and button states
//     selectedRow = ko.observable<D | null>(null);
//     selectedKey = ko.observable<K | null>(null);
//     disabledAdd = ko.observable<boolean>(false);
//     disabledUpdate = ko.observable<boolean>(false);
//     disabledRemove = ko.observable<boolean>(false);

//     constructor() {
//         this.dataprovider = new RESTDataProvider({
//             keyAttributes: this.keyAttributes,
//             url: this.url,

//             transforms: {
//                 fetchFirst: {
//                     request: async (options) => {
//                         const url = new URL(options.url);
//                         const { size, offset } = options.fetchParameters;
//                         url.searchParams.set("limit", String(size));
//                         url.searchParams.set("offset", String(offset));
//                         return new Request(url.href);
//                     },
//                     response: async ({ body }) => {
//                         // Assuming the response is an array of employee objects
//                         const items = body;
//                         return { data: items };
//                     },
//                 },
//             },
//         });
//     }

//     // Method to add a new row
//     addRow = async () => {
//         // Create row object based on form inputs
//         const row: D = {
//             employeeId: this.inputEmployeeId() as number,
//             firstname: this.inputFirstName(),
//             lastname: this.inputLastName(),
//             salary: this.inputSalary() as number,
//         };

//         // Create and send request to REST service to add row
//         const request = new Request("http://localhost:8080/employeecrudapi/employees", {
//             headers: new Headers({
//                 "Content-Type": "application/json; charset=UTF-8",
//             }),
//             body: JSON.stringify(row),
//             method: "POST",
//         });

//         try {
//             const response = await fetch(request);
//             if (!response.ok) throw new Error("Network response was not ok.");
//             const addedRow = await response.json();

//             const addedRowKey: K = addedRow[this.keyAttributes] as K;
//             const addedRowMetaData = { key: addedRowKey };

//             // Notify data provider about the new row
//             this.dataprovider.mutate({
//                 add: {
//                     data: [addedRow],
//                     indexes: [0], // Adjust the index as needed
//                     keys: new Set([addedRowKey]),
//                     metadata: [addedRowMetaData],
//                 },
//             });

//             // Clear input fields after adding
//             this.inputEmployeeId(null);
//             this.inputFirstName("");
//             this.inputLastName("");
//             this.inputSalary(null);

//         } catch (error) {
//             console.error("Error adding row:", error);
//         }
//     };

//     // Method to update an existing row
//     updateRow = async () => {
//         const key = this.selectedKey();
//         if (key != null) {
//             const row: D = {
//                 employeeId: this.inputEmployeeId() as number,
//                 firstname: this.inputFirstName(),
//                 lastname: this.inputLastName(),
//                 salary: this.inputSalary() as number,
//             };

//             // Create and send request to REST service to update row
//             const request = new Request(`http://localhost:8080/employeecrudapi/employees`, {
//                 headers: new Headers({
//                     "Content-Type": "application/json; charset=UTF-8",
//                 }),
//                 body: JSON.stringify(row),
//                 method: "PUT",
//             });

//             try {
//                 const response = await fetch(request);
//                 if (!response.ok) throw new Error("Network response was not ok.");
//                 const updatedRow = await response.json();

//                 const updatedRowMetaData = { key: key };

//                 // Notify data provider about the updated row
//                 this.dataprovider.mutate({
//                     update: {
//                         data: [updatedRow],
//                         indexes: [0], // Adjust the index as needed
//                         keys: new Set([key]),
//                         metadata: [updatedRowMetaData],
//                     },
//                 });

//             } catch (error) {
//                 console.error("Error updating row:", error);
//             }
//         }
//     };

//     // Method to delete a row
//     removeRow = async () => {
//         const key = this.selectedKey();
//         if (key != null) {
//             // Create and send request to REST service to delete row
//             const request = new Request(`http://localhost:8080/employeecrudapi/employees/${key}`, {
//                 method: "DELETE",
//             });

//             try {
//                 const response = await fetch(request);
//                 if (!response.ok) throw new Error("Network response was not ok.");
//                 const removedRow = await response.json();

//                 const removedRowMetaData = { key: key };

//                 // Notify data provider about the removed row
//                 this.dataprovider.mutate({
//                     remove: {
//                         data: [removedRow],
//                         indexes: [0], // Adjust the index as needed
//                         keys: new Set([key]),
//                         metadata: [removedRowMetaData],
//                     },
//                 });

//                 // Clear selected row and input fields after removing
//                 this.selectedKey(null);
//                 this.selectedRow(null);
//                 this.inputEmployeeId(null);
//                 this.inputFirstName("");
//                 this.inputLastName("");
//                 this.inputSalary(null);

//             } catch (error) {
//                 console.error("Error removing row:", error);
//             }
//         }
//     };
// }

// export = ViewModel;
import { RESTDataProvider } from "ojs/ojrestdataprovider";
import "ojs/ojtable";
import * as ko from 'knockout';
import "oj-c/input-text";
import 'oj-c/input-number';
import "oj-c/button";
import 'oj-c/form-layout';
import "ojs/ojknockout";
import { whenDocumentReady } from "ojs/ojbootstrap";

type Account = {
    accountId: number;
    accountType: string;
    balance: number;
    customer: {
        customerId: number;
    };
};

type Key = Account["accountId"];

class AccountViewModel {
    accountType = ko.observable<string>("");
    balance = ko.observable<number>(0);
    dataprovider = ko.observable<RESTDataProvider<any, any> | null>(null);
    keyAttributes = "accountId";
    url = "http://localhost:8080/customerapi/allaccount/";

    fetchAccountData = async () => {
        const customer = sessionStorage.getItem('id'); // Get customer object from sessionStorage
        if (!customer) {
            console.error('No customer data found in session storage.');
            return;
        }

        const customerData = JSON.parse(customer);
        const customerId = customerData.customerId;
        const fetchUrl = `${this.url}${customerId}`;
        const dataProvider = new RESTDataProvider({
            keyAttributes: this.keyAttributes,
            url: fetchUrl,
            transforms: {
                fetchFirst: {
                    request: async (options) => {
                        const url = new URL(options.url);
                        return new Request(url.href);
                    },
                    response: async ({ body }) => {
                        console.log(body);
                        const data = body;
                        return { data };
                    },
                },
            },
        });

        // Update observable
        this.dataprovider(dataProvider);
    };

    submitForm = async () => {
        const customer = sessionStorage.getItem('id'); // Get customer object from sessionStorage
        if (!customer) {
            console.error('No customer data found in session storage.');
            return;
        }

        const customerData = JSON.parse(customer);
        const customerId = customerData.customerId; // Get customerId from parsed customer object
        console.log(customerId);
        const type = this.accountType().trim();
        const balance = this.balance();

        if (!customerId || !type || balance <= 0) {
            console.error('Invalid input values.');
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/customerapi/account", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    accountId: 100,
                    customer: customerData, // Use customerId from sessionStorage
                    accountType: type,
                    balance: balance
                }),
            });

            if (!response.ok) {
                console.error('Error creating or updating account. Status:', response.status);
                return;
            }

            const data = await response.json();
            console.log('Response data:', data);

            if (data && data.accountId) {
                // sessionStorage.setItem('accountId', data.accountId.toString());
                // Optionally, you can update the sessionStorage with the new accountId if needed
                this.fetchAccountData(); // Fetch data for the updated account
            } else {
                console.error('Account data not found in response.');
            }
        } catch (error) {
            console.error('Error in POST request:', error);
        }
    };

    logout = () => {
        sessionStorage.removeItem('id'); // Clear customerId from sessionStorage
        window.location.href = 'http://localhost:8000/?ojr=incidents'; // Redirect to login page
    };

    constructor() {
        // Fetch data when the ViewModel is created
        this.fetchAccountData();
    }
}

whenDocumentReady().then(() => {
    const viewModel = new AccountViewModel();
    ko.applyBindings(viewModel, document.getElementById('form-container'));
    ko.applyBindings(viewModel, document.getElementById('accounts-table-container'));
    ko.applyBindings(viewModel, document.getElementById('logout-button-container'));
});

export = AccountViewModel;

