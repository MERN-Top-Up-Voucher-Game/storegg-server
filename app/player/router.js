const express = require("express");
const router = express.Router();
const multer = require("multer");
const os = require("os");
const {
  index,
  actionStatus,
  landingPage,
  detailPage,
  category,
  checkout,
  history,
  historyDetail,
  dashboard,
  profile,
  editProfile,
} = require("./controller");
const { isLoginPlayer } = require("../middleware/auth");

router.get("/", index);
router.put("/status", actionStatus);

// api
router.get("/landingpage", landingPage);
router.post("/detail", detailPage);
router.get("/category", category);
router.post("/checkout", isLoginPlayer, checkout);
router.get("/history", isLoginPlayer, history);
router.post("/history/detail", isLoginPlayer, historyDetail);
router.get("/dashboard", isLoginPlayer, dashboard);
router.get("/profile", isLoginPlayer, profile);
router.put(
  "/profile",
  isLoginPlayer,
  multer({ dest: os.tmpdir() }).single("image"),
  editProfile
);

module.exports = router;
