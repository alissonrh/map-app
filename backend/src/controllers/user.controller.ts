import User from "../database/models/user.model";

class UserController {
  async store(req: any, res: any) {

    const { name, geometry: position } = req.body;
    const user = await User.create({ name, position });

    return res.json(user);
  }

  async findAll(_req: any, res: any) {
    console.log('ENTROU');
    const response = await User.findAll();
    return res.status(200).json(response);
  }
}

export default UserController;
