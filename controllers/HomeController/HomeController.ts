import { Controller } from "../../common/controller-crud";

const HomeController: Controller = {
  index: async (req, res) => {
    return res.json("index");
  },
  store: async (req, res) => {
    return res.json("store");
  },
  show: async (req, res) => {
    return res.json("show");
  },
  update: async (req, res) => {
    return res.json("update");
  },
  destroy: async (req, res) => {
    return res.json("destroy");
  },
};

export default HomeController;
