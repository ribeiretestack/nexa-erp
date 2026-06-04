// ==========================================
// 0. CÉREBRO DE DADOS DA NEXA (Escopo Global)
// ==========================================
window.NexaData = {
    vendasHoje: { valor: 42500.00, percentual: 12.5 },
    lucroMensal: { valor: 128000.00, percentual: 8.3 },
    pedidosTransito: { valor: 234, percentual: -2.4 },
    vendas: { ticketMedio: 342.00, taxaConversao: 3.8, novosClientes: 1240 },
    financeiro: { contasReceber: 45200.00, contasPagar: 18900.00, saldoCaixa: 114500.00 },
    rh: { totalColaboradores: 48, admissoesMes: 3, turnover: 1.2 },
    marketing: { roi: 4.2, cpl: 2.45, trafego: 85400 },
    logistica: { aguardandoColeta: 14, emTransporte: 42, entreguesHoje: 118 },
    fluxoFinanceiro: [
        { dia: 1, receita: 12500, despesa: 8200 }, { dia: 2, receita: 13200, despesa: 8500 },
        { dia: 3, receita: 14100, despesa: 8100 }, { dia: 4, receita: 15500, despesa: 9000 },
        { dia: 5, receita: 16000, despesa: 8800 }, { dia: 6, receita: 15800, despesa: 9200 },
        { dia: 7, receita: 17200, despesa: 8900 }, { dia: 8, receita: 18500, despesa: 9500 },
        { dia: 9, receita: 19100, despesa: 9100 }, { dia: 10, receita: 18800, despesa: 10200 },
        { dia: 11, receita: 20500, despesa: 9800 }, { dia: 12, receita: 21000, despesa: 10500 },
        { dia: 13, receita: 22500, despesa: 10100 }, { dia: 14, receita: 21800, despesa: 11000 },
        { dia: 15, receita: 23000, despesa: 10800 }, { dia: 16, receita: 24500, despesa: 11500 },
        { dia: 17, receita: 25200, despesa: 11200 }, { dia: 18, receita: 24800, despesa: 12000 },
        { dia: 19, receita: 26000, despesa: 11800 }, { dia: 20, receita: 27500, despesa: 12500 },
        { dia: 21, receita: 28100, despesa: 12100 }, { dia: 22, receita: 27800, despesa: 13000 },
        { dia: 23, receita: 29000, despesa: 12800 }, { dia: 24, receita: 30500, despesa: 13500 },
        { dia: 25, receita: 31200, despesa: 13100 }, { dia: 26, receita: 30800, despesa: 14000 },
        { dia: 27, receita: 32000, despesa: 13800 }, { dia: 28, receita: 33500, despesa: 14500 },
        { dia: 29, receita: 34100, despesa: 14100 }, { dia: 30, receita: 42500, despesa: 15000 }
    ]
};

