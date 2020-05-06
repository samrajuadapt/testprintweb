import { Component } from '@angular/core';
import { NgxPrinterService } from 'ngx-printer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ThemalPrint';

  constructor(private printerService:NgxPrinterService){

  }

  PrintElem(elem) {
    var mywindow = window.open('', 'PRINT', 'height=200,width=400');

    mywindow.document.write('<html><head><title>' + document.title + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h1>' + document.title + '</h1>');
    mywindow.document.write(document.getElementById(elem).innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
  }
    

  print1(){
    this.PrintElem('print')
  }
  print2(){
    this.printerService.printDiv('print');
  }

}
