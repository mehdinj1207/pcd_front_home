import { StudentService } from './pages/services/student/student.service';

import { NbThemeModule, NbChatModule,NbLayoutModule,NbWindowModule,NbUserModule,NbBadgeModule } from '@nebular/theme';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button'
import{MatIconModule} from '@angular/material/icon'

import { FormsModule}from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './sharepages/header/header.component';
import { FooterComponent } from './sharepages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import{MatListModule} from '@angular/material/list'
import{MatDividerModule} from '@angular/material/divider'
import { from } from 'rxjs';
import { CoursesComponent } from './pages/courses/courses.component';
import { ThirdofComponent } from './pages/thirdof/thirdof.component';
import { RegistercenterComponent } from './pages/registercenter/registercenter.component';
import { RegisterstudentComponent } from './pages/registerstudent/registerstudent.component';
import { RegisterformerComponent } from './pages/registerformer/registerformer.component';
import { AllprofComponent } from './pages/allprof/allprof.component';
import { AllcenterComponent } from './pages/allcenter/allcenter.component';
import { LoginstudentComponent } from './pages/loginstudent/loginstudent.component';
import { StudenthomeComponent } from './pages/studenthome/studenthome.component';
import { LoginformerComponent } from './pages/loginformer/loginformer.component';
import { LogincenterComponent } from './pages/logincenter/logincenter.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserComponent } from './pages/user/user.component';
import { AuthInterceptor } from './pages/_auth/auth.interceptor';
import { AuthGuard } from './pages/_auth/auth.guard';
import { HomeFormerComponent } from './pages/home-former/home-former.component';
import { HomeStudentComponent } from './pages/home-student/home-student.component';
import { StudentprofileComponent } from './pages/studentprofile/studentprofile.component';
import { BillingComponent } from './pages/billing/billing.component';
import{MessagesComponent}  from './pages/messages/messages.component';

import { UpdateprofileComponent } from './pages/updateprofile/updateprofile.component';
import { FormerService } from './pages/services/former/former.service';
import { FormerprofileComponent } from './pages/formerprofile/formerprofile.component';
import { UpdateformerprofileComponent } from './pages/updateformerprofile/updateformerprofile.component';
import { MessagesFormerComponent } from './pages/messages-former/messages-former.component';
import { FavoritesFormerComponent } from './pages/favorites-former/favorites-former.component';
import { PlanningStudentComponent } from './pages/planning-student/planning-student.component';
import { FavoritesStudentComponent } from './pages/favorites-student/favorites-student.component';
import { BillingFormerComponent } from './pages/billing-former/billing-former.component';
import { PlanningFormerComponent } from './pages/planning-former/planning-former.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormerChatComponent } from './pages/former-chat/former-chat.component';
import { HomeCenterComponent } from './pages/home-center/home-center.component';
import {MatTooltipModule} from'@angular/material/tooltip'
import 'hammerjs'; 
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';





import {SidebarModule} from 'ng-sidebar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import {ClipboardModule} from '@angular/cdk/clipboard';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LoginComponent,
    AboutComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CoursesComponent,
    ThirdofComponent,
    RegistercenterComponent,
    RegisterstudentComponent,
    RegisterformerComponent,
    AllprofComponent,
    AllcenterComponent,
    LoginstudentComponent,
    StudenthomeComponent,
    LoginformerComponent,
    LogincenterComponent,
    ForbiddenComponent,
    AdminComponent,
    UserComponent,
    HomeFormerComponent,
    HomeStudentComponent,
    StudentprofileComponent,
    BillingComponent,
    MessagesComponent,
  
    
    UpdateprofileComponent,
         FormerprofileComponent,
         UpdateformerprofileComponent,
         MessagesFormerComponent,
         FavoritesFormerComponent,
         PlanningStudentComponent,
         FavoritesStudentComponent,
         BillingFormerComponent,
         PlanningFormerComponent,
         FormerChatComponent,
         HomeCenterComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    FormsModule,
  
    HttpClientModule,
  
    BrowserAnimationsModule,
    NbThemeModule.forRoot(),
    NbChatModule,
    NbLayoutModule,
    NbUserModule,
    SidebarModule,
    NgbModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
    MatListModule,
    MatBadgeModule,
    MatCardModule,
    ClipboardModule,
    
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    StudentService,
    FormerService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
