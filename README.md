use componentFActoryResolver, simple case.

создать шаблон динамического компонента FormComponent. он принимает входной параметр и отображает его в шаблоне.

прописать FormComponent в entryComponents.

в шаблоне AppComponent создать элемент, в котором будет отрисовываться динамический компонент: <div #form></div>

в AppComponent получить доступ к этому элементу, используя: ViewChild и ViewContainerRef

создать обработчик, в котором будет генерироваться динамический компонент и заполняться значением:
