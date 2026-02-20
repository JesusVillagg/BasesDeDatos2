let textoGenerado = "";
 
const apellidosMX = [
    "Hernández", "García", "Martínez", "López", "González", "Pérez", "Rodríguez", "Sánchez", "Ramírez", "Cruz",
    "Flores", "Gómez", "Morales", "Vázquez", "Jiménez", "Reyes", "Díaz", "Torres", "Gutiérrez", "Ruiz",
    "Mendoza", "Aguilar", "Ortiz", "Moreno", "Castillo", "Romero", "Álvarez", "Méndez", "Chávez", "Rivera",
    "Juárez", "Domínguez", "Herrera", "Medina", "Ramos", "Castro", "Ortega", "Vargas", "Santiago", "Salazar",
    "Rojas", "De la Cruz", "Guzmán", "Franco", "Silva", "Luna", "Muñoz", "Cabrera", "Delgado", "Contreras",
    "León", "Ríos", "Estrada", "Bautista", "Meza", "Gallegos", "Miranda", "Carrillo", "Valencia", "Nava",
    "Lara", "Pacheco", "Soto", "Cervantes", "Robledo", "Esquivel", "Salinas", "Maldonado", "Marín", "Calderón",
    "Lugo", "Rosas", "Padilla", "Fuentes", "Espinoza", "Rangel", "Acosta", "Sandoval", "Villegas", "Valdés",
    "Alfaro", "Camacho", "Guerrero", "Lozano", "Guevara", "Galindo", "Beltrán", "Orozco", "Pineda", "Navarro",
    "Parra", "Villalobos", "Duarte", "Serrano", "Ávila", "Ibarra", "Téllez", "Rocha", "Trejo", "Esparza"
];

const apellidosRU = [
    "NULL", "Petrov", "Sidorov", "Smirnov", "Kuznetsov", "Popov", "Vasiliev", "Sokolov", "Mikhailov", "Novikov",
    "Fedorov", "Morozov", "Volkov", "Alekseev", "Lebedev", "Semenov", "Egorov", "Pavlov", "Kozlov", "Stepanov",
    "Nikolaev", "Orlov", "Andreev", "Makarov", "Zakharov", "Zaitsev", "Soloviev", "Belov", "Komarov", "Grigoriev",
    "Romanov", "Pakhomov", "Antonov", "Tarasov", "Medvedev", "Zhukov", "Frolov", "Baranov", "Kulikov", "Gavrilov",
    "Yakovlev", "Kalinin", "Chernov", "Bykov", "Korolev", "Ponomarev", "Gusev", "Danilov", "Zorin", "Belyaev",
    "Demidov", "Larionov", "Timofeev", "Savelyev", "Ignatov", "Kapustin", "Ryabov", "Dorofeev", "Melnikov", "Fomin",
    "Tikhonov", "Golubev", "Sergeev", "Mironov", "Lapshin", "Seleznev", "Prokhorov", "Ustinov", "Borodin", "Martynov",
    "Krylov", "Ovchinnikov", "Shestakov", "Losev", "Dyakov", "Pankratov", "Sapozhnikov", "Kiselev", "Rozhkov", "Kravtsov",
    "Shiryaev", "Klimov", "Fadeev", "Chistyakov", "Trofimov", "Eliseev", "Nazarov", "Goncharov", "Karpov", "Lytkin",
    "Bondarev", "Fedoseev", "Sukhanov", "Pisarev", "Lukyanov", "Ostrovsky", "Meshkov", "Shuvalov", "Plotnikov", "Gordeev"
];

const nombresMX = [
    "Juan", "José", "Luis", "Carlos", "Miguel", "Pedro", "Jorge", "Fernando", "Ricardo", "Alejandro",
    "Daniel", "David", "Eduardo", "Francisco", "Manuel", "Roberto", "Andrés", "Sergio", "Raúl", "Iván",
    "Héctor", "Arturo", "Alberto", "Mario", "Óscar", "Rubén", "Enrique", "Javier", "Adrián", "Esteban",
    "Diego", "Emilio", "Rodrigo", "Guillermo", "Salvador", "Hugo", "Alfonso", "Ramón", "Ignacio", "Tomás",
    "Benjamín", "Sebastián", "Pablo", "Leonardo", "Mauricio", "Ulises", "Federico", "Ernesto", "César", "Fabián",
    "Gael", "Damián", "Bruno", "Alan", "Axel", "Iker", "Kevin", "Jonathan", "Brian", "Edgar",
    "Ángel", "Jesús", "Cristian", "Marco", "Omar", "Ismael", "Abraham", "Samuel", "Josué", "Emanuel",
    "Noé", "Ezequiel", "Elías", "Matías", "Saúl", "Uriel", "Elian", "Lorenzo", "Nicolás", "Thiago",
    "Emiliano", "Santiago", "Máximo", "Camilo", "Gael", "Valentín", "Julián", "Cristóbal", "Iván", "Bautista",
    "Alexis", "Kevin", "Brayan", "Brandon", "Dylan", "Ian", "Álvaro", "Darío", "Rafael", "Teodoro"
];

