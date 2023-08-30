export interface IDefaultButton {
  title: string;
  type: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
  loading?: boolean;
  width?: number;
}
