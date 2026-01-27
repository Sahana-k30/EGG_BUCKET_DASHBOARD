import express from "express";
import { addUser, getAllUsers, deleteUser, getAllDistributors, getAllDataAgents, getAllViewers } from "../controllers/adminController.js";

const router = express.Router();



router.post("/add-user", addUser);
router.get("/all-users", getAllUsers);
router.get("/all-distributors", getAllDistributors);
router.get("/all-dataagents", getAllDataAgents);
router.get("/all-viewers", getAllViewers);
router.post("/delete-user", deleteUser);

export default router;
