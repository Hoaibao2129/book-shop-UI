import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from "./login-routing.module"
import { LoginComponent } from "./login.component";
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import {
  AccordionModule,
  BadgeModule,
  BreadcrumbModule,
  CarouselModule,
  CollapseModule,
  DropdownModule,
  ListGroupModule,
  NavModule,
  PaginationModule,
  PlaceholderModule,
  PopoverModule,
  ProgressModule,
  SharedModule,
  SpinnerModule,
  TableModule,
  TabsModule,
  TooltipModule,
  UtilitiesModule,
  AlertModule,
  ModalModule,
  ToastModule,
} from '@coreui/angular';
import { NotifierModule, NotifierOptions } from 'angular-notifier';


const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'middle',
			distance: 12
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: false,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    BadgeModule,
    BreadcrumbModule,
    DropdownModule,
    ListGroupModule,
    NavModule,
    ProgressModule,
    SharedModule,
    TabsModule,
    UtilitiesModule,
    CarouselModule,
    CollapseModule,
    AccordionModule,
    AlertModule,
    ModalModule,
    ToastModule,
    PaginationModule,
    PlaceholderModule,
    PopoverModule,
    SpinnerModule,
    TableModule,
    TooltipModule,
    NotifierModule.withConfig(customNotifierOptions),
  ]
})
export class LoginModule { }