const nombresFR = [
    "Jean", "Pierre", "Paul", "Louis", "Jacques", "Michel", "Claude", "André", "Philippe", "Bernard",
    "François", "Julien", "Nicolas", "Thomas", "Antoine", "Sébastien", "Alexandre", "Mathieu", "Christophe", "Laurent",
    "Olivier", "Damien", "Romain", "Victor", "Hugo", "Lucas", "Maxime", "Baptiste", "Éric", "Loïc",
    "Théo", "Clément", "Florian", "Adrien", "Guillaume", "Benjamin", "Jérôme", "Rémi", "Yann", "Cédric",
    "Sophie", "Marie", "Camille", "Julie", "Claire", "Élise", "Chloé", "Manon", "Lucie", "Pauline",
    "Laura", "Émilie", "Caroline", "Sandrine", "Valérie", "Nathalie", "Isabelle", "Catherine", "Brigitte", "Monique",
    "Amandine", "Aurélie", "Justine", "Mélanie", "Anaïs", "Océane", "Margaux", "Noémie", "Léa", "Inès",
    "Zoé", "Agathe", "Maëlle", "Élodie", "Clara", "Romane", "Salomé", "Maëva", "Tiphaine", "Constance",
    "Gabriel", "Arthur", "Raphaël", "Nathan", "Enzo", "Kylian", "Noah", "Adam", "Samuel", "Eliott",
    "Lina", "Nina", "Aya", "Yasmine", "Imane", "Farah", "Sarah", "Nour", "Mariam", "Leïla"
];

function generar() {
    let tipoFormato = document.getElementById("opcion").value;
 
    switch (tipoFormato) {
        case "1": generarSQL(); break;
        case "2": generarSQLpostgresql(); break;
        case "3": generarSQLCSV(); break;
        case "4": generarJSON(); break;
    }
}
 
function generarSQL() {
    textoGenerado = "INSERT INTO alumnos VALUES \n";
    let matriculaBase = 224250000;
    let totalRegistros = document.getElementById('registros').value;
    
    for (let i = 0; i < totalRegistros; i++) {
        let apeNacional = apellidosMX[Math.floor(Math.random() * apellidosMX.length)];
        let apeExtranjero = apellidosRU[Math.floor(Math.random() * apellidosRU.length)];
        let agregaSegundoNombre = Math.random() < 0.5;
        
        let apellidoDos = (apeExtranjero === "NULL") ? "NULL" : `UPPER('${apeExtranjero}')`;
        
        let nombreCompleto = nombresMX[Math.floor(Math.random() * nombresMX.length)];
        if (agregaSegundoNombre) {
            let nomExtranjero = nombresFR[Math.floor(Math.random() * nombresFR.length)];
            nombreCompleto += ` ${nomExtranjero}`;
        }
        
        textoGenerado += `(${matriculaBase + i}, UPPER('${apeNacional}'), ${apellidoDos}, '${nombreCompleto}', 'a${matriculaBase + i}@unison.mx')${i == totalRegistros - 1 ? ';' : ','}\n`;
    }
    
    document.getElementById("salida").innerHTML = "<pre>" + textoGenerado + "</pre>";
}

