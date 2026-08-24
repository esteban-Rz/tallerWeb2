import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../../services/auth';
import { NgIf } from "@angular/common";



@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive,NgIf],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  auth = inject(Auth);
}
