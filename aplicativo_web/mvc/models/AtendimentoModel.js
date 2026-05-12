class Atendimento
{
    nomeCliente
    telefone
    horarioAtendimento
    dataAtendimento
    dataNascimento
    tipoServico
    profissional
    constructor(nomeCliente, telefone, horarioAtendimento, dataAtendimento, dataNascimento, tipoServico, profissional)
    {   
        this.nomeCliente = nomeCliente
        this.telefone = telefone
        this.horarioAtendimento = horarioAtendimento
        this.dataAtendimento = dataAtendimento
        this.dataNascimento = dataNascimento
        this.tipoServico = tipoServico
        this.profissional = profissional
    }
}
module.exports = Atendimento