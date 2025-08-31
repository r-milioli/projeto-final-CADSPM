import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header';

@Component({
  selector: 'app-solicitacao-form',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './solicitacao-form.html',
  styleUrl: './solicitacao-form.css'
})
export class SolicitacaoFormComponent {
  constructor() {}
}
