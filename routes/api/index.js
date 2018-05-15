const router = require("express").Router();
const faceRoutes = require("./face");
<<<<<<< HEAD

router.use("/face", faceRoutes);
=======
const dbRoutes = require("./db");

router.use("/face", faceRoutes);
router.use("/db", faceRoutes);
>>>>>>> b2f30b97eae165ddbd9df6ba5b744b389d059940

module.exports = router;

