mkdir -p controllers/usuario
touch controllers/usuario/usuarioController.js




// controllers/usuario/usuarioController.js
const Usuario = require('../models/Usuario'); // Importar o modelo de usuário

// Função para criar um novo usuário
const criarUsuario = async (req, res) => {
  try {
    const novoUsuario = await Usuario.create(req.body);
    res.status(201).json(novoUsuario);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar usuário.' });
  }
};

// Função para obter todos os usuários
const obterUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao obter usuários.' });
  }
};

// Função para obter um usuário por ID
const obterUsuarioPorId = async (req, res) => {
  const { usuarioId } = req.params;
  try {
    const usuario = await Usuario.findById(usuarioId);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    res.status(200).json(usuario);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao obter usuário por ID.' });
  }
};

// Função para atualizar um usuário por ID
const atualizarUsuario = async (req, res) => {
  const { usuarioId } = req.params;
  try {
    const usuarioAtualizado = await Usuario.findByIdAndUpdate(
      usuarioId,
      req.body,
      { new: true } // Retorna o documento atualizado
    );
    if (!usuarioAtualizado) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    res.status(200).json(usuarioAtualizado);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar usuário por ID.' });
  }
};

// Função para excluir um usuário por ID
const excluirUsuario = async (req, res) => {
  const { usuarioId } = req.params;
  try {
    const usuarioExcluido = await Usuario.findByIdAndDelete(usuarioId);
    if (!usuarioExcluido) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    res.status(200).json({ message: 'Usuário excluído com sucesso.' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao excluir usuário por ID.' });
  }
};

module.exports = {
  criarUsuario,
  obterUsuarios,
  obterUsuarioPorId,
  atualizarUsuario,
  excluirUsuario,
};