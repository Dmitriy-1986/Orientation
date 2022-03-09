  const data = [
            { id: 1, img: "./images/no-image.png", brand: "Chevrolet Niva", number: "АР 415 G" },
            { id: 2, img: "./images/АО0028СЕ.png", brand: "BMW 530D", number: "АО 0028 СЕ" },
            { id: 3, img: "./images/no-image.png", brand: "Богдан", number: "АР 410 G" },
            { id: 4, img: "./images/no-image.png", brand: "Богдан", number: "АР 405 G" },
            { id: 5, img: "./images/no-image.png", brand: "Газ 66", number: "АР 411 G" },
            { id: 6, img: "./images/no-image.png", brand: "Зiл 5301", number: "АР 412 G" },
            { id: 7, img: "./images/no-image.png", brand: "Зiл 433100", number: "АР 406 G" },
            { id: 8, img: "./images/no-image.png", brand: "Зiл 433100", number: "АР 407 G" },
            { id: 9, img: "./images/no-image.png", brand: "Причеп", number: "АР 786 G" },
            { id: 10, img: "./images/no-image.png", brand: "Маз", number: "АР 413 G" },
            { id: 11, img: "./images/no-image.png", brand: "Маз", number: "АР 409 G" },
            { id: 12, img: "./images/no-image.png", brand: "Ford Ranger", number: "АР 404 G" },
            { id: 13, img: "./images/no-image.png", brand: "Причеп", number: "АР 785 G" },
            { id: 14, img: "./images/no-image.png", brand: "Причеп", number: "АР 784 G" },
            { id: 15, img: "./images/no-image.png", brand: "Причеп Спец", number: "АР 783 G" },
            { id: 16, img: "./images/no-image.png", brand: "Renault Duster", number: "АР 408 G" },
            { id: 17, img: "./images/no-image.png", brand: "Ford Tourneo", number: "АР 402 G" },
            { id: 18, img: "./images/no-image.png", brand: "Ford Tourneo", number: "АР 403 G" },
            { id: 19, img: "./images/no-image.png", brand: "Ford Transit", number: "АР 401 G" },
            { id: 20, img: "./images/no-image.png", brand: "Ford Kuga", number: "АР 400 G" },
            { id: 21, img: "./images/no-image.png", brand: "Ford Transit", number: "АР 416 G" },
            { id: 22, img: "./images/no-image.png", brand: "Renault Trafic", number: "ВТ 5527 СМ" },
            { id: 23, img: "./images/no-image.png", brand: "Renault Duster", number: "ВТ 8405 СМ" },
            { id: 24, img: "./images/no-image.png", brand: "Renault Trafic", number: "ВТ 3741 СІ" },
            { id: 25, img: "./images/KA3714EB.png", brand: "Toyota RAV-4 Hybrid", number: "КА 3714 ЕВ" },
            { id: 26, img: "./images/KA7634HT.png", brand: "Toyota RAV 4 Hybrid", number: "КА 7634 НТ" },
            { id: 27, img: "./images/KA1517AT.png", brand: "Toyota RAV-4 Hybrid", number: "KA 1517 AT" },
            { id: 28, img: "./images/AA2652XI.png", brand: "Toyota Proace", number: "AA 2652 XІ" },
            { id: 29, img: "./images/KA0914CK.png", brand: "Toyota C-HR Hybrid", number: "КА 0914 СК" },
            { id: 30, img: "./images/KA0529AO.png", brand: "Toyota Land Cruiser", number: "КА 0529 АО" },
            { id: 31, img: "./images/KA9341EK.png", brand: "Toyota Land Cruiser", number: "КА 9341 ЕК" },
            { id: 32, img: "./images/KA7925BC.png", brand: "Toyota Hilux", number: "КА 7925 ВС" },
            { id: 33, img: "./images/KA9688AP.png", brand: "Lexus LX 450D", number: "КА 9688 АР" },
            { id: 34, img: "./images/no-image.png", brand: "BMW", number: "ВХ ? 694 ? ЕР" },
            { id: 35, img: "./images/АН5000АО-ОА.png", brand: "Toyota Land Cruiser", number: "АН 5000 АО" },
            { id: 36, img: "./images/no-image.png", brand: "Renault Duster", number: "АА 8004 РТ" },
            { id: 37, img: "./images/ВС1203ЕА.png", brand: "Renault Scenic", number: "ВС 1203 ЕА" },
            { id: 38, img: "./images/no-image.png", brand: "Mercedes-Benz E220", number: "ВС 6137 СН" },
            { id: 39, img: "./images/no-image.png", brand: "Renault Trafic", number: "АН 4171 НН - МН" },
            { id: 40, img: "./images/АА0949РІ.png", brand: "Toyota Land Cruiser", number: "АА 0949 РІ" },
            { id: 41, img: "./images/АМ5668ЕІ.png", brand: "Volksvagen Crafter", number: "АМ 5668 ЕІ" },
            { id: 42, img: "./images/АМ1748ЕР.png", brand: "Volkswagen Crafter", number: "АМ 1748 ЕО" },
            { id: 43, img: "./images/ВХ6982ЕР.png", brand: "Dacia Sandero", number: "ВХ 6982 ЕР" },
            { id: 44, img: "./images/АА3492ОО.png", brand: "Ford ", number: "АН 3492 ОО" },
            { id: 45, img: "./images/no-image.png", brand: "BMW", number: "АЕ ? 760 ЕР" },
            { id: 46, img: "./images/АТ9854ЕР.png", brand: "Nissan Qashqai", number: "АТ 9854 ЕР" },
            { id: 47, img: "./images/АВ1055ЕР.png", brand: "Toyota Corolla", number: "АВ 1055 ЕР" },
            { id: 48, img: "./images/ВІ2317ВА.png", brand: "Mitsubishi Lancer", number: "ВІ 2317 ВА" },
            { id: 49, img: "./images/ВА7714СА.png", brand: "Ford Kuga", number: "ВА 7714 СА" },
            { id: 50, img: "./images/КА5874СА.png", brand: "Hyundai Elantra", number: "КА 5874 СА" },
            { id: 51, img: "./images/no-image.png", brand: "Таврія", number: "АН 4877 ??" },
            { id: 52, img: "./images/no-image.png", brand: "ЗАЗ", number: "АН 4877 МА" },
            { id: 53, img: "./images/no-image.png", brand: "Renault Megane", number: "ВВ 4460 СР" },
            { id: 54, img: "./images/no-image.png", brand: "Газ 2705-434", number: "АХ 4062 ІО" },
            { id: 55, img: "./images/no-image.png", brand: "Ніва Темносиня", number: "?23-33?" },
            { id: 56, img: "./images/no-image.png", brand: "Fiat Doblo", number: "ВВ 5791 СО" },
            { id: 57, img: "./images/no-image.png", brand: "Рута 25D", number: "ВА 1906 ВО" },
            { id: 58, img: "./images/no-image.png", brand: "ПАЗ 4234", number: "ВМ 3848 АА" },
            { id: 59, img: "./images/no-image.png", brand: "Renault Duster", number: "ВМ 4751 СТ" },
            { id: 60, img: "./images/no-image.png", brand: "ГАЗ", number: "ВМ 3674 АК" },
            { id: 61, img: "./images/no-image.png", brand: "ГАЗ", number: "ВМ 3960 АО" },
            { id: 62, img: "./images/no-image.png", brand: "MERLO", number: "EE 18961 ВМ" },
            { id: 63, img: "./images/no-image.png", brand: "МАЗ 5551A2", number: "ВМ 1910 ВВ" },
            { id: 64, img: "./images/no-image.png", brand: "Renault Master", number: "АР 9610 ЕН" },
            { id: 65, img: "./images/no-image.png", brand: "Renault Duster", number: "АР 2269 ЕН" },
            { id: 66, img: "./images/no-image.png", brand: "ВАЗ 2101", number: "ВВ 8753 ЕР" },
            { id: 67, img: "./images/no-image.png", brand: "Поліцейські", number: "1891" },
            { id: 68, img: "./images/no-image.png", brand: "Поліцейські", number: "4949" },
            { id: 69, img: "./images/no-image.png", brand: "Поліцейські", number: "8151" },
            { id: 70, img: "./images/1773.png", brand: "Hyundai", number: "1773" },
            { id: 71, img: "./images/no-image.png", brand: "Chevrolet Suburban", number: "4218" },
            { id: 72, img: "./images/no-image.png", brand: "Renault Master", number: "АР 9610 ЕН" },
            { id: 73, img: "./images/no-image.png", brand: "Renault Duster", number: "АР 2269 ЕН" },
            { id: 74, img: "./images/no-image.png", brand: "Таврiя", number: "1806" },
            { id: 75, img: "./images/no-image.png", brand: "ВАЗ 2109", number: "1810" },
            { id: 76, img: "./images/no-image.png", brand: "ВАЗ 2109", number: "1808" },
            { id: 77, img: "./images/no-image.png", brand: "ВАЗ 2104", number: "0638" },
            { id: 78, img: "./images/no-image.png", brand: "ЗАЗ", number: "0654" },
            { id: 79, img: "./images/no-image.png", brand: "ЗАЗ", number: "0687" },
            { id: 80, img: "./images/no-image.png", brand: "ВАЗ 2107", number: "1805" },
            { id: 81, img: "./images/no-image.png", brand: "ВАЗ 21099", number: "0798" },
            { id: 82, img: "./images/no-image.png", brand: "ВАЗ 2107", number: "0681" },
            { id: 83, img: "./images/no-image.png", brand: "ВАЗ 2107", number: "1414" },
            { id: 84, img: "./images/no-image.png", brand: "ВАЗ 2107", number: "0751" },
            { id: 85, img: "./images/no-image.png", brand: "Volkswagen", number: "0083" },
            { id: 86, img: "./images/no-image.png", brand: "Skoda", number: "0731" },
            { id: 87, img: "./images/no-image.png", brand: "Renault Dokker", number: "1826" },
            { id: 88, img: "./images/no-image.png", brand: "Haval", number: "0687" },
            { id: 89, img: "./images/0224.png", brand: "Ваз 2109", number: "0224" },
            { id: 90, img: "./images/no-image.png", brand: "Ford transit", number: "АА 299 G" },
            { id: 91, img: "./images/no-image.png", brand: "Ваз 2113", number: "АР 4958 ?" },
            { id: 92, img: "./images/no-image.png", brand: "Mitsubishi L200", number: "АХ 3338 АХ" },
            { id: 93, img: "./images/no-image.png", brand: "Газель", number: "0994" },
            { id: 94, img: "./images/no-image.png", brand: "Нiва", number: "АЕ 5173 МК" },
            { id: 95, img: "./images/no-image.png", brand: "Skoda", number: "АЕ 2289 АВ" },
            { id: 96, img: "./images/no-image.png", brand: "Volkswagen lt 35", number: "АХ 8081 ?" },
            { id: 97, img: "./images/no-image.png", brand: "Renault traffic", number: "АХ 6949 СМ" },
            { id: 98, img: "./images/no-image.png", brand: "Citroen jumper", number: "АХ 9906 ВА" },
            { id: 99, img: "./images/no-image.png", brand: "Газель", number: "AX 5930 АР" },
            { id: 100, img: "./images/no-image.png", brand: "Соболь", number: "АХ 0856 АХ" },
            { id: 101, img: "./images/no-image.png", brand: "Renault Duster", number: "ВЕ 9976 ВМ" },
            { id: 102, img: "./images/no-image.png", brand: "Нiва", number: "ВЕ 1369 ВО" },
            { id: 103, img: "./images/no-image.png", brand: "Нiва", number: "ВЕ 9968 ВМ" },
            { id: 104, img: "./images/no-image.png", brand: "Газель", number: "ВЕ 6963 ВО" },
            { id: 105, img: "./images/1757.png", brand: "Peugeot", number: "1757" },
            { id: 106, img: "./images/6965.png", brand: "Skoda", number: "6965" },
            { id: 107, img: "./images/no-image.png", brand: "Нiва", number: "2333" },
            { id: 108, img: "./images/no-image.png", brand: "Renault Duster", number: "СВ 137 В" },
            { id: 109, img: "./images/no-image.png", brand: "Volkswagen Amarok", number: "СВ 144 В" },
            { id: 110, img: "./images/no-image.png", brand: "Поліцейські", number: "1356" },
            { id: 111, img: "./images/0019.png", brand: "Skoda", number: "0019" },
            { id: 112, img: "./images/1489.png", brand: "Renault", number: "1489" },
            { id: 113, img: "./images/1217.png", brand: "Renault Kangoo", number: "1217" },
            { id: 114, img: "./images/no-image.png", brand: "Suzuki", number: "? 3367 ?" },
            { id: 115, img: "./images/no-image.png", brand: "УАЗ 3909", number: "АА 3199 РХ" },
            { id: 116, img: "./images/no-image.png", brand: "УАЗ 3909", number: "АА 3197 РХ" },
            { id: 117, img: "./images/no-image.png", brand: "Volksvagen ", number: "АХ 0860 СК" },
            { id: 118, img: "./images/no-image.png", brand: "Ваз 2109", number: "АР 5224 НЕ" },
            { id: 119, img: "./images/no-image.png", brand: "Богдан", number: "0643" },
            { id: 120, img: "./images/no-image.png", brand: "Toyota Land Cruiser", number: "0657" },
            { id: 121, img: "./images/no-image.png", brand: "Ваз 21013", number: "4958" },
            { id: 122, img: "./images/КА4435АХ.png", brand: "Subaru Forester", number: "КА 4435 АХ" },
            { id: 123, img: "./images/АА1114ЕР.png", brand: "Porsche Cayenne", number: "АА 1114 ЕР" },
            { id: 124, img: "./images/1170.png", brand: "УАЗ", number: "1170" },
            { id: 125, img: "./images/ВЕ7046ЕМ.png", brand: "Mitsubishi", number: "ВЕ 7046 ЕМ" },
            { id: 126, img: "./images/BE7549EM.png", brand: "Mitsubishi Pajero", number: "BE 7549 EM" },
            { id: 127, img: "./images/AA2300OE.png", brand: "Mercedes-Benz Matic", number: "AA 2300 OE" },
            { id: 128, img: "./images/АА7785ВР.png", brand: "Volkswagen Touareg", number: "АА 7785 ВР" },
            { id: 129, img: "./images/КА5257ВІ.png", brand: "Renault Trafic", number: "КА 5257 ВІ" },
            { id: 130, img: "./images/КА0697СС.png", brand: "Skoda Octavia", number: "КА 0697 СС" },
            { id: 131, img: "./images/AI4526IK.png", brand: "Dacia Sandero", number: "AI 4526 IK" },
            { id: 132, img: "./images/АА4072ХВ.png", brand: "Ford Mondeo", number: "АА 4072 ХВ" },
            { id: 133, img: "./images/АР6289АМ.jpg", brand: "Karsan J9", number: "АР 6289 АМ" }, 
            { id: 134, img: "./images/АР4987СР.jpg", brand: "Mitsubishi Pajero", number: "АР 4987 СР" },
            { id: 135, img: "./images/АР9038АВ.png", brand: "Ford Transit", number: "АР 9038 АВ" },
            { id: 136, img: "./images/ар9038ав.png", brand: "Ford Transit", number: "АР 9038 АВ" },
            { id: 137, img: "./images/АР2034ЕР.png", brand: "Chevrolet Cruze", number: "АР 2034 ЕР" },
            { id: 138, img: "./images/AA4007ХВ.jpg", brand: "Mercedes Sprinter", number: "АА 4007 ХВ" },
            { id: 139, img: "./images/00362НС.png", brand: "Ваз 2103", number: "00362 HC" }, 
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " }, 
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " }, 
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " }, 
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " }, 
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " }, 
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " }, 
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " }, 
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " }, 
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " }, 
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " }, 
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " },
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " }, 
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " }, 
            //{ id: , img: "./images/no-image.png", brand: " ", number: " " }, 
        ];
