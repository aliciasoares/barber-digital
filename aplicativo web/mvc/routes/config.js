const { Router } = require("express")
const UsuarioController = require("../controllers/UsuarioController")

const router = Router()

router.get("/user/index", UsuarioController.index)

const AtendimentoController = require("../../mvc/controllers/AtendimentoController");
router.get("/atendimentos/:id", AtendimentoController.index);

module.exports = router