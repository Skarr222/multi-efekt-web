import { Router } from "express";
import { authMiddleware, AuthRequest } from "../middleware/authentification";

const router = Router();

router.get("/", authMiddleware, (req: AuthRequest, res) => {
  res.json({
    message: "🔐 Secure endpoint",
    user: req.user,
  });
});

export default router;
