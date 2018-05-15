const router = require("express").Router();
const faceRoutes = require("./face");
const dbRoutes = require("./db");

router.use("/face", faceRoutes);
router.use("/db", dbRoutes);

module.exports = router;