window.renderizarMetricas = function() {
    const valVendas = document.getElementById('val-vendas');
    const badgeVendas = document.getElementById('badge-vendas');
    if(valVendas) valVendas.innerText = window.NexaData.vendasHoje.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    if(badgeVendas) badgeVendas.innerHTML = `<i class="fa-solid fa-arrow-trend-up"></i> +${window.NexaData.vendasHoje.percentual}%`;

    const valLucro = document.getElementById('val-lucro');
    const badgeLucro = document.getElementById('badge-lucro');
    if(valLucro) valLucro.innerText = window.NexaData.lucroMensal.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    if(badgeLucro) badgeLucro.innerHTML = `<i class="fa-solid fa-arrow-trend-up"></i> +${window.NexaData.lucroMensal.percentual}%`;

    const valPedidos = document.getElementById('val-pedidos');
    const badgePedidos = document.getElementById('badge-pedidos');
    if(valPedidos) valPedidos.innerText = window.NexaData.pedidosTransito.valor;
    if(badgePedidos) badgePedidos.innerHTML = `<i class="fa-solid fa-arrow-trend-down"></i> -${Math.abs(window.NexaData.pedidosTransito.percentual)}%`;

    const valTicket = document.getElementById('val-ticket');
    if(valTicket) valTicket.innerText = window.NexaData.vendas.ticketMedio.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const valConversao = document.getElementById('val-conversao');
    if(valConversao) valConversao.innerText = window.NexaData.vendas.taxaConversao + '%';
    const valNovosClientes = document.getElementById('val-novos-clientes');
    if(valNovosClientes) valNovosClientes.innerText = '+' + window.NexaData.vendas.novosClientes;

    const valReceber = document.getElementById('val-receber');
    if(valReceber) valReceber.innerText = window.NexaData.financeiro.contasReceber.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const valPagar = document.getElementById('val-pagar');
    if(valPagar) valPagar.innerText = window.NexaData.financeiro.contasPagar.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const valSaldo = document.getElementById('val-saldo');
    if(valSaldo) valSaldo.innerText = window.NexaData.financeiro.saldoCaixa.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    const valColaboradores = document.getElementById('val-colaboradores');
    if(valColaboradores) valColaboradores.innerText = window.NexaData.rh.totalColaboradores;
    const valAdmissoes = document.getElementById('val-admissoes');
    if(valAdmissoes) valAdmissoes.innerText = '+' + window.NexaData.rh.admissoesMes;
    const valTurnover = document.getElementById('val-turnover');
    if(valTurnover) valTurnover.innerText = window.NexaData.rh.turnover + '%';

    const valRoi = document.getElementById('val-roi');
    if(valRoi) valRoi.innerText = window.NexaData.marketing.roi + 'x';
    const valCpl = document.getElementById('val-cpl');
    if(valCpl) valCpl.innerText = window.NexaData.marketing.cpl.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const valTrafego = document.getElementById('val-trafego');
    if(valTrafego) valTrafego.innerText = (window.NexaData.marketing.trafego / 1000).toFixed(1) + 'K';

    const valColeta = document.getElementById('val-coleta');
    if(valColeta) valColeta.innerText = window.NexaData.logistica.aguardandoColeta;
    const valTransporte = document.getElementById('val-transporte');
    if(valTransporte) valTransporte.innerText = window.NexaData.logistica.emTransporte;
    const valEntregues = document.getElementById('val-entregues');
    if(valEntregues) valEntregues.innerText = window.NexaData.logistica.entreguesHoje;
};

