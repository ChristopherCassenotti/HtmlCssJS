<?php 
    
    $dbHost = 'Localhost';
    $dbUser = 'root';
    $dbPassword = '';
    $dbName = 'forms';

    $conexao = new mysqli($dbHost,$dbUser,$dbPassword,$dbName);

    if($conexao->connect_errno)
    {
        echo "Erro";
    }
    else{
        echo "Conectado";
    }

?>