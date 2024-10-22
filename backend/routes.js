const express = require('express');
const connection = require('./db');
const router = express.Router();


// Rota para listar todos os registros
router.get('/cadastro', (req, res) => {
  connection.query('SELECT * FROM cadastro', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      res.status(500).json({ error: 'Erro ao buscar os registros' });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo ID
router.get('/cadastro/:idCadastro', (req, res) => {
  const { idCadastro } = req.params;
  connection.query('SELECT * FROM cadastro WHERE idCadastro = ?', [idCadastro], (err, results) => {
    if (err) {
      console.error('Erro ao buscar o registro:', err);
      res.status(500).json({ error: 'Erro ao buscar o registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro não encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

// Rota para criar um novo registro
router.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;
  connection.query('INSERT INTO cadastro (nome, email, senha) VALUES (?, ?, ?)',
    [nome, email, senha], (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        res.status(500).json({ error: 'Erro ao criar o registro' });
        return;
      }
      res.status(201).json({ message: 'Registro criado com sucesso', idCadastro: result.insertId });
    });
});

// Rota para atualizar um registro existente pelo ID
router.put('/cadastro/:idCadastro', (req, res) => {
  const { idCadastro } = req.params;
  const { nome, email, senha } = req.body;
  connection.query('UPDATE cadastro SET nome = ?, email = ?, senha = ? WHERE idCadastro = ?',
    [nome, email, senha, idCadastro], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar o registro:', err);
        res.status(500).json({ error: 'Erro ao atualizar o registro' });
        return;
      }
      res.json({ message: 'Registro atualizado com sucesso' });
    });
});

// Rota para excluir um registro pelo ID
router.delete('/cadastro/:idCadastro', (req, res) => {
  const { idCadastro } = req.params;
  connection.query('DELETE FROM cadastro WHERE idCadastro = ?', [idCadastro], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
});

////////////////////////////////////////Login/////////////////////////////////////////////////

// Rota para listar todos os registros
router.get('/Login', (req, res) => {
  connection.query('SELECT * FROM Login', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      res.status(500).json({ error: 'Erro ao buscar os registros' });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo ID
router.get('/login/:idLogin', (req, res) => {
  const { idLogin } = req.params;
  connection.query('SELECT * FROM cadastro WHERE idLogin = ?', [idLogin], (err, results) => {
    if (err) {
      console.error('Erro ao buscar o registro:', err);
      res.status(500).json({ error: 'Erro ao buscar o registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro não encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

// Rota para logar no sistema
router.post('/login', (req, res) => {
  const { email, senha } = req.body;
  connection.query('select * from cadastro where email = ? and senha = ?',
    [email, senha], (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        res.status(500).json({ error: 'Erro ao criar o registro' });
        return;
      }
      res.json(result);
      // res.status(201).json({ message: 'Registro criado com sucesso', idLogin: result.insertId });
    });
});

// Rota para criar um novo registro
// router.post('/Login', (req, res) => {
//   const { email, senha } = req.body;
//   connection.query('INSERT INTO Login ( email, senha) VALUES (?, ?)',
//     [email, senha], (err, result) => {
//       if (err) {
//         console.error('Erro ao criar o registro:', err);
//         res.status(500).json({ error: 'Erro ao criar o registro' });
//         return;
//       }
//       res.status(201).json({ message: 'Registro criado com sucesso', idLogin: result.insertId });
//     });
// });

// Rota para atualizar um registro existente pelo ID
router.put('/login/:idLogin', (req, res) => {
  const { idLogin } = req.params;
  const { email, senha } = req.body;
  connection.query('UPDATE cadastro SET email = ?, senha = ? WHERE idLogin = ?',
    [email, senha, idLogin], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar o registro:', err);
        res.status(500).json({ error: 'Erro ao atualizar o registro' });
        return;
      }
      res.json({ message: 'Registro atualizado com sucesso' });
    });
});

// Rota para excluir um registro pelo ID
router.delete('/login/:idLogin', (req, res) => {
  const { idLogin } = req.params;
  connection.query('DELETE FROM cadastro WHERE idLogin = ?', [idLogin], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
});



////////////////////////////////////////Contato//////////////////////////////////////////////////////

// Rota para listar todos os registros
router.get('/Contato', (req, res) => {
  connection.query('SELECT * FROM Contato', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      res.status(500).json({ error: 'Erro ao buscar os registros' });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo ID
router.get('/Contato/:idContato', (req, res) => {
  const { idContato } = req.params;
  connection.query('SELECT * FROM Contato WHERE idContato = ?', [idContato], (err, results) => {
    if (err) {
      console.error('Erro ao buscar o registro:', err);
      res.status(500).json({ error: 'Erro ao buscar o registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro não encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

// Rota para criar um novo registro
router.post('/Contato', (req, res) => {
  const { nome, email, telefone, cpf } = req.body;
  connection.query('INSERT INTO Contato (nome, email, telefone, cpf) VALUES (?, ?, ?, ?)',
    [nome, email, telefone, cpf], (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        res.status(500).json({ error: 'Erro ao criar o registro' });
        return;
      }
      res.status(201).json({ message: 'Registro criado com sucesso', idContato: result.insertId });
    });
});

// Rota para atualizar um registro existente pelo ID
router.put('/Contato/:idContato', (req, res) => {
  const { idContato } = req.params;
  const { nome, email, telefone, cpf } = req.body;
  connection.query('UPDATE Contato SET nome = ?, email = ?, telefone = ?, cpf = ?  WHERE idContato = ?',
    [nome, email, telefone, cpf, idContato], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar o registro:', err);
        res.status(500).json({ error: 'Erro ao atualizar o registro' });
        return;
      }
      res.json({ message: 'Registro atualizado com sucesso' });
    });
});

// Rota para excluir um registro pelo ID
router.delete('/Contato/:idContato', (req, res) => {
  const { idContato } = req.params;
  connection.query('DELETE FROM Contato WHERE idContato = ?', [idContato], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
});


//////////////////////////////////////Medico///////////////////////////////

// Rota para listar todos os médicos
router.get('/medicos', (req, res) => {
  const query = 'SELECT * FROM medicos';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao consultar médicos:', err);
      res.status(500).send('Erro no servidor');
      return;
    }
    res.json(results);
  });
});

// Rota para adicionar um médico
router.post('/medicos', (req, res) => {
  const { nome, especialidade, numeroRegistro, horarioTrabalho, status, plantao } = req.body;
  const query = 'INSERT INTO medicos (nome, especialidade, numeroRegistro, horarioTrabalho, status, plantao) VALUES (?, ?, ?, ?, ?, ?)';

  connection.query(query, [nome, especialidade, numeroRegistro, horarioTrabalho, status, plantao], (err) => {
    if (err) {
      console.error('Erro ao adicionar médico:', err);
      res.status(500).send('Erro no servidor');
      return;
    }
    res.status(201).send('Médico adicionado com sucesso');
  });
});

// Rota para editar um médico
router.put('/medicos/:idMedico', (req, res) => {
  const { idMedico } = req.params;
  const { nome, especialidade, numeroRegistro, horarioTrabalho, status, plantao } = req.body;
  const query = 'UPDATE medicos SET nome = ?, especialidade = ?, numeroRegistro = ?, horarioTrabalho = ?, status = ?, plantao = ? WHERE idMedico = ?'; // Alterado para idMedico

  connection.query(query, [nome, especialidade, numeroRegistro, horarioTrabalho, status, plantao, idMedico], (err) => {
    if (err) {
      console.error('Erro ao editar médico:', err);
      res.status(500).send('Erro no servidor');
      return;
    }
    res.send('Médico editado com sucesso');
  });
});

// Rota para excluir um médico
router.delete('/medicos/:idMedico', (req, res) => {
  const { idMedico } = req.params;
  const query = 'DELETE FROM medicos WHERE idMedico = ?';

  connection.query(query, [idMedico], (err) => {
    if (err) {
      console.error('Erro ao excluir médico:', err);
      res.status(500).send('Erro no servidor');
      return;
    }
    res.send('Médico excluído com sucesso');
  });
});

module.exports = router;
