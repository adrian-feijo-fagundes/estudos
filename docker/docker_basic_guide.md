# Guia  sobre Docker

## O que é o Docker?
Docker é uma plataforma de virtualização baseada em **containers**, que permite criar, distribuir e executar aplicações de forma isolada do ambiente do sistema operacional. Isso possibilita a execução de aplicações com todas as dependências necessárias, garantindo **portabilidade**, **eficiência** e **escalabilidade**.

## Containers
Os containers são unidades padronizadas que encapsulam uma aplicação e suas dependências, garantindo que ela rode de maneira **independente** do ambiente subjacente. Algumas de suas características principais incluem:
- Utilizam o mesmo sistema operacional hospedeiro, tornando-os **mais leves que máquinas virtuais**.
- Isolamento de processos, rede e variáveis de ambiente.
- Utilizam `cgroups` e `namespaces` para gerenciamento de recursos.
- Podem ser iniciados, parados e replicados de maneira rápida.

## Por que utilizar o Docker?
O Docker simplifica a implantação de aplicações, oferecendo:
- **Facilidade na configuração do ambiente**
- **Portabilidade entre diferentes sistemas**
- **Escalabilidade rápida**
- **Maior eficiência em comparação com VMs**

## Conceitos básicos do Docker

### **Dockerfile**
Arquivo que define todas as etapas necessárias para a criação de uma **imagem Docker**.

### **Imagem**
Pacote imutável contendo tudo o que a aplicação precisa para rodar. Exemplo: `node`, `ubuntu`.

### **Container**
Instância em execução de uma imagem Docker.

### **Registro**
Local de armazenamento das imagens Docker. Exemplos:
- **Docker Hub**
- **AWS Elastic Container Registry (ECR)**
- **Azure Container Registry**

## Comandos básicos do Docker

### **Listando containers**
- `docker ps` - Lista os containers em execução.
- `docker ps -a` - Mostra todos os containers, incluindo os que foram parados.

### **Criando e rodando containers**
- `docker run <nome-da-imagem>` - Cria e inicia um container baseado na imagem especificada.
- `docker run ubuntu` - Inicia um container com a imagem Ubuntu.
- `docker run -it ubuntu bash` - Inicia um container interativo com Ubuntu e acesso ao terminal Bash.
  - `-it` - Permite interatividade com o terminal do container.

### **Gerenciando containers**
- `docker stop <container-id>` - Para a execução de um container.
- `docker start <container-id>` - Inicia um container parado.
- `docker exec -it <container-id> <comando>` - Executa comandos em um container rodando.

## Criando uma imagem com Dockerfile

Exemplo de Dockerfile para um aplicativo Spring Boot:

```dockerfile
FROM maven:3.8.4-jdk AS build

COPY src /app/src
COPY pom.xml /app

WORKDIR /app
RUN mvn clean install

FROM openjdk:8-jre-alpine

COPY --from=build /app/target/spring-boot-2-hello-world-1.0.2-SNAPSHOT.jar /app/app.jar

WORKDIR /app
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
```

### **Explicação do Dockerfile**
1. **Fase de Build**
   - Utiliza `maven:3.8.4-jdk` para compilar o código e gerar o `.jar`.
   - Copia os arquivos do projeto (`src` e `pom.xml`).
   - Executa `mvn clean install` para compilar e gerar o JAR.

2. **Fase de Execução**
   - Utiliza uma imagem mais leve `openjdk:8-jre-alpine`.
   - Copia apenas o arquivo `.jar` da fase de build.
   - Define `/app` como diretório de trabalho e expõe a porta `8080`.
   - Define o comando padrão `java -jar app.jar`.

## Construindo e rodando uma imagem Docker

### **Gerando uma imagem a partir do Dockerfile**
- `docker build -t <nome-da-imagem> <caminho-dockerfile>`
  - Exemplo: `docker build -t spring-boot-hello-world:1.0 .`

### **Mapeando portas do container para a máquina host**
- `docker run -P <nome-imagem>` - Mapeia para uma porta aleatória.
- `docker run -p <portahospedeiro>:<porta-container> <nome-imagem>`
  - Exemplo: `docker run -p 8080:8080 spring-boot-hello-world:1.0`

## Publicando uma imagem no Docker Hub

### **Passos para subir uma imagem personalizada**
1. **Fazer login**
   - `docker login -u <usuario>`
2. **Construir a imagem**
   - `docker build -t <usuario>/<nome-imagem>:<tagname> <caminho-dockerfile>`
3. **Enviar para o Docker Hub**
   - `docker push <usuario>/<nome-imagem>:<tagname>`

## Gerando imagem para arquiteturas específicas
- `docker build --platform <plataforma> -t <usuario>/<nome-imagem>:<tagname> <caminho-dockerfile>`
- `docker tag <imagem> <imagem-com-nova-tag>`

---

Com esse guia, você tem um panorama completo do Docker, desde a teoria até a prática! 🚀

