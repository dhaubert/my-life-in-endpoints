const { Router } = require("express");

const meucontroledeponto = require("../clients/meucontroledeponto");

router = Router();
router.post("/", (req, res) => {
  meucontroledeponto.addNow();
  res.json({ message: "Registered" });
});

module.exports = router;
