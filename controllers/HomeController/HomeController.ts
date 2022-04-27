import { Controller } from "../../common/controller-crud";
import { Request, Response } from "express";

const HomeController: Controller = {
  index: async (req: Request, res: Response) => {
    return res.json("index");
  },
  store: async (req: Request, res: Response) => {
    return res.json("store");
  },
  show: async (req: Request, res: Response) => {
    return res.json("show");
  },
  update: async (req: Request, res: Response) => {
    return res.json("update");
  },
  destroy: async (req: Request, res: Response) => {
    return res.json("destroy");
  },
};

export default HomeController;