function generarSQLpostgresql() {
    textoGenerado = "INSERT INTO alumnos (matricula, apellido1, apellido2, nombre, correo) VALUES \n";
    let matriculaBase = 224250000;
    let totalRegistros = document.getElementById('registros').value;

    for (let i = 0; i < totalRegistros; i++) {
        let apeNacional = apellidosMX[Math.floor(Math.random() * apellidosMX.length)];
        let apeExtranjero = apellidosRU[Math.floor(Math.random() * apellidosRU.length)];
        let agregaSegundoNombre = Math.random() < 0.5;
        
        let apellidoDos = (apeExtranjero === "NULL") ? "NULL" : `'${apeExtranjero.toUpperCase()}'`;
        
        let nombreCompleto = nombresMX[Math.floor(Math.random() * nombresMX.length)];
        if (agregaSegundoNombre) {
            let nomExtranjero = nombresFR[Math.floor(Math.random() * nombresFR.length)];
            nombreCompleto += ` ${nomExtranjero}`;
        }

        textoGenerado += `(${matriculaBase + i}, '${apeNacional.toUpperCase()}', ${apellidoDos}, '${nombreCompleto}', 'a${matriculaBase + i}@unison.mx')${i == totalRegistros - 1 ? ';' : ','}\n`;
    }
    
    document.getElementById("salida").innerHTML = "<pre>" + textoGenerado + "</pre>";
}

function generarSQLCSV() {
    textoGenerado = "matricula, apellido1, apellido2, nombre, correo\n";
    let matriculaBase = 224250000;
    let totalRegistros = document.getElementById('registros').value;
    
    for (let i = 0; i < totalRegistros; i++) {
        let apeNacional = apellidosMX[Math.floor(Math.random() * apellidosMX.length)];
        let apeExtranjero = apellidosRU[Math.floor(Math.random() * apellidosRU.length)];
        let agregaSegundoNombre = Math.random() < 0.5;
        
        let apellidoDos = (apeExtranjero === "NULL") ? "NULL" : apeExtranjero;
        
        let nombreCompleto = nombresMX[Math.floor(Math.random() * nombresMX.length)];
        if (agregaSegundoNombre) {
            let nomExtranjero = nombresFR[Math.floor(Math.random() * nombresFR.length)];
            nombreCompleto += ` ${nomExtranjero}`;
        }
        
        textoGenerado += `${matriculaBase + i},${apeNacional},${apellidoDos},${nombreCompleto},a${matriculaBase + i}@unison.mx\n`;
    }
    
    document.getElementById("salida").innerHTML = "<pre>" + textoGenerado + "</pre>";
}

function generarJSON() {
    let arregloEstudiantes = [];
    let matriculaBase = 224250000;
    let totalRegistros = document.getElementById('registros').value;

    for (let i = 0; i < totalRegistros; i++) {
        let apeNacional = apellidosMX[Math.floor(Math.random() * apellidosMX.length)];
        let apeExtranjero = apellidosRU[Math.floor(Math.random() * apellidosRU.length)];
        let agregaSegundoNombre = Math.random() < 0.5;
        
        let nombreCompleto = nombresMX[Math.floor(Math.random() * nombresMX.length)];
        if (agregaSegundoNombre) {
            let nomExtranjero = nombresFR[Math.floor(Math.random() * nombresFR.length)];
            nombreCompleto += ` ${nomExtranjero}`;
        }

        arregloEstudiantes.push({
            matricula: matriculaBase + i,
            apellido1: apeNacional,
            apellido2: apeExtranjero === "NULL" ? null : apeExtranjero,
            nombre: nombreCompleto,
            correo: `a${matriculaBase + i}@unison.mx`
        });
    }

    textoGenerado = JSON.stringify(arregloEstudiantes, null, 4);
    document.getElementById("salida").innerHTML = "<pre>" + textoGenerado + "</pre>";
}
 
function guardarArchivo() {
    let enlaceDescarga = document.createElement("a");
    enlaceDescarga.setAttribute("href", "data:text/plain;charset=UTF-8," + encodeURIComponent(textoGenerado));
       
    let tipoFormato = document.getElementById("opcion").value;
 
    switch (tipoFormato) {
        case "1": 
            enlaceDescarga.setAttribute("download", "sistema_escolar.sql");
            alert("Generando archivo SQL (MySQL/MariaDB)");
            break;
        case "2":
            enlaceDescarga.setAttribute("download", "sistema_escolar_pg.sql");
            alert("Generando archivo SQL (PostgreSQL)");
            break;
        case "3":
            enlaceDescarga.setAttribute("download", "sistema_escolar.csv");
            alert("Generando archivo CSV");
            break;
        case "4":
            enlaceDescarga.setAttribute("download", "sistema_escolar.json");
            alert("Generando archivo JSON");
            break;
    }
       
    enlaceDescarga.style.display = "none";
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();
    document.body.removeChild(enlaceDescarga);
}