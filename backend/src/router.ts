import { Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { DeleteUserController } from "./controller/DeleteUserController";
import { ListUsersController } from "./controller/ListUsersController";
import { UpdateUserController } from "./controller/UpdateUserController";

const router = Router();

router.post("/user", new CreateUserController().handle);

router.get("/user", new ListUsersController().handle);

router.delete("/user", new DeleteUserController().handle);

router.patch("/user", new UpdateUserController().handle);

export { router };
