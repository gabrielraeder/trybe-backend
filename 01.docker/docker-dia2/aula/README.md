1 - build da imagem docker <code>docker build -t multi-stage-site-hugo .</code>

2 - criar container apartir da imagem criada <code>docker run -p 1234:80 -d --name meu-container multi-stage-site-hugo</code>

3 - remover container criado <code>docker rm -f meu-container</code>
