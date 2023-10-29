const moment = require('moment');

const authEmail = (req, res, next) => {
    const { email } = req.body;
    const isValidEmail = (/^\S+@\S+\.\S+$/).test(email);

    if (!email || email.length === 0) {
        return res.status(400).json({ message: 'O campo email é obrigatório' });
    }

    if (!isValidEmail) {
        return res.status(400).json({ message: 'O email deve ter o formato email@email.com' });
    }
    next();
};

const authPass = (req, res, next) => {
    
    const { password } = req.body;

    if (!password) {
        return res.status(400).json({ message: 'O campo "password" é obrigatório' });
    }

    if (password.length < 6) {
        return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
    }

    next();
};

const authToken = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ message: 'Token não encontrado' });
    }
    if (authorization.length < 16) {
        return res.status(401).json({ message: 'Token inválido' });
    }

    next();
};

const authName = (req, res, next) => {
    const { nome } = req.body;

    const isValidName = /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(nome);

    if (!nome) {
        return res.status(400).json({ message: 'O campo nome é obrigatório' });
    }
    if (nome.length < 3) {
        return res.status(400).json({ message: 'O campo nome deve ter pelo menos 3 caracteres' });
    }

    if (!isValidName) {
        return res.status(400).json({ message: 'O campo nome deve conter apenas letras e seguir o formato correto, Por exemplo: Lucas Alves Lima.' });
    }


    next();
};

const authDataNascimento = (req, res, next) => {
    const { data_nascimento } = req.body;

    const isValidFormat = /^\d{4}-\d{2}-\d{2}$/.test(data_nascimento);

    if (!data_nascimento) {
        return res.status(400).json({ message: 'O campo data_nascimento é obrigatório' });
    }

    if (!isValidFormat || !moment(data_nascimento, 'YYYY-MM-DD', true).isValid()) {
        return res.status(400).json({ message: 'Data de nascimento inválida. Utilize o formato: YYYY-MM-DD' });
    }

    next();
};

const authDataEntrada = (req, res, next) => {
    const { data_entrada } = req.body;

    const isValidFormat = /^\d{4}-\d{2}-\d{2}$/.test(data_entrada);

    if (!data_entrada) {
        return res.status(400).json({ message: 'O campo data_nascimento é obrigatório' });
    }

    if (!isValidFormat || !moment(data_entrada, 'YYYY-MM-DD', true).isValid()) {
        return res.status(400).json({ message: 'Data de entrada inválida. Utilize o formato: YYYY-MM-DD' });
    }

    next();
};

const authFone = (req, res, next) => {
    const { fone } = req.body;

    const isValidFormat = /^\+\d{1,4}\d{1,3}\d{10,}$/.test(fone);

    if (!fone) {
        return res.status(400).json({ message: 'O campo fone é obrigatório' });
    }

    if (!isValidFormat) {
        return res.status(400).json({ message: 'Formato de número de telefone inválido. Utilize o formato: +CódigoDoPaisDDDNumero (mínimo 7 dígitos após DDD)' });
    }

    next();
};

const authUserId = (req, res, next) => {
    const { userId } = req.body;

    const isValidUser = userId === null || userId === undefined;

    const isValidWithNumber = typeof userId !== 'number' || !Number.isInteger(userId) || userId <= 0;

    if (isValidUser) {
        return res.status(400).json({ message: 'O userId é obrigatório' });
    }

    if (isValidWithNumber) {
        return res.status(400).json({ message: 'O userId é obrigatório e deve ser um número inteiro positivo' });
    }

    next();
};

module.exports = {
    authEmail,
    authPass,
    authToken,
    authName,
    authDataNascimento,
    authDataEntrada,
    authFone,
    authUserId
};