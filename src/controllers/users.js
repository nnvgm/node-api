import User from '../models/users';
import httpStatus from '../config/httpStatus';

export async function GetUser(req, res) {
  try {
    const users = await User.find();

    return res.status(httpStatus.OK).json({
      msg: 'Get User',
      data: { users },
      success: true,
    });
  } catch (error) {
    console.log(`GetUser Error, ${error}`);

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      msg: 'Internal Server Error',
      data: null,
      success: false,
    });
  }
}

export async function CreateUser(req, res) {
  try {
    const { name, age } = req.body;

    const user = new User({
      name,
      age,
    });

    await user.save();

    return res.status(httpStatus.CREATED).json({
      msg: 'Create New User',
      data: { user },
      success: true,
    });
  } catch (error) {
    console.log(`CreateUser Error, ${error}`);

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      msg: 'Internal Server Error',
      data: null,
      success: false,
    });
  }
}

export async function UpdateUser(req, res) {
  try {
    const { id } = req.params;
    const { name, age } = req.body;
    const user = await User.findById(id);

    user.name = name;
    user.age = age;

    await user.save();

    return res.status(httpStatus.OK).json({
      msg: 'Update User',
      data: { user },
      success: true,
    });
  } catch (error) {
    console.log(`UpdateUser Error, ${error}`);

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      msg: 'Internal Server Error',
      data: null,
      success: false,
    });
  }
}

export async function DeleteUser(req, res) {
  try {
    const { id } = req.params;

    await User.findByIdAndDelete(id);

    return res.status(httpStatus.OK).json({
      msg: 'Delete User Success',
      data: null,
      success: true,
    });
  } catch (error) {
    console.log(`DeleteUser Error, ${error}`);

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      msg: 'Internal Server Error',
      data: null,
      success: false,
    });
  }
}
