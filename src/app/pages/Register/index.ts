import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  signal
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateMemberActions } from 'src/app/store/actions/create-member.actions';
import { CreateMemberRequiredProps } from 'src/app/core/models//interface/create-member.interface';
import { createMemberSelector } from 'src/app/store/reducers/create-member.reducer';
import { CreateMemberStatus } from 'src/app/core/models/enum/create-member-status.enum';
import { ButtonConfigModel } from 'src/app/core/models/classes/button.model';

import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { Store, select } from '@ngrx/store';

interface MemberTypeModel {
  name: string;
  value: string;
}

interface StatusOptionsModel {
  label: string;
  value: string;
}

@Component({
  selector: 'page-register',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    InputMaskModule,
    SelectButtonModule,
    InputTextareaModule,
    ButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <app-message #MessageComponent />

    <div class="card shadow-2">
      <form
        [formGroup]="formGroup"
        (ngSubmit)="onSubmit(formGroup)"
        class="grid formgrid p-fluid py-3"
      >
        <div class="field col-12 mb-4 flex flex-wrap">
          <label for="username" htmlFor="username" class="font-medium text-900"
            >Username
            <small
              id="username-help"
              [ngClass]="
                formGroup.get('userName')?.invalid
                  ? 'text-red-500'
                  : 'text-green-500'
              "
            >
              *
            </small>
          </label>
          <div class="p-input-icon-left ">
            <i class="pi pi-user"></i>
            <input
              pInputText
              id="username"
              class="p-inputtext p-component p-element"
              formControlName="userName"
            />
          </div>
        </div>

        <div class="field col-12 mb-4 lg:col-9 md:col-9 sm:col-7">
          <label for="email" htmlFor="email" class="font-medium text-900">
            Email
            <small
              id="email-help"
              [ngClass]="
                formGroup.get('email')?.invalid
                  ? 'text-red-500'
                  : 'text-green-500'
              "
            >
              *
            </small>
          </label>
          <div class="p-input-icon-left">
            <i class="pi pi-at"></i>
            <input
              pInputText
              id="email"
              class="p-inputtext p-component p-element"
              formControlName="email"
            />
          </div>
        </div>

        <div class="field mb-4 col-12 lg:col-3 md:col-3 sm:col-5">
          <label for="phone" htmlFor="phone" class="font-medium text-900">
            Phone
            <small
              id="phone-help"
              [ngClass]="
                formGroup.get('phone')?.invalid
                  ? 'text-red-500'
                  : 'text-green-500'
              "
            >
              *
            </small>
          </label>
          <div class="p-input-icon-right">
            <i class="pi pi-phone"></i>
            <p-inputMask
              mask="(99) 99999-9999"
              formControlName="phone"
              placeholder="(88) 91234-5678"
            />
          </div>
        </div>

        <div class="field mb-4 col-12 lg:col-3 md:col-3 sm:col-6">
          <label
            for="memberType"
            htmlFor="memberType"
            class="font-medium text-900"
          >
            Type
            <small
              id="type-help"
              [ngClass]="
                formGroup.get('type')?.invalid
                  ? 'text-red-500'
                  : 'text-green-500'
              "
            >
              *
            </small>
          </label>
          <p-dropdown
            [options]="memberType"
            class="p-element p-inputwrapper"
            placeholder="Select type"
            formControlName="type"
            optionLabel="name"
          />
        </div>

        <div class="field mb-4 col-12 lg:col-3 md:col-3 sm:col-6">
          <label for="status" htmlFor="status" class="font-medium text-900"
            >Status</label
          >
          <small
            id="type-help"
            [ngClass]="
              formGroup.get('type')?.invalid ? 'text-red-500' : 'text-green-500'
            "
          >
            *
          </small>
          <p-selectButton
            [options]="statusOptions"
            formControlName="status"
            optionLabel="label"
            optionValue="value"
          />
        </div>

        <div class="field col-12 mb-4 lg:col-6 md:col-6 sm:col-12 lg:mb-0">
          <label for="status" htmlFor="status" class="font-medium text-900"
            >Historic</label
          >
          <textarea
            rows="5"
            cols="30"
            pInputTextarea
            formControlName="historic"
            placeholder="Describe historic here"
            [autoResize]="true"
          >
          </textarea>
        </div>

        <footer
          class="flex justify-content-center mt-4 col-12 sm:justify-content-end"
        >
          <p-button
            [label]="buttonConfig().label"
            type="submit"
            [disabled]="!formGroup.valid"
            [loading]="buttonConfig().loading"
            class="font-bold w-18rem lg:w-10rem md:w-10rem sm:w-10rem"
          />
        </footer>
      </form>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  private fb = inject(FormBuilder);
  private store = inject(Store<CreateMemberRequiredProps>);

  buttonConfig = signal<ButtonConfigModel>(new ButtonConfigModel());

  formGroup!: FormGroup;
  userName!: string;
  type!: MemberTypeModel;
  email!: string;
  phone!: string;
  historic!: string;
  statusOptions: StatusOptionsModel[] = [
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' }
  ];
  memberType!: MemberTypeModel[];

  ngOnInit(): void {
    this.store.dispatch(CreateMemberActions.enter());

    this.store.pipe(select(createMemberSelector)).subscribe({
      next: type => {
        if (type.status === CreateMemberStatus.saved) {
          this.formGroup?.reset();
          this.buttonConfig.set(new ButtonConfigModel());
        } else if (type.status === CreateMemberStatus.error)
          this.buttonConfig.set(new ButtonConfigModel());
      }
    });

    this.configFormValues();
  }

  configFormValues(): void {
    this.formGroup = this.fb.group({
      userName: ['', Validators.required],
      type: [this.memberType, Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      status: ['', Validators.required],
      historic: ['']
    });

    this.memberType = [
      { name: 'Decimate', value: 'decimate' },
      { name: 'Provider', value: 'provider' }
    ];
  }

  onSubmit(createMemberProps: FormGroup): void {
    const memberValue = createMemberProps.value;
    const registerFormValue = {
      userName: memberValue.userName,
      type: memberValue.type.value,
      email: memberValue.email,
      phone: memberValue.phone,
      status: memberValue.status,
      historic: memberValue.historic
    };

    this.buttonConfig.update(() => ({ loading: true, label: 'Saving...' }));

    this.store.dispatch(
      CreateMemberActions.createMember({ member: registerFormValue })
    );
  }
}
