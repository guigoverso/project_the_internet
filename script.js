let contentTitleTag = document.getElementById("contentTitle")
let contentTextTag = document.getElementById("contentText") 

let contentTitle = {
    "1960": "Anos 1960 - Início da Internet:",
    "1970": "Anos 1970 - Protocolos de Comunicação:",
    "1980": "Anos 1980 - Expansão e Comercialização:",
    "1990": "Anos 1990 - Nascimento da World Wide Web:",
    "2000": "Anos 2000 - Redes Sociais e Vídeos Online:",
}

let contentText = {
    "1960": "A internet teve suas origens na década de 1960 como uma rede de computadores do Departamento de Defesa dos EUA, chamada ARPANET (Advanced Research Projects Agency Network). Originalmente, a ARPANET foi criada para permitir que cientistas e acadêmicos de diferentes locais físicos compartilhassem informações e colaborassem em pesquisa.",
    "1970": "Os anos 70 testemunharam o desenvolvimento dos protocolos TCP/IP (Transmission Control Protocol/Internet Protocol), que permitem a transferência de dados entre computadores em redes diferentes. A adoção desses protocolos pela ARPANET em 1983 marcou a operacionalização da internet como a conhecemos hoje.",
    "1980": "Durante os anos 80, a internet começou a se expandir além do uso acadêmico e militar, entrando no domínio comercial. Em 1989, a NSF (National Science Foundation) permitiu o uso comercial da internet resultando em seu rápido crescimento.",
    "1990": "Em 1991, o CERN (Conselho Europeu para a Pesquisa Nuclear) apresentou ao mundo a World Wide Web, uma rede de hipertexto acessível ao público e projetada para tornar a internet mais fácil de usar. O primeiro navegador web, chamado Mosaic, foi lançado em 1993, tornando a Web mais acessível para o usuário comum.\n<h3>Fim dos anos 1990 - A era do \".com\"</h3>\nNo final dos anos 1990, a internet deu lugar à \"bolha do ponto com\", uma época de especulação de mercado em torno das empresas de internet. Embora muitas dessas empresas não tenham sobrevivido ao estouro da bolha em 2000-2002, outras, como Amazon e Google, não apenas sobreviveram, mas se tornaram algumas das maiores empresas do mundo.",
    "2000": "Os anos 2000 foram caracterizados pelo surgimento das redes sociais e do compartilhamento de vídeos online. Sites como Facebook, YouTube e Twitter foram lançados durante esse período, e o acesso à internet em dispositivos móveis começou a se tornar cada vez mais comum.",  
}

function changeContent(year) {
    contentTitleTag.innerHTML = contentTitle[year]
    contentTextTag.innerHTML = contentText[year]
}

changeContent("1960")