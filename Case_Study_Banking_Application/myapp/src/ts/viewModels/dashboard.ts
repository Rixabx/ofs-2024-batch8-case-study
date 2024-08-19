/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import * as AccUtils from "../accUtils";
import * as ko from "knockout";
import * as Bootstrap from "ojs/ojbootstrap";
import "oj-c/input-text";
import 'oj-c/input-number';
import 'oj-c/input-password';
import "ojs/ojdatetimepicker";
import 'oj-c/form-layout';
import 'oj-c/checkboxset';
import "oj-c/button";
import 'ojs/ojmessagebanner';
import "ojs/ojknockout";
import "knockout";
import "oj-c/button";
import "oj-c/progress-bar";

import { IntlConverterUtils } from "ojs/ojconverterutils-i18n";
import ArrayDataProvider = require("ojs/ojarraydataprovider");
import MutableArrayDataProvider = require('ojs/ojmutablearraydataprovider');
import { MessageBannerItem } from "ojs/ojmessagebanner";
import "ojs/ojtable";
import "ojs/ojpagingcontrol";
import PagingDataProviderView = require("ojs/ojpagingdataproviderview");
type DemoMessageBannerItem = MessageBannerItem & {
  id: string;
};

type CustomAction = {
  link?: string;
  title?: string;
};
type DemoCustomDetailMessageBannerItem = MessageBannerItem & {
  id: string;
  actions?: [CustomAction, CustomAction];
};


class DashboardViewModel {
  private readonly deptArray1 = [
    {
      DepartmentId: 10015,
      DepartmentName: "ADFPM 1001 neverending",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 556,
      DepartmentName: "BB",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 10,
      DepartmentName: "Administration",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 20,
      DepartmentName: "Marketing",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 30,
      DepartmentName: "Purchasing",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 40,
      DepartmentName: "Human Resources1",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 50,
      DepartmentName: "Administration2",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 60,
      DepartmentName: "Marketing3",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 70,
      DepartmentName: "Purchasing4",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 80,
      DepartmentName: "Human Resources5",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 90,
      DepartmentName: "Human Resources11",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 100,
      DepartmentName: "Administration12",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 110,
      DepartmentName: "Marketing13",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 120,
      DepartmentName: "Purchasing14",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 130,
      DepartmentName: "Human Resources15",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 1001,
      DepartmentName: "ADFPM 1001 neverending",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 55611,
      DepartmentName: "BB",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 1011,
      DepartmentName: "Administration",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 2011,
      DepartmentName: "Marketing",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 3011,
      DepartmentName: "Purchasing",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 4011,
      DepartmentName: "Human Resources1",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 5011,
      DepartmentName: "Administration2",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 6011,
      DepartmentName: "Marketing3",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 7011,
      DepartmentName: "Purchasing4",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 8011,
      DepartmentName: "Human Resources5",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 9011,
      DepartmentName: "Human Resources11",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 10011,
      DepartmentName: "Administration12",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 11011,
      DepartmentName: "Marketing13",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 12011,
      DepartmentName: "Purchasing14",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 13011,
      DepartmentName: "Human Resources15",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 100111,
      DepartmentName: "ADFPM 1001 neverending",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 55622,
      DepartmentName: "BB",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 1022,
      DepartmentName: "Administration",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 2022,
      DepartmentName: "Marketing",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 3022,
      DepartmentName: "Purchasing",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 4022,
      DepartmentName: "Human Resources1",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 5022,
      DepartmentName: "Administration2",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 6022,
      DepartmentName: "Marketing3",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 7022,
      DepartmentName: "Purchasing4",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 8022,
      DepartmentName: "Human Resources5",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 9022,
      DepartmentName: "Human Resources11",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 10022,
      DepartmentName: "Administration12",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 11022,
      DepartmentName: "Marketing13",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 12022,
      DepartmentName: "Purchasing14",
      LocationId: 200,
      ManagerId: 300,
    },
    {
      DepartmentId: 13022,
      DepartmentName: "Human Resources15",
      LocationId: 200,
      ManagerId: 300,
    }];
    readonly pagingDataProvider = new PagingDataProviderView(
      new ArrayDataProvider(this.deptArray1, { idAttribute: "DepartmentId" })
    );
  value: ko.Observable<string>;
  firstname:ko.Observable<string> | ko.Observable<any>;
  salary:ko.Observable<number> | ko.Observable<any>;
  password:ko.Observable<string> | ko.Observable<any>;
  value1: ko.Observable<string> | ko.Observable<any>;
  messages: MutableArrayDataProvider<string, DemoMessageBannerItem>;
  button2Text: string;
  activatedButton: ko.Observable<string>;
  private readonly step = ko.observable(0);
    readonly progressValue = ko.pureComputed(() => {
      return Math.min(this.step(), 100);
    });
    
