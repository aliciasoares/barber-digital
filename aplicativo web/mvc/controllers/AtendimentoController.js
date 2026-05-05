const AtendimentoService = require("../../service/AtendimentoService");
class AtendimentoController 
{

    constructor() 
    {
        this.atendimentoService = new AtendimentoService();
        this.index = this.index.bind(this);
    }

    async index(req, res) {
        const atendimentos = await this.atendimentoService.buscarAtendimento(req.params.id);
        res.render("atendimento/index", { atendimentos: atendimentos });
    }
}

module.exports = new AtendimentoController();