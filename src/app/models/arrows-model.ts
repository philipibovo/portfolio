interface IArrowsModel {
  show?: boolean;
  left?: boolean;
  right?: boolean;
}

export class ArrowsModel implements IArrowsModel {
  constructor(
    public show?: boolean,
    public left?: boolean,
    public right?: boolean
  ) {
    this.show = show;
    this.left = left;
    this.right = right;
  }
}