    private readonly deptArray =  JSON.parse(`[
      {
        "DepartmentId": 10,
        "DepartmentName": "Finance 9",
        "LocationId": 300,
        "ManagerId": 7001,
        "StartDate": "2014-06-13",
        "EmployeeCount": 335,
        "Type": "Sales",
        "Currency": "EUR",
        "Primary": [],
        "Rating": 3,
        "TargetComplete": 90
      },
      {
        "DepartmentId": 20,
        "DepartmentName": "Control And Credit 9",
        "LocationId": 300,
        "ManagerId": 7001,
        "StartDate": "2019-09-10",
        "EmployeeCount": 206,
        "Type": "HR",
        "Currency": "USD",
        "Primary": [],
        "Rating": 1,
        "TargetComplete": 90
      }]`);
    readonly dataprovider = new ArrayDataProvider(this.deptArray, {
      keyAttributes: "DepartmentId",
      implicitSort: [{ attribute: "DepartmentId", direction: "ascending" }],
    });
  constructor() {
    this.value = ko.observable("Green");
    this.firstname = ko.observable(null);
    this.salary = ko.observable(null);
    this.password = ko.observable(null);
    this.value1 = ko.observable(IntlConverterUtils.dateToLocalIso(new Date(2013, 0, 1)));
    this.button2Text = "Button 2";
    this.activatedButton = ko.observable("(None clicked yet)");
    const initialData = [
      {
        id: 'error1',
        severity: 'error',
        summary: 'summary',
        detail: 'Error message detail.',
        closeAffordance: 'off'
      }];
    this.messages = new MutableArrayDataProvider(initialData, {keyAttributes: 'id'});
    window.setInterval(() => {
      this.step((this.step() + 1) % 200);
    }, 30);
  }
  public buttonAction = async (event: Event) => {
    let elementName = (event.currentTarget as HTMLElement).tagName;
    console.log("Name:"+this.firstname()+",Salary:"+this.salary())
    console.log("Element Name"+elementName)
    let id = parseInt(this.firstname());
    let URL = "https://jsonplaceholder.typicode.com/users/"+id;
    let res = await fetch(URL);
    let jsonData = await res.json();
    this.activatedButton([jsonData.name,jsonData.username,jsonData.email,jsonData.address.street,jsonData.address.suite].toString())
    // this.salary(jsonData.username)
    // this.activatedButton((event.currentTarget as HTMLElement).id);
    // return true;
  }
  }
  

//   Bootstrap.whenDocumentReady().then(() => {
//     setTimeout(() => {
//     const viewModel = new DashboardViewModel();
//     const element = document.getElementById("buttonc");
//     if (element) {
//       ko.cleanNode(element);
//       ko.applyBindings(viewModel, element);
//     } else {
//       console.error('Element with ID "buttonc" not found');
//     }
//   }, 1000); // Delay for 1 second
// });

Bootstrap.whenDocumentReady().then(() => {
  const viewModel = new DashboardViewModel();
  // ko.applyBindings(
  //   viewModel,
  //   document.getElementById("buttonc")
  // );
  //progressbar
  ko.applyBindings(
    viewModel,
    document.getElementById("progressBarWrapper"));
    //button
  ko.applyBindings(viewModel, document.getElementById('containerDiv'));
  //tablefetch
  ko.applyBindings(viewModel, document.getElementById("table"));
  //paging
  ko.applyBindings(
    viewModel,
    document.getElementById("pagingControlDemo")
  );
});
export = DashboardViewModel;

