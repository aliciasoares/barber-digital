const UsuarioService = require("../../service/UsuarioService");
class UsuarioController
{

    constructor()
    {
        this.usuarioService = new UsuarioService();
        this.index = this.index.bind(this);
    }
    
    async index(req, res){
        const usuarios = await this.usuarioService.buscarUsuario(req.params.id);
        res.render("usuario/index", {usuarios: usuarios})
    }
}

module.exports = new UsuarioController()