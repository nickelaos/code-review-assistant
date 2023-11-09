export interface RequestPayload {
  language: string | null;
  engine: string | null;
  input: string | null;
  additionalInfo: string | null;
}

export type Field = {
  name: string;
  value: string | null;
};
