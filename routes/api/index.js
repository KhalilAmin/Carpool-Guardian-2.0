const router = require("express").Router();
const faceRoutes = require("./face");

router.use("/face", faceRoutes);

module.exports = router;

