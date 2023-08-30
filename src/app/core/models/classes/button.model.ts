export class ButtonConfigModel {
  label: string;
  loading: boolean;

  constructor(label = 'Save Decimate', loading = false) {
    this.label = label;
    this.loading = loading;
  }
}
