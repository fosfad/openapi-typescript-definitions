interface CommonExample {
  summary?: string,
  description?: string,
}

export interface ExampleWithValue extends CommonExample {
  value: any,
}

export interface ExampleWithExternalValue extends CommonExample {
  externalValue: string,
}

export type Example = ExampleWithValue | ExampleWithExternalValue;
