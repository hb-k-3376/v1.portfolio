export interface IMenuItem {
  name: string;
  path: string;
}

export interface IMenuProps extends IMenuItem {
  isActive: boolean;
}
