import Composite = require("ojs/ojcomposite");
import * as view from "text!./mycomponent-1-view.html";
import viewModel from "./mycomponent-1-viewModel";
import * as metadata from "text!./component.json";
import "css!./mycomponent-1-styles.css";

Composite.register("mycomponent-1", {
  view: view,
  viewModel: viewModel,
  metadata: JSON.parse(metadata)
});

declare global {
  namespace preact.JSX {
    interface IntrinsicElements {
      "mycomponent-1": any;
    }
  }
}