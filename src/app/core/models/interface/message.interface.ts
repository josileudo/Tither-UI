type SeverityType = '' | 'Success' | 'Error' | 'Info' | 'Warn';

export interface MessageModel {
  severity: SeverityType;
  detail: string;
}
