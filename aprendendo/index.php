<?php

    if(isset($_POST['submit']))
    {
        include_once('config.php');

        $name = $_POST['name'];
        $email = $_POST['email'];
        $number = $_POST['number'];
        $sexo = $_POST['sexo'];
        $date = $_POST['date'];
        $city = $_POST['city'];
        $local = $_POST['local'];
        $endereco = $_POST['endereco'];

        $result = mysqli_query($conexao, "INSERT INTO usuario(nome,email,telefone,sexo,data_nascimento,cidade,estado,endereco)
        VALUES ('$name','$email','$number','$sexo','$date','$city','$local','$endereco')");
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <button id="btn_show">SHOW</button>
    <div id="contador" class="count">
        <button id="minus" onclick="sub()">-</button>
        <span id="visor"></span>
        <button id="add" onclick="add()">+</button>
        <button id="reset" onclick="reset()">reset</button>
    </div>
    <form action="index.php" method="POST">
        <input type="text" id="name" name="name" placeholder="Nome">
        <input type="email" id="email" name="email" placeholder="Email">
        <input type="number" name="number" id="number" placeholder="Telefone">
        <select name="sexo" id="sexo">Sexo
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outros">Outros</option>
        </select>
        <input type="date" name="date" id="date">
        <input type="text" id="city" name="city" placeholder="Cidade">
        <input type="text" id="local" name="local" placeholder="Local">
        <input type="text" id="endereco" name="endereco" placeholder="Endereço">
        <input type="submit" value="submit" name="submit">
    </form>
</body>
<script src="script.js"></script>
</html>