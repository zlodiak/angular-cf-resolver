import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { FormComponent } from "./components/form/form.component";

@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [FormsModule, BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FormComponent],
})
export class AppModule {}
