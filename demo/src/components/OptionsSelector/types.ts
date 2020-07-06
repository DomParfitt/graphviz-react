export type OptionValue = string | number | boolean;
export type OptionsType = { [key: string]: OptionValue };
export type Options<T> = T & OptionsType;
