<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/mqueries.css">
    <!--    <link rel="stylesheet" href="css/bootstrap.min.css"> -->
    <!-- <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> -->
    <title>Adalberto - Portifólio</title>
</head>

<body>
    <!-- CAPA DO PORTIFOLIO -->
    <header>
        <nav class="sociais">
            <ul>
                <li class="facebook"><a href="https://www.facebook.com/adalbertoart" target="_blank"><img src="images/icons/facebook.png" alt="Facebook"></a></li>
                <li class="instagram"><a href="https://www.instagram.com/adalbertoart/" target="_blank"><img src="images/icons/instagram.png" alt="Instagram"></a></li>
                <li class="linkedin"><a href="linkedin.com/in/adalberto-teixeira" target="_blank"><img src="images/icons/linkedin.png" alt="Linkedin"></a></li>
                <li class="whatsapp"><a href="https://api.whatsapp.com/send?phone=5517997033384&text=Olá!%20Meu%20nome%20é%20Adalberto.%20Sou%20Desenvolvedor%20Web.%20Em%20que%20posso%20ajudá-lo?" target="_blank"><img src="images/icons/whatsapp.png" alt="Whatsapp"></a></li>
                <li class="github"><a href="https://github.com/AdalbertoRT" target="_blank"><img src="images/icons/github_icon.png" alt="Github"></a></li>
                <li class="mail"><a href="mailto:adalbertoart@gmail.com?subject=Olá!%20Tudo%20bem?" target="_blank"><img src="images/icons/mail.png" alt="E-mail"></a></li>
            </ul>
        </nav>
    </header>
    <section id="capa">
        <div class="capa">
            <!-- <div id="foto">
                <div id="eu"></div>
            </div> -->
        </div>
        <aside>
            <div id="port" class="scalable"><a href="">PORTIFÓLIO</a></div>
            <div id="webDev">
                <div id="nomeMobile" class="scalable"><a href="">Adalberto <span id="sobrenome">Teixeira</span></a></div>
                <div id="web">
                    <span class="titulo">WEB</span>
                </div>
                <div id="nome_dev">
                    <div id="nome" class="scalable"><a href="#about">Adalberto Teixeira</a></div>
                    <span id="dev" class="titulo">DEVELOPER</span>
                </div>
            </div>

            <span id="ano"><?php echo date("Y") ?></span>
        </aside>
    </section>

    <!-- Sobre mim -->
    <section id="page2">
        <div id="about">
            <h2>Quem sou eu? &nbsp;<small>(About)</small></h2>
            <div id="aboutContent">
                <div id="bordaSup">
                    <div id="et"></div>
                    <div id="dt"></div>
                </div>

                <div id="imgInfo">
                    <div id="eu2" title="Este sou eu!"></div>
                    <div id="info">
                        Meu nome é <strong class="destaque nome">Adalberto Rodrigues Teixeira</strong> e sou <span class="destaque">Desenvolvedor Web</span>. Sou formado em <span class="destaque">Análise e Desenmvolvimento de Sistemas</span> e tenho como especialização, o desenvolvimento de aplicações web. Estou apto a codificar tanto o <span class="destaque">front-end</span> como o <span class="destaque">back-end</span>​, ou seja, <span class="destaque">sou desenvolvedor Full-Stack</span>. A stack que mais domino é: <span class="destaque">PHP, HTML5, CSS3, Javascript e MySQL</span> assim como, alguns <span class="destaque">frameworks de back e front-ends e editores de imagem</span>.<br /><br />

                        Minha <span class="destaque">graduação</span> foi pela <span class="destaque">Unifran</span> em modelo EAD, através do sistema de ensino Cruzeiro do Sul Virtual. Mas minhas experiências com programação vem desde 2007 quando resolvi prestar vestibular para o curso de <span class="destaque">Informática para a Gestão de Negócios</span> na Fatec - São José do Rio Preto - SP, cidade onde resido. Fiz outros cursos posteriormente de <span class="destaque">Administração</span> e <span class="destaque">Design Gráfico</span>, mas retornei para a minha primeira paixão, a <span class="destaque">informática</span> <img class="heart" src="images/heart-anil.png" alt="">.
                        <br /><br />

                        <!-- Em paralelo a programação sempre exerci a profissão de barbeiro (eu sei, não tem nada a ver com a área kkkk), que me deu combustível para que eu realizasse meus estudos. Depois de anos de estudo, hoje me sinto seguro e experiente para exercer a profissão de <span class="destaque">programador</span>.<br /><br /> -->

                        Hoje <span class="destaque">continuo meus estudos</span> com <span class="destaque">cursos online de altíssima qualidade</span>, pela <span class="destaque">B7web, Udemy, Origamid, Digital Innovation One, Curso em Video, entre outros</span>. Já realizei varios projetos que são aplicados nestes cursos, desde <span class="destaque">Landing Pages, Sites Institucionais, Lojas Virtuais, Portais, Portifólios e muitas outras aplicações</span>. Além dos cursos participo de comunidades, canais de programadores, fóruns e <span class="destaque">estou conectado</span> a varios grupos de programadores (Whatsapp e redes sociais). Assim me mantenho sempre atualizado.
                    </div>
