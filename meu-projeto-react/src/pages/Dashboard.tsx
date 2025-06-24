import '../style.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <header>
        <h1>Bem-vindo(a) à REXautomate!</h1>
        <p>Você está logado com sucesso.</p>
      </header>

      <main>
        <section>
          <h2>Relatórios Mensais</h2>
          <p>Aqui você pode visualizar, baixar ou gerenciar os relatórios da Bosch Rexroth.</p>
        </section>

        <section>
          <h2>Status da Automação</h2>
          <p>Sistema funcionando normalmente. Última atualização: 24/06/2025.</p>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
