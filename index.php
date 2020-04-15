<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <!--    <link rel="stylesheet" href="css/bootstrap.min.css"> -->
    <!-- <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> -->
    <title>Adalberto Rodrigues Teixeira</title>
</head>
<body>
    <!-- CAPA DO PORTIFOLIO -->
    <div id="capa">
        <section class="capa">
            <!-- <div id="foto">
                <div id="eu"></div>
            </div> -->
        </section>
        <aside>
            <div id="port"  class="scalable"><a href="">PORTIFÓLIO</a></div>
            <div id="webDev">
                <div id="web">
                    <span class="titulo">WEB</span>
                </div>
               <div id="nome_dev">
                <div id="nome" class="scalable"><a href="">Adalberto Teixeira</a></div>
                <span id="dev" class="titulo">DEVELOPER</span>
               </div>
            </div>
            
            <span id="ano"><?php echo date("Y")?></span>
        </aside>
    </div>
    <!-- PAGINA 2 -->
    <div id="page2">
        <section>
            <div id="about">
                <h4>Quem sou eu? &nbsp;<small>(About)</small></h4>
                <div id="aboutContent">
                    <div id="bordaSup">
                        <div id="et"></div>
                        <div id="dt"></div>
                    </div>                  
                    
                    <div id="imgInfo">
                        <div id="eu2" title="Este sou eu!"></div>
                        <div id="info">
                            Meu nome é <strong class="destaque nome">Adalberto Rodrigues Teixeira</strong> e sou Desenvolvedor Web. Sou formado em <span class="destaque">Análise e Desenmvolvimento de Sistemas</span> e tenho como especialização, o desenvolvimento de aplicações web. Estou apto a codificar tanto o <span class="destaque">front-end</span> como o <span class="destaque">back-end</span>​, ou seja, <span class="destaque">sou desenvolvedor Full Stack</span>. A stack que mais domino é: PHP, HTML5, CSS3, Javascript e MySQL assim como, alguns frameworks e editores de imagem.<br/><br/>
                            
                            Minha graduação foi pela Unifran em modelo EAD, através do sistema de ensino Cruzeiro do Sul Virtual. Mas minhas experiências com programação vem  desde 2007 quando resolvi prestar vestibular para o curso de Informática para a Gestão de Negócios na Fatec - São José do Rio Preto - SP, cidade onde resido. Cursei este curso por 3 anos, mas precisei trancar por motivos pessoais. Fiz outros cursos posteriormente de <span class="destaque">Administração</span> e <span class="destaque">Design Gráfico</span>, mas retornei para a minha primeira paixão, a informática <img class="heart" src="images/heart-anil.png" alt="">.
                            <br/><br/>
    
                            Em paralelo a programação sempre exerci a profissão de barbeiro (eu sei, não tem nada a ver com a área kkkk), que me deu combustível para que eu realizasse meus estudos. Depois de anos de estudo, hoje me sinto seguro e experiente para exercer a profissão de <span class="destaque">programador</span>.<br/><br/>
    
                            Hoje <span class="destaque">continuo meus estudos</span> com cursos online de altíssima qualidade, pela B7web, Udemy, Rocketseat, Curso em Video entre outros. Já realizei varios projetos que são aplicados nestes cursos, desde Landing Pages, Sites Institucionais, Lojas Virtuais, Portais, Portifólios e muitas outras aplicações. Além dos cursos participo de comunidades, canais de programadores, fóruns e <span class="destaque">estou conectado</span> a varios grupos de programadores (Whatsapp  e redes sociais). Assim me mantenho sempre atualizado.
                        </div>
                    </div>
                    <div id="bordaInf">
                        <div id="eb"></div>
                        <div id="db"></div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <div id="page3">
        <div id="skills">
            <h4>Habilidades <small>(Skills)</small></h4>
            <div id="slideSkills" >
                    <div class="skill display">
                        <fieldset>
                            <legend>Front-end</legend>
                            <div class="item">
                                <span>&#9673; HTML5</span><div class="barra" nivel="80%"><div class="nivel"></div></div>
                            </div>
                            <div class="item">
                                <span>&#9673; CSS3</span><div class="barra" nivel="70%"><div class="nivel"></div></div>
                            </div>
                            <div class="item">
                                <span>&#9673; Javascript</span><div class="barra" nivel="50%"><div class="nivel"></div></div>
                            </div>
                        </fieldset>
                    </div>
                    <div class="skill">
                        <fieldset>
                            <legend>Back-end</legend>
                            <div class="item">
                                <span>&#9673; PHP</span><div class="barra" nivel="70%"><div class="nivel"></div></div>
                            </div>
                            <div class="item">
                                <span>&#9673; Node.js</span><div class="barra" nivel="20%"><div class="nivel"></div></div>
                            </div>
                            <div class="item">
                                <span>&#9673; Python</span><div class="barra" nivel="40%"><div class="nivel"></div></div>
                            </div>
                            <div class="item">
                                <span>&#9673; MySQL</span><div class="barra" nivel="70%"><div class="nivel"></div></div>
                            </div>
                        </fieldset>
                    </div>
                    <div class="skill">
                        <fieldset>
                            <legend>Frameworks</legend>
                            <div class="item">
                                <span>&#9673; Laravel 6</span><div class="barra" nivel="50%"><div class="nivel"></div></div>
                            </div>
                            <div class="item">
                                <span>&#9673; Bootstrap 4</span><div class="barra" nivel="80%"><div class="nivel"></div></div>
                            </div>
                            <div class="item">
                                <span>&#9673; ReactJS</span><div class="barra" nivel="20%"><div class="nivel"></div></div>
                            </div>
                            <div class="item">
                                <span>&#9673; Vue</span><div class="barra" nivel="20%"><div class="nivel"></div></div>
                            </div>
                        </fieldset>
                    </div>
                
                <div class="controles">
                    <a href="javascript:void(0);" class="setas prev" onclick="pararSkill(-1)">&#9756;</a>
                    <a href="javascript:void(0);" class="setas next" onclick="pararSkill(1)">&#9758;</a>
                </div>
                
            </div>
        </div>
    </div>
    <div id="page4">
        <div id="cert">
                <h4>Meus Certificados <small>(Certificates)</small></h4>
                <div id="slideCert">
                    <div class="certificados">

                    </div>
                    <div class="controles">
                        <a href="#slideCert" class="setas prev" onclick="mudaCert(-1)">&#9756;</a>
                        <a href="#slideCert" class="setas next" onclick="mudaCert(1)">&#9758;</a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

    <div id="page5">
        <div>Meus Projetos <small>(Projects)</small></div>
    </div>

</body>

<!-- <script src="js/jquery.js"></script>
<script src="js/bootstrap.min.js"></script> -->
<script src="js/script.js"></script>
<!-- <script src="js/vue.js"></script> -->
</html>