const userService = require("../services/users.service");

const create = async (req, res) => {
  try {
    await userService.createUser(req.body);

    return res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while creating",
      error: error.message,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const user = await userService.getAll();

    return res.status(200).json({
      message: "Users retrieved successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while retrieving users",
      error: error.message,
    });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "User retrieved successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while retrieving user",
      error: error.message,
    });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const user = await userService.update(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const dataToUpdate = {
      name: name || user.name,
      email: email || user.email,
      password: password || user.password,
    };

    await userService.update(id, dataToUpdate);

    return res.status(200).json({
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while updating user",
      error: error.message,
    });
  }
};

const deleteById = async (req,res) => {
    try {
        const { id } = req.params;
        const user = await userService.deleteById(id);

        return res.status(200).json({
            message: "User deleted successfully"
        })

    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while deleting user",
            error: error.message,
        })
    }
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  deleteById,
};
