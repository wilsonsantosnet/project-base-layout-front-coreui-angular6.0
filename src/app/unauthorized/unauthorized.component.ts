import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/common/services/auth.service'
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent implements OnInit {

  vm: any = {};
  constructor(private authService: AuthService, private route: ActivatedRoute) {
    this.vm.actionTitle = "Access Unauthorized";
    this.vm.actionDescription = "Internal Server Error 401";
  }

  onLogin(e) {
    e.preventDefault();
    this.authService.logout();
  }

  ngOnInit() {

  }

}
