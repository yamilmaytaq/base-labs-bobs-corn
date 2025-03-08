import { Router } from "express";
import { PurchaseController } from "../controllers/purchase-controller.js";

const router = Router();

router.post("/", (req, res) => PurchaseController.purchaseCorn(req, res));
router.get("/history", (req, res) => PurchaseController.getPurchaseHistory(req, res));

export default router;