<<<<<<< HEAD
=======
                
                <div class="controles">
                    <a href="javascript:void(0);" class="setas prev" onclick="pararSkill(-1)">&#9756;</a>
                    <a href="javascript:void(0);" class="setas next" onclick="pararSkill(1)">&#9758;</a>
>>>>>>> c8633f885614ff6d26f8d00410beb8ef2f5843b9
                </div>
                <div id="bordaInf">
                    <div id="eb"></div>
                    <div id="db"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Conhecimentos -->
    <section id="page3">
        <div id="knowledges">
            <h2>Conhecimentos &nbsp;<small>(Knowledge)</small></h2>
            <div id="knowledge">
                <!-- <ul class="knows">
                    <h3 class="know-title">--</h3>
                    <li><img src=""><span>--</span></li>
                </ul> -->
            </div>
        </div>

    </section>

    <!-- Projetos -->
    <section id="page4">
        <h2>Meus Projetos <small>(Projects)</small></h2>
        <div id="projects">
            <!-- <div class="card">
                <div class="card-body">

                </div>
                <div class="card-text"></div>
            </div> -->
        </div>
    </section>

    <footer>
        <p>Adalberto Rodrigues Teixeira - <?php echo Date('Y'); ?></p>
        <nav class="sociais">
            <ul>
                <li class="facebook"><a href="https://www.facebook.com/adalbertoart" target="_blank"><img src="images/icons/facebook.png" alt="Facebook"></a></li>
                <li class="instagram"><a href="https://www.instagram.com/adalbertoart/" target="_blank"><img src="images/icons/instagram.png" alt="Instagram"></a></li>
                <li class="linkedin"><a href="linkedin.com/in/adalberto-teixeira" target="_blank"><img src="images/icons/linkedin.png" alt="Linkedin"></a></li>
                <li class="whatsapp"><a href="https://api.whatsapp.com/send?phone=5517997033384&text=Olá!%20Meu%20nome%20é%20Adalberto.%20Sou%20Desenvolvedor%20Web.%20Em%20que%20posso%20ajudá-lo?" target="_blank"><img src="images/icons/whatsapp.png" alt="Whatsapp"></a></li>
                <li class="github"><a href="https://github.com/AdalbertoRT" target="_blank"><img src="images/icons/github_icon.png" alt="Github"></a></li>
                <li class="mail"><a href="mailto:adalbertoart@gmail.com?subject=Olá!%20Tudo%20bem?" target="_blank"><img src="images/icons/mail.png" alt="E-mail"></a></li>
            </ul>
        </nav>
        <button><a href="images/curriculum.pdf" download="Curriculum.pdf"><img src="images/icons/curriculo.png" alt="Curriculo">Baixar Currículum</a></button>
    </footer>

    <!-- <script type="text/javascript" src="js/knowledges.js"></script> -->
    <script type="text/javascript" src="js/script.js"></script>
</body>

</html>