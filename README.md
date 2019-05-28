# Jst Validators ![npm](https://img.shields.io/npm/v/@justa/ng-validators.svg) ![David](https://img.shields.io/david/justapagamentos/jst-ng-validators.svg) ![GitHub](https://img.shields.io/github/license/justapagamentos/jst-ng-validators.svg) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@justa/ng-validators.svg)

> Some _Angular Reactive Forms_ custom validators.

Main project to the Justa Reactive Forms custom validators. Go to _projects_ folder to see the package.

## Install

run `npm install --save @justa/ng-validators`

Install the peerDependecies:

`npm install --save moment @brazilian-utils/validators`

## Examples

Using the validators:

Import `ReactiveFormsModule` in _app.module.ts_

Example with **CNPJ Validator**

```typescript
import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { jstValidators } from "@justa/ng-validators";

@Component({
  selector: "app",
  template: require("./app.html")
})
export class AppComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      field: new FormControl("", jstValidators.validateCNPJ)
    });
  }
}
```

**Example on Stackblitz:**

- [https://stackblitz.com/edit/ng-validators-jst](https://stackblitz.com/edit/ng-validators-jst)

## Available custom validators

- validateDate (format: DD/MM/YYYY)
- validateCNPJ (format: xx.xxx.xxx/xxxx-xx | xxxxxxxxxxxxxx)
- validateCPF (format: xxx.xxx.xxx-xx | xxxxxxxxxxx)
- validatePhone (format: (xx)xxxxx-xxxx | (xx)xxxx-xxxx | xxxxxxxxxx)
- validateURL (format: http[s]://lol.com)

## Build (dev only)

Run `ng build @justa/validators` to build the project. The build artifacts will be stored in the `dist/` directory.

To build the package, run `ng build @justa/br-validators`.

## License

MIT


## Running (dev only)

Clone this repo, and install all dependencies. To build a new version, run this command:

`ng build @justa/br-validators`.
