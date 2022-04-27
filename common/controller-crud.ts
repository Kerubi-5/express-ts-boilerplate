import { Request, Response } from "express";

export type ApiFN = (req: Request, res: Response) => Promise<any>;

export type Controller = {
  index: ApiFN;
  store: ApiFN;
  show: ApiFN;
  update: ApiFN;
  destroy: ApiFN;
};
