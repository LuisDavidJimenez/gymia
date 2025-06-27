import { Component, AfterViewChecked, ElementRef, viewChild } from '@angular/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule, NgClass, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SimpleMarkdownPipe } from '../../shared/pipes/markdown.pipe';


@Component({
  selector: 'app-chat',
  imports: [
    CommonModule,
    NgForOf,
    NgClass,
    FormsModule,
    CardModule,
    ScrollPanelModule,
    InputTextModule,
    ButtonModule,
    ProgressSpinnerModule,
    SimpleMarkdownPipe,
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent {}
