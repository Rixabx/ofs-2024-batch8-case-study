/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import * as ko from 'knockout';
import * as Bootstrap from 'ojs/ojbootstrap';
import { RESTDataProvider } from 'ojs/ojrestdataprovider';
import 'ojs/ojknockout';
import 'ojs/ojtable';

// Define the type for the data
type D = { employeeId: number; firstname: string; lastname: string; salary: number };
type K = D['employeeId'];

class IncidentsViewModel {
  // Define RESTDataProvider
  dataprovider: RESTDataProvider<K, D>;

  // Observable properties for form inputs
  inputEmployeeId = ko.observable<number>(0);
  inputFirstname = ko.observable<string>('');
  inputLastname = ko.observable<string>('');
  inputSalary = ko.observable<number>(0);

  constructor() {
    this.dataprovider = new RESTDataProvider({
      keyAttributes: 'employeeId',
      url: 'http://localhost:8080/employeecrudapi/getemployees',
      transforms: {
        fetchFirst: {
          request: async (options) => {
            const url = new URL(options.url);
            return new Request(url.href);
          },
          response: async ({ body }) => {
            let data = body;
            return { data };
          }
        }
      }
    });
  }

  // Method to add a new row
  addRow = async () => {
    // Create row object based on form inputs
    const row = {
      employeeId: this.inputEmployeeId(),
      firstname: this.inputFirstname(),
      lastname: this.inputLastname(),
      salary: this.inputSalary()
    };

    // Create and send request to REST service to add row
    const request = new Request('http://localhost:8080/employeecrudapi/employees', {
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8"
      }),
      body: JSON.stringify(row),
      method: "POST"
    });

    try {
      const response = await fetch(request);

      if (!response.ok) {
        throw new Error('Failed to add row');
      }

      const addedRow = await response.json();

      // Add the new row to the dataprovider
      const addedRowIndex = 0; // Assuming we want to add at the start
      const addedRowKey = addedRow.employeeId;
      const addedRowMetaData = { key: addedRowKey };

      this.dataprovider.mutate({
        add: {
          data: [addedRow],
          indexes: [addedRowIndex],
          keys: new Set([addedRowKey]),
          metadata: [addedRowMetaData]
        }
      });
    } catch (error) {
      console.error('Error adding row:', error);
    }
  };
}

Bootstrap.whenDocumentReady().then(() => {
  ko.applyBindings(new IncidentsViewModel(), document.getElementById('mainContent'));
});

export = IncidentsViewModel;
  /**
   * Optional ViewModel method invoked after the View is inserted into the
   * document DOM.  The application can put logic that requires the DOM being
   * attached here.
   * This method might be called multiple times - after the View is created
   * and inserted into the DOM and after the View is reconnected
   * after being disconnected.
   */
//   connected(): void {
//     AccUtils.announce("Incidents page loaded.");
//     document.title = "Incidents";
//     // implement further logic if needed
//   }

//   /**
//    * Optional ViewModel method invoked after the View is disconnected from the DOM.
//    */
//   disconnected(): void {
//     // implement if needed
//   }

//   /**
//    * Optional ViewModel method invoked after transition to the new View is complete.
//    * That includes any possible animation between the old and the new View.
//    */
//   transitionCompleted(): void {
//     // implement if needed
//   }
// }
