import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  serverElements: any = [
    { type: 'server', name: 'Testserver', content: 'Just a test' },
    { type: 'server', name: 'Testserver1', content: 'Just a test1' },
    { type: 'blueprint', name: 'Testserver2', content: 'Just a test2' },
  ];

  constructor() {}

  ngOnInit(): void {}

  OnServerAdded(serverData: any) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  OnBlueprintAdded(serverData: any) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }
}