document.addEventListener("DOMContentLoaded", function () {
    
    // 1. BOOT DO SISTEMA
    const painelCards = document.querySelectorAll('.card');
    const nexaChart = document.getElementById('interactive-chart');
    painelCards.forEach(card => card.classList.add('skeleton'));
    if (nexaChart) nexaChart.style.opacity = '0';

    setTimeout(() => {
        painelCards.forEach(card => card.classList.remove('skeleton'));
        window.renderizarMetricas();
        if (nexaChart) {
            nexaChart.style.transition = 'opacity 1s ease';
            nexaChart.style.opacity = '1';
        }
        showToast('Conexão estabelecida. Nexus AI online.', 'success');
    }, 1500);

    // 2. NAVEGAÇÃO SPA (Com suporte ao Mobile)
    const menuItems = document.querySelectorAll(".nav-item");
    const views = document.querySelectorAll(".content-view");

    menuItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            menuItems.forEach(i => i.classList.remove("active"));
            this.classList.add("active");

            const targetViewId = "view-" + this.getAttribute("data-target");
            views.forEach(view => {
                view.classList.remove("active");
                if (view.id === targetViewId) {
                    view.classList.add("active");
                }
            });
            // Opcional: Se for num ecrã muito pequeno, fazer scroll até ao topo após clicar
            if (window.innerWidth <= 900) {
                document.querySelector('.main-wrapper').scrollTo(0, 0);
            }
        });
    });

    // 2.1. LOGO CLICÁVEL (VOLTA PARA O INÍCIO)
    const logo = document.getElementById('logo-nexa');
    const btnInicio = document.querySelector('.nav-item[data-target="inicio"]');

    if (logo && btnInicio) {
        logo.addEventListener('click', () => {
            btnInicio.click(); // Isso faz com que ao clicar no "NEXA" ele tenha a mesma funcionalidade que ao clicar em "Início"
        });
    }

    // 3. MOTOR DO GRÁFICO
    const container = document.getElementById('nexa-chart-container');
    const tooltip = document.getElementById('chart-tooltip');
    const svg = document.getElementById('interactive-chart');
    const svgReceita = document.getElementById('bezier-path');
    const svgDespesa = document.getElementById('bezier-path-despesa');
    const svgArea = document.getElementById('bezier-area');

    let guideLine = document.getElementById('guide-line');
    if (!guideLine && svg) {
        guideLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        guideLine.setAttribute('id', 'guide-line');
        guideLine.setAttribute('stroke', 'rgba(157, 78, 221, 0.4)');
        guideLine.setAttribute('stroke-width', '1');
        guideLine.setAttribute('y1', '0');
        guideLine.setAttribute('y2', '200'); 
        svg.appendChild(guideLine);
    }

    let dotRec = document.getElementById('dot-receita');
    if (!dotRec && svg) {
        dotRec = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        dotRec.setAttribute('id', 'dot-receita');
        dotRec.setAttribute('r', '4');
        dotRec.setAttribute('fill', '#FFFFFF');
        dotRec.setAttribute('stroke', '#9D4EDD'); 
        dotRec.setAttribute('stroke-width', '2');
        svg.appendChild(dotRec);
    }

    let dotDes = document.getElementById('dot-despesa');
    if (!dotDes && svg) {
        dotDes = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        dotDes.setAttribute('id', 'dot-despesa');
        dotDes.setAttribute('r', '4');
        dotDes.setAttribute('fill', '#FFFFFF');
        dotDes.setAttribute('stroke', '#FF3D00'); 
        dotDes.setAttribute('stroke-width', '2');
        svg.appendChild(dotDes);
    }

    const maxValor = Math.max(...window.NexaData.fluxoFinanceiro.map(d => Math.max(d.receita, d.despesa))) * 1.1; 
    const chartData = window.NexaData.fluxoFinanceiro.map((d, i) => {
        const x = (i / (window.NexaData.fluxoFinanceiro.length - 1)) * 400; 
        const yRec = 180 - ((d.receita / maxValor) * 160);
        const yDes = 180 - ((d.despesa / maxValor) * 160);
        return { dia: d.dia, x: x, yRec: yRec, yDes: yDes, receitaReal: d.receita, despesaReal: d.despesa };
    });

    if (svgReceita && svgArea) {
        let pathRecD = `M 0,${chartData[0].yRec}`;
        let pathDesD = `M 0,${chartData[0].yDes}`;
        let areaD = `M 0,180 L 0,${chartData[0].yRec}`;

        for (let i = 0; i < chartData.length - 1; i++) {
            const p1 = chartData[i];
            const p2 = chartData[i + 1];
            const cpX = p1.x + (p2.x - p1.x) / 2;

            pathRecD += ` C ${cpX},${p1.yRec} ${cpX},${p2.yRec} ${p2.x},${p2.yRec}`;
            if (svgDespesa) pathDesD += ` C ${cpX},${p1.yDes} ${cpX},${p2.yDes} ${p2.x},${p2.yDes}`;
            areaD += ` C ${cpX},${p1.yRec} ${cpX},${p2.yRec} ${p2.x},${p2.yRec}`;
        }
        areaD += ` L 400,180 Z`; 

        svgReceita.setAttribute('d', pathRecD);
        if (svgDespesa) svgDespesa.setAttribute('d', pathDesD);
        svgArea.setAttribute('d', areaD);
    }

    if (container) {
        container.addEventListener('mousemove', function (e) {
            const rect = container.getBoundingClientRect();
            const paddingLeft = 95; 
            const chartWidth = rect.width - paddingLeft;
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            if (mouseX >= paddingLeft && mouseX <= rect.width) {
                const totalPoints = window.NexaData.fluxoFinanceiro.length - 1;
                const exactIndex = ((mouseX - paddingLeft) / chartWidth) * totalPoints;
                
                const i1 = Math.min(Math.max(Math.floor(exactIndex), 0), totalPoints - 1);
                const i2 = i1 + 1;
                const fraction = exactIndex - i1;

                const currentYRec = chartData[i1].yRec + (chartData[i2].yRec - chartData[i1].yRec) * fraction;
                const currentYDes = chartData[i1].yDes + (chartData[i2].yDes - chartData[i1].yDes) * fraction;
                const currentRecReal = chartData[i1].receitaReal + (chartData[i2].receitaReal - chartData[i1].receitaReal) * fraction;
                const currentDesReal = chartData[i1].despesaReal + (chartData[i2].despesaReal - chartData[i1].despesaReal) * fraction;

                const svgX = (exactIndex / totalPoints) * 400;

                guideLine.style.display = 'block';
                guideLine.setAttribute('x1', svgX);
                guideLine.setAttribute('x2', svgX);

                dotRec.style.display = 'block';
                dotRec.setAttribute('cx', svgX);
                dotRec.setAttribute('cy', currentYRec);

                if (dotDes) {
                    dotDes.style.display = 'block';
                    dotDes.setAttribute('cx', svgX);
                    dotDes.setAttribute('cy', currentYDes);
                }

                const diaVisor = Math.round(exactIndex) + 1;
                document.getElementById('tooltip-date').innerText = `Dia ${diaVisor < 10 ? '0' + diaVisor : diaVisor}`;
                document.getElementById('tooltip-rec').innerText = currentRecReal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                document.getElementById('tooltip-des').innerText = currentDesReal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

                tooltip.style.display = 'block';
                const tooltipRect = tooltip.getBoundingClientRect();
                
                let tooltipX = mouseX + 15;
                let tooltipY = mouseY + 15;

                if (tooltipX + tooltipRect.width > rect.width) tooltipX = mouseX - tooltipRect.width - 15;
                if (tooltipY + tooltipRect.height > rect.height) tooltipY = mouseY - tooltipRect.height - 15;

                tooltip.style.left = tooltipX + "px";
                tooltip.style.top = tooltipY + "px";
            }
        });

        container.addEventListener('mouseleave', function () {
            if (guideLine) guideLine.style.display = 'none';
            if (dotRec) dotRec.style.display = 'none';
            if (dotDes) dotDes.style.display = 'none';
            if (tooltip) tooltip.style.display = 'none';
        });
    }

    // 4. LÓGICA DO CHAT CORPORATIVO
    const chatItems = document.querySelectorAll('.chat-list-item');
    const chatTitle = document.getElementById('chat-current-title');
    const chatMessages = document.getElementById('chat-messages-container');
    const chatOnlineCount = document.getElementById('chat-online-count');

    let htmlGeral = '';
    if (chatMessages) {
        htmlGeral = chatMessages.innerHTML;
    }

    chatItems.forEach(item => {
        item.addEventListener('click', function() {
            chatItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');

            const nomeCanal = this.innerText.trim();
            if(chatTitle) chatTitle.innerText = nomeCanal;

            if (nomeCanal === '# geral') {
                if(chatMessages) chatMessages.innerHTML = htmlGeral;
                if(chatOnlineCount) chatOnlineCount.innerText = "12";
            } 
            else if (nomeCanal === 'Nexus AI') {
                if(chatOnlineCount) chatOnlineCount.innerText = "Sempre";
                if(chatMessages) {
                    chatMessages.innerHTML = `
                        <div class="message nexa-response" style="margin-top: auto;">
                            <div class="msg-avatar nexa-bot"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
                            <div class="msg-content">
                                <div class="msg-header"><span class="msg-author" style="color: var(--nexa-purple);">Nexus AI</span> <span class="msg-time">Agora</span></div>
                                <div class="msg-bubble ai-bubble">
                                    Olá, Daniel! Estou monitorizando o sistema. Como posso otimizar a sua operação hoje?<br><br>
                                    Pode pedir-me para gerar relatórios, analisar o fluxo de caixa, ou enviar avisos para a equipa.
                                </div>
                            </div>
                        </div>
                    `;
                }
            } 
            else {
                if(chatOnlineCount) chatOnlineCount.innerText = Math.floor(Math.random() * 5) + 1; 
                if(chatMessages) {
                    chatMessages.innerHTML = `
                        <div class="empty-state" style="border: none; margin: auto; opacity: 0.5;">
                            <i class="fa-regular fa-comments" style="font-size: 40px; margin-bottom: 16px;"></i>
                            <h4>Sem mensagens recentes</h4>
                            <p>Envie uma mensagem para iniciar a conversa em ${nomeCanal}.</p>
                        </div>
                    `;
                }
            }
        });
    });

    // 5. EVENTO DO ÍCONE DA IA
    const btnIA = document.getElementById('btn-nexus-ia');
    if (btnIA) {
        btnIA.addEventListener('click', () => {
             window.showToast('Nexus AI em fase de treinamento. Disponível em breve!', 'info');
        });
    }
}); 

