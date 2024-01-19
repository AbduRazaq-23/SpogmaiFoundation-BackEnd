import { User } from "../models/user.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  const { name, phone, email, password, c_password } = req.body;

  if (
    [name, phone, email, password, c_password].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const userExist = await User.findOne(email);
  if (userExist) {
    throw new ApiError(500, "User Exist already");
  }

  const user = await User.create({
    name,
    phone,
    email,
    password,
    c_password,
  });

  const createUser = await User.findById(user._id).select(
    "-password -c_password"
  );

  if (!createUser) {
    throw new ApiError(500, "Something went wrong while registering User");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, "User Registered Successfully"));
});

export { registerUser };
