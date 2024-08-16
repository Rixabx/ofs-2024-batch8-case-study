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
import "ojs/ojknockout";
import "oj-c/input-text";
import "ojs/ojknockout";
import 'oj-c/input-number';
import 'oj-c/input-password';
import "ojs/ojdatetimepicker";
import 'oj-c/form-layout';
import 'oj-c/checkboxset';
import "oj-c/button";
import 'ojs/ojmessagebanner';
import { IntlConverterUtils } from "ojs/ojconverterutils-i18n";

import MutableArrayDataProvider = require('ojs/ojmutablearraydataprovider');
import { ojButton } from "@oracle/oraclejet/ojbutton";

class DashboardViewModel {
  value: ko.Observable<string>;
  firstname:ko.Observable<string> | ko.Observable<any>;
  salary:ko.Observable<number> | ko.Observable<any>;
  password:ko.Observable<string> | ko.Observable<any>;
  value1: ko.Observable<string> | ko.Observable<any>;
  button2Text: string;
    activatedButton: ko.Observable<string>;
  messages: MutableArrayDataProvider<unknown, unknown>;

  constructor() {
    this.value = ko.observable("Green");
    this.firstname = ko.observable(null);
    this.salary = ko.observable(null);
    this.password = ko.observable(null);
    this.value1 = ko.observable(
      IntlConverterUtils.dateToLocalIso(new Date(2013, 0, 1))
    );
    this.button2Text = "Button Text 2";
      this.activatedButton = ko.observable("(None activated yet)");
    const initialData = [
      {
        id: 'error1',
        severity: 'error',
        summary: 'Error message summary',
        detail: 'Error message detail.',
        closeAffordance: 'off'
      }];
      this.messages = new MutableArrayDataProvider(initialData, {
        keyAttributes: 'id'
      });
    
  }
  public buttonAction = (event: ojButton.ojAction) => {
    this.activatedButton((event.currentTarget as HTMLElement).id);
    return true;
  };
  }

export = DashboardViewModel;
