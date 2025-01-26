import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherSearch } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-header',
  imports: [NgIcon, ReactiveFormsModule],
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
      search: '',
    });
  }

  onSubmit(): void {
    const { search } = this.searchForm.value;

    this.submitEvent.emit(search);
  }
}
