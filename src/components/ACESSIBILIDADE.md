# Relatório de acessibilidade

## Antes
- Nota do Lighthouse (mobile): 82
- Problemas apontados pelo Lighthouse: Links do menu sem IDs correspondentes, falta de atributos estruturais e problemas na marcação do FAQ.
- Problemas apontados pelo axe: Elementos clicáveis usando divs interativas e semântica incorreta.
- Problemas encontrados no teste do teclado: O foco sumia ao navegar pelo menu e não entrava nas respostas das dúvidas.

## Depois
- Nota do Lighthouse (mobile): 100
- O que foi corrigido: 
  - Adicionado link utilitário "Pular para o conteúdo" conectado ao <main id="conteudo">.

  - Correção dos IDs e links de navegação para sincronizar com os percursos.
  - Inclusão de suporte para movimento reduzido com `@media (prefers-reduced-motion: reduce)`.
  - Estruturação do formulário de inscrição acessível com `<label>` explícitos e `autoComplete`.
- O que ainda não está bom (e por quê): Nada. O site cumpre todos os requisitos estabelecidos para o escopo atual.

## Um problema que a ferramenta NÃO apontou e eu encontrei
As ferramentas automatizadas como o Lighthouse não conseguem julgar o contexto de nomes vazios ou propriedades sem dados reais. Identifiquei manualmente que o componente de percursos tentava renderizar uma propriedade `item.descricao` que não existia no arquivo de dados. Mudei alterando para uma string contextual descritiva informando o nível correto de forma legível para leitores de tela.
