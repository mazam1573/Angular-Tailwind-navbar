import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationItem } from '../../interfaces/navigation-item';
import { RouterLinkActive } from '@angular/router';
import { faHouse, faEnvelope, faSackDollar, faFileInvoiceDollar, faChartSimple, faFolderTree, faListCheck } from '@fortawesome/free-solid-svg-icons';

import { Modal } from 'flowbite';

@Component({
  selector: 'primary-nav',
  templateUrl: './primary-nav.component.html',
  styleUrls: ['./primary-nav.component.css'],
})
export class PrimaryNavComponent implements OnInit {
  public navItems: NavigationItem[] = [];
  public isModalVisible: boolean = false;

  constructor() {
    this.navItems = [
      { label: 'Dashboard', route: 'dashboard', icon: faHouse },
      { label: 'Catalog', route: 'catalog', icon: faFolderTree },
      {
        label: 'Activities',
        route: 'activities',
        icon: faListCheck,
        showChildren: false,
        children: [
          { label: 'Child 1', route: 'activities/child1', icon: faHouse },
          { label: 'Child 2', route: 'activities/child2', icon: faHouse },
        ],
      },
      { label: 'Emails', route: 'emails', icon: faEnvelope,
      children: [
        { label: 'Child 1', route: 'activities/child1', icon: faHouse },
        { label: 'Child 2', route: 'activities/child2', icon: faHouse },
      ], },
      { label: 'Bids', route: 'bids', icon: faSackDollar },
      { label: 'Quotes', route: 'quotes', icon: faFileInvoiceDollar },
      { label: 'Reports', route: 'reports', icon: faChartSimple },
    ];
  }

  ngOnInit(): void {}

  @HostListener('document:click', ['$event'])
  hideModel(event: MouseEvent) {
    const modalElement = document.querySelector('.modal');
    if (modalElement && !modalElement.contains(event.target as Node)) {
      this.isModalVisible = false;
    }
  }

  toggleUserMenu(event: any) {
    event.stopPropagation();
    this.isModalVisible = !this.isModalVisible;
  }
}
