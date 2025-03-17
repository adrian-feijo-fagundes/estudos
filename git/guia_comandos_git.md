# Guia de Comandos Git

## 1. Configuração Inicial

- `git config --global user.name "Seu Nome"` - Define o nome do usuário para todos os repositórios.
- `git config --global user.email "seuemail@exemplo.com"` - Define o email do usuário.
- `git config --global color.ui auto` - Configura a exibição de cores no terminal para melhor leitura.
- `git config --global --list` - Exibe todas as configurações globais do Git.

## 2. Inicialização e Clonagem de Repositório

- `git init` - Inicializa um novo repositório Git no diretório atual.
- `git clone <URL>` - Clona um repositório remoto para o diretório local.

## 3. Status e Histórico de Alterações

- `git status` - Exibe o estado atual do repositório.
- `git log` - Mostra o histórico de commits.
  - `git log --oneline` - Exibe uma linha resumida por commit.
  - `git log --stat` - Exibe detalhes das mudanças.
  - `git log --graph --oneline -5` - Exibe os cinco últimos commits de forma simplificada com um gráfico.
- `git log --author="nome"` - Filtra commits por autor.
- `git log --before="YYYY-MM-DD"` - Filtra commits antes de uma data específica.
- `git diff` - Mostra as diferenças entre arquivos modificados.
  - `git diff --staged` - Mostra as diferenças entre a área de staging e o último commit.
  - `git diff <branch1> <branch2>` - Mostra as diferenças entre duas branches.

## 4. Adicionar e Comitar Alterações

- `git add <arquivo>` - Adiciona um arquivo específico à área de staging.
- `git add .` ou `git add -A` - Adiciona todas as mudanças.
- `git commit -m "Mensagem"` - Cria um commit com uma mensagem.
- `git commit -am "Mensagem"` - Adiciona e comita todas as alterações monitoradas.
- `git commit --amend` - Modifica o último commit.

## 5. Trabalhando com Branches

- `git branch` - Lista todas as branches.
- `git branch <nome>` - Cria uma nova branch.
- `git checkout <nome>` - Alterna para uma branch existente.
- `git checkout -b <nome>` - Cria e muda para uma nova branch.
- `git merge <nome>` - Mescla a branch especificada na branch atual.
- `git branch -d <nome>` - Remove uma branch já mesclada.
- `git branch -D <nome>` - Remove uma branch forçadamente.
- `git branch --merged` - Lista as branches que já foram mescladas.
- `git branch --no-merged` - Lista as branches que ainda não foram mescladas.
- `git cherry-pick <hash>` - Aplica um commit específico de outra branch.

## 6. Atualizar e Enviar Alterações ao Repositório Remoto

- `git fetch` - Busca atualizações do repositório remoto sem mesclar.
- `git pull` - Atualiza o repositório local com mudanças do remoto.
- `git pull origin <branch>` - Atualiza a branch especificada.
- `git push` - Envia os commits para o repositório remoto.
- `git push origin <branch>` - Envia uma branch específica para o remoto.
- `git remote remove <nome>` - Remove um repositório remoto.
- `git remote show origin` - Exibe informações sobre o repositório remoto.

## 7. Desfazendo Alterações

- `git reset <arquivo>` - Remove um arquivo da área de staging.
- `git reset --hard <hash>` - Volta para um commit específico, descartando mudanças.
- `git revert <hash>` - Desfaz um commit criando um novo commit.
- `git checkout -- <arquivo>` - Desfaz alterações não comitadas em um arquivo.
- `git restore <arquivo>` - Restaura um arquivo para o último commit.

## 8. Colaboração e Revisão

- `git stash` - Salva temporariamente as mudanças sem fazer commit.
  - `git stash pop` ou `git stash apply` - Aplica as mudanças salvas.
- `git rebase <branch>` - Move o histórico da branch atual para outra.
- `git rebase --abort` - Cancela um rebase em andamento.
- `git rebase --continue` - Continua um rebase após resolver conflitos.
- `git rebase -i HEAD` - Rebase interativo para editar histórico de commits.

## 9. Resolver Conflitos

- `git merge --abort` - Cancela um merge em andamento.
- `git merge --continue` - Continua um merge após resolver conflitos.
- `git mergetool` - Abre uma ferramenta de merge para resolver conflitos.

## 10. Trabalhando com Tags

- `git tag <nome>` - Cria uma tag leve.
- `git tag -a <nome> -m "mensagem"` - Cria uma tag anotada.
- `git tag` - Lista todas as tags.
- `git push --tags` - Envia todas as tags para o repositório remoto.
- `git tag -d <nome>` - Remove uma tag localmente.
- `git push --delete origin <nome>` - Remove uma tag do repositório remoto.