// ==========================================
// 5. FUNÇÕES GLOBAIS (MODAL, TOAST, SKELETON E CARRINHO)
// ==========================================
window.openModal = () => { const m = document.getElementById('confirmation-modal'); if(m) m.classList.add('active'); };
window.closeModal = () => { const m = document.getElementById('confirmation-modal'); if(m) m.classList.remove('active'); };
window.executeAction = () => { window.closeModal(); window.showToast('Ação executada e registada nos logs.', 'success'); };

window.showToast = function(msg, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const iconClass = type === 'success' ? 'fa-check-circle' : 'fa-circle-exclamation';
    toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 3000);
};

window.toggleSkeleton = function() {
    const cards = document.querySelectorAll('#view-configuracoes .card');
    cards.forEach(card => card.classList.add('skeleton'));
    setTimeout(() => {
        cards.forEach(card => card.classList.remove('skeleton'));
        window.showToast('Integração com a API restabelecida.', 'success');
    }, 2000);
};

// --- MÓDULO DE FATURAMENTO (CARRINHO) ---
let itensCarrinho = [
    { id: 1, nome: "Licença Nexa Enterprise", preco: 1200.00 }
];

window.atualizarCarrinho = function() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.querySelector('.cart-total strong, .cart-footer strong:first-of-type');
    
    if (!cartItemsContainer) return;
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (itensCarrinho.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-state" style="border:none; padding-top:40px;">
                <i class="fa-solid fa-file-invoice"></i>
                <h4 style="margin-top: 10px;">Faturamento vazio</h4>
                <p style="font-size: 12px;">Adicione módulos ao contrato.</p>
            </div>`;
    } else {
        itensCarrinho.forEach((item, index) => {
            total += item.preco;
            cartItemsContainer.innerHTML += `
                <div style="padding: 16px; background: var(--bg-base); border-radius: 8px; display: flex; justify-content: space-between; align-items: center; border: 1px solid var(--border-color);">
                    <div style="display: flex; flex-direction: column; gap: 4px;">
                        <span style="font-weight: 500; font-size: 14px;">${item.nome}</span>
                        <strong style="color: var(--nexa-purple); font-size: 14px;">${item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                    </div>
                    <button class="btn-ghost" onclick="removerDoCarrinho(${index})" style="padding: 6px 10px; border-color: rgba(255,61,0,0.3); color: var(--danger-red);">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            `;
        });
    }

    if (cartTotalContainer) {
        cartTotalContainer.innerText = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
};

window.adicionarAoCarrinho = function(nome, preco) {
    itensCarrinho.push({ id: Date.now(), nome, preco });
    window.atualizarCarrinho();
    window.showToast(`${nome} incluído no contrato.`, 'success');
};

window.openCart = function() {
    window.atualizarCarrinho();
    const cart = document.getElementById('cart-drawer');
    if(cart) cart.classList.add('active');
};

window.closeCart = function() {
    const cart = document.getElementById('cart-drawer');
    if(cart) cart.classList.remove('active');
};

window.removerDoCarrinho = function(index) {
    itensCarrinho.splice(index, 1);
    window.atualizarCarrinho();
};

window.finalizarPedidoNativo = function() {
    if (itensCarrinho.length === 0) {
        window.showToast('Adicione módulos antes de gerar o faturamento!', 'warning');
        return;
    }
    const totalPedido = itensCarrinho.reduce((acc, item) => acc + item.preco, 0);
    window.NexaData.vendasHoje.valor += totalPedido;
    window.renderizarMetricas();
    itensCarrinho = [];
    window.atualizarCarrinho();
    window.closeCart();
    window.showToast(`Faturamento de ${totalPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} processado com sucesso!`, 'success');
};

// --- INTERAÇÕES DA TABELA ---
window.concluirAcaoTabela = function(botao, mensagem) {
    const linha = botao.closest('tr');
    const statusCell = linha.querySelector('.status-cell');
    if(statusCell) {
        statusCell.innerHTML = '<span class="status-badge success">Concluído</span>';
    }
    botao.style.transition = '0.2s';
    botao.style.transform = 'scale(0)';
    setTimeout(() => botao.remove(), 200);
    window.showToast(mensagem, 'success');
};

// =====================================================
// TRIBUTO EM MEMÓRIA
//======================================================
console.log(
    "%cEm memória de Gabriel Frezza, eterno em nossas vidas!", "color: #9D4EDD; font-size: 16px; font-weight: bold; font-family: 'Inter', sans-serif; padding: 10px; border-left: 4px solid #9D4EDD; background: rgba(157,78, 221, 0.1);"
);
