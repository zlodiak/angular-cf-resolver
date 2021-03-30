import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { FormComponent } from "./components/form/form.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  @ViewChild("form", { static: true, read: ViewContainerRef })
  form: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  showForm(data) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      FormComponent
    );
    const componentRef = this.form.createComponent(componentFactory);
    componentRef.instance.data = data;
  }
}
