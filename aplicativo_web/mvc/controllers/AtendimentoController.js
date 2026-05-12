const AtendimentoService = require("../../services/AtendimentoService");
class AtendimentoController 
{

    constructor() 
    {
        this.atendimentoService = new AtendimentoService();
        
    }

    async index(req, res) {
        const atendimentos = await this.atendimentoService.buscarAtendimento(req.params.id);
        res.render("atendimento/index", { atendimentos: atendimentos });
    }
}

module.exports = new AtendimentoController();