# MonkeyCode / OpenCode — Premium Web Skills

Pacote com 15 skills para criação de sites e landing pages de alto valor.

## Instalação recomendada por projeto

Copie a pasta `.opencode` para a RAIZ do seu projeto.

A estrutura deve ficar assim:

```text
meu-projeto/
├─ .opencode/
│  └─ skills/
│     ├─ high-value-website-director/
│     │  └─ SKILL.md
│     ├─ premium-web-design-director/
│     │  └─ SKILL.md
│     └─ ...
├─ src/
├─ public/
├─ package.json
└─ ...
```

O OpenCode procura oficialmente skills de projeto em:

```text
.opencode/skills/<nome-da-skill>/SKILL.md
```

Também são aceitos `.agents/skills/` e `.claude/skills/`.

## opencode.json

Este pacote inclui um `opencode.json` opcional que libera o carregamento das skills:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "permission": {
    "skill": {
      "*": "allow"
    }
  }
}
```

IMPORTANTE: se seu projeto já possui `opencode.json` ou `opencode.jsonc`, NÃO substitua cegamente o arquivo. Mescle apenas a configuração `permission.skill` com a configuração existente.

## Como usar no MonkeyCode

1. Coloque `.opencode/skills/` no repositório do site.
2. Faça commit e push para o GitHub/GitLab que você seleciona como código no MonkeyCode.
3. Inicie a tarefa no MonkeyCode usando esse repositório.
4. No prompt, diga explicitamente para usar as skills do projeto quando forem relevantes.

Exemplo:

```text
Analise este projeto e desenvolva/refine a landing page.

Use as Agent Skills disponíveis em .opencode/skills.
Para esta tarefa, carregue primeiro high-value-website-director e depois todas as skills especializadas relevantes.

Priorize conversão, qualidade visual premium, experiência mobile, performance, acessibilidade e SEO.
Não considere a tarefa concluída antes de executar uma revisão visual, responsiva e de produção.
```

As skills locais podem ser descobertas pelo agente OpenCode mesmo que NÃO apareçam no seletor "Skills" da tela inicial do MonkeyCode. Esse seletor é uma lista fornecida pelo backend do MonkeyCode; as skills de `.opencode/skills/` pertencem ao mecanismo nativo do OpenCode dentro do projeto.

## Fluxo recomendado para um projeto novo

Antes de enviar ao MonkeyCode:

```bash
git add .opencode opencode.json
git commit -m "add premium web agent skills"
git push
```

Se já existir `opencode.json`, não use o comando acima até mesclar a configuração corretamente.

## Atualizar as skills em vários projetos

A opção simples é copiar a mesma pasta `.opencode/skills/` para cada projeto.

Uma opção mais avançada é manter este pacote em um repositório separado e sincronizá-lo com scripts/submodules, mas para projetos de clientes a cópia local costuma ser mais previsível e evita dependências externas.

## Skills incluídas

- high-value-website-director
- premium-web-design-director
- landing-page-cro-architect
- mobile-first-ux-expert
- frontend-architecture-senior
- design-system-builder
- visual-qa-pixel-polish
- motion-interaction-designer
- web-performance-expert
- seo-technical-expert
- accessibility-expert
- asset-image-director
- conversion-copywriter
- browser-responsive-qa
- deployment-guardian

## Observação importante

`name` no YAML de cada `SKILL.md` precisa coincidir exatamente com o nome da pasta. O arquivo precisa se chamar `SKILL.md` em maiúsculas.

Não altere esses nomes sem alterar também o frontmatter.
