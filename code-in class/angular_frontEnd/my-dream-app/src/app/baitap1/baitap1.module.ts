import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap1Component } from './baitap1.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [Baitap1Component, HeaderComponent, SidebarComponent, ContentComponent, FooterComponent],
  exports: [Baitap1Component],
  imports: [CommonModule],
})
export class Baitap1Module {}
