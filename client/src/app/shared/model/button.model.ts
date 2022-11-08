export class UiButtonConfig {
  color: 'primary' | 'light' | 'danger' = 'primary';
  shape: 'normal' | 'block' | 'link' | 'inline' = 'normal';
  size: 'sm' | 'md' | 'lg' = 'md';
  textColor: 'dark' | 'primary' | 'danger' | 'grey' | 'secondary' | 'light' = 'light';
  buttonType: 'button' | 'submit' = 'button';
  textWeight: 'bold' | 'regular' = 'regular';
  buttonText?: string;
}
