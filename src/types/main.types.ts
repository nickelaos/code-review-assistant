export interface RequestPayload {
  language: string | null;
  engine: string | null;
  input: string | null;
  additionalInfo: string | null;
  temperature: number;
}

export type Field = {
  name: string;
  value: any;
};
