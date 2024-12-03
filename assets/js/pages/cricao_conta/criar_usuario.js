document.getElementById('userForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const senha = document.getElementById('senha').value;
  const confirmaSenha = document.getElementById('confirma_senha').value;

  if (senha !== confirmaSenha) {
    document.getElementById('popup_senha').classList.remove('hidden');

    document.getElementById('closePopupSenha').addEventListener('click', () => {
      document.getElementById('popup_senha').classList.add('hidden');
    });
    return;
  }

  const userData = { Nome: nome, Email: email, Telefone: telefone, Senha: senha };

  try {
    const response = await fetch('http://localhost:3000/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      document.getElementById('popup_ok').classList.remove('hidden');
      document.getElementById('closePopup').addEventListener('click', () => {
        document.getElementById('popup_ok').classList.add('hidden');
        window.location.href = 'index.html';
      });
    } else {
      const data = await response.json();

      if (response.status === 402 && data.error.includes('E-mail já está em uso')) {
        document.getElementById('popup_email').classList.remove('hidden');
        document.getElementById('closePopupemail').addEventListener('click', () => {
          document.getElementById('popup_email').classList.add('hidden');
        });
      } else if (response.status === 403 && data.error.includes('Telefone já está em uso')) {
        document.getElementById('popup_telefone').classList.remove('hidden');
        document.getElementById('closePopuptelefone').addEventListener('click', () => {
          document.getElementById('popup_telefone').classList.add('hidden');
        });
      } else {
        throw new Error('Erro desconhecido ao criar usuário');
      }
    }
  } catch (error) {
    console.error('Erro:', error);
    alert('Erro ao criar usuário');
  }
});