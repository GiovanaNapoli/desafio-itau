import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherSearch } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-header',
  imports: [NgIcon, ReactiveFormsModule, NgIf],
  viewProviders: [provideIcons({ featherSearch })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Output() submitEvent = new EventEmitter();
  searchForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.searchForm.invalid) {
      return;
    }

    const { search } = this.searchForm.value;

    this.submitEvent.emit(search);
  }
}
