  const data = [
            { img: "./images/no-image.png", brand: "Chevrolet Niva", number: "АР 415 G" },
            { img: "./images/АО0028СЕ.png", brand: "BMW", number: "АО 0028 СЕ" },
            { img: "./images/no-image.png", brand: "Богдан", number: "АР 410 G" },
            { img: "./images/no-image.png", brand: "Богдан", number: "АР 405 G" },
            { img: "./images/no-image.png", brand: "Газ 66", number: "АР 411 G" },
            { img: "./images/no-image.png", brand: "Зiл 5301", number: "АР 412 G" },
            { img: "./images/no-image.png", brand: "Зiл 433100", number: "АР 406 G" },
            { img: "./images/no-image.png", brand: "Зiл 433100", number: "АР 407 G" },
            { img: "./images/no-image.png", brand: "Причеп", number: "АР 786 G" },
            { img: "./images/no-image.png", brand: "Маз", number: "АР 413 G" },
            { img: "./images/no-image.png", brand: "Маз", number: "АР 409 G" },
            { img: "./images/no-image.png", brand: "Ford Ranger", number: "АР 404 G" },
            { img: "./images/no-image.png", brand: "Причеп", number: "АР 785 G" },
            { img: "./images/no-image.png", brand: "Причеп", number: "АР 784 G" },
            { img: "./images/no-image.png", brand: "Причеп Спец", number: "АР 783 G" },
            { img: "./images/no-image.png", brand: "Renault Duster", number: "АР 408 G" },
            { img: "./images/no-image.png", brand: "Ford Tourneo", number: "АР 402 G" },
            { img: "./images/no-image.png", brand: "Ford Tourneo", number: "АР 403 G" },
            { img: "./images/no-image.png", brand: "Ford Transit", number: "АР 401 G" },
            { img: "./images/no-image.png", brand: "Ford Kuga", number: "АР 400 G" },
            { img: "./images/no-image.png", brand: "Ford Transit", number: "АР 416 G" },
            { img: "./images/no-image.png", brand: "Renault Trafic", number: "ВТ 5527 СМ" },
            { img: "./images/no-image.png", brand: "Renault Duster", number: "ВТ 8405 СМ" },
            { img: "./images/no-image.png", brand: "Renault Trafic", number: "ВТ 3741 СІ" },
            { img: "./images/KA3714EB.png", brand: "Toyota RAV-4 Hybrid", number: "КА 3714 ЕВ" },
            { img: "./images/KA7634HT.png", brand: "Toyota RAV 4 Hybrid", number: "КА 7634 НТ" },
            { img: "./images/KA1517AT.png", brand: "Toyota RAV-4 Hybrid", number: "KA 1517 AT" },
            { img: "./images/AA2652XI.png", brand: "Toyota Proace", number: "AA 2652 XІ" },
            { img: "./images/KA0914CK.png", brand: "Toyota C-HR Hybrid", number: "КА 0914 СК" },
            { img: "./images/KA0529AO.png", brand: "Toyota Land Cruiser", number: "КА 0529 АО" },
            { img: "./images/KA9341EK.png", brand: "Toyota Land Cruiser", number: "КА 9341 ЕК" },
            { img: "./images/KA7925BC.png", brand: "Toyota Hilux", number: "КА 7925 ВС" },
            { img: "./images/KA9688AP.png", brand: "Lexus LX 450D", number: "КА 9688 АР" },
            { img: "./images/no-image.png", brand: "BMW 530D", number: "АО 0028 СЕ" },
            { img: "./images/no-image.png", brand: "BMW", number: "ВХ ? 694 ? ЕР" },
            { img: "./images/АН5000АО-ОА.png", brand: "Toyota Land Cruiser", number: "АН 5000 АО" },
            { img: "./images/no-image.png", brand: "Renault Duster", number: "АА 8004 РТ" },
            { img: "./images/ВС1203ЕА.png", brand: "Renault Scenic", number: "ВС 1203 ЕА" },
            { img: "./images/no-image.png", brand: "Land Rover", number: "ВС 6137 СН" },
            { img: "./images/no-image.png", brand: "Renault Trafic", number: "АН 4171 НН - МН" },
            { img: "./images/АА0949РІ.png", brand: "Toyota", number: "АА 0949 РІ" },
            { img: "./images/АМ5668ЕІ.png", brand: "Volksvagen", number: "АМ 5668 ЕІ" },
            { img: "./images/АМ1748ЕР.png", brand: "Volkswagen", number: "АМ 1748 ЕО" },
            { img: "./images/ВХ6982ЕР.png", brand: "Dacia", number: "ВХ 6982 ЕР" },
            { img: "./images/АА3492ОО.png", brand: "Ford", number: "АН 3492 ОО" },
            { img: "./images/no-image.png", brand: "BMW", number: "АЕ ? 760 ЕР" },
            { img: "./images/АТ9854ЕР.png", brand: "Nissan Qashqai", number: "АТ 9854 ЕР" },
            { img: "./images/АВ1055ЕР.png", brand: "Toyota", number: "АВ 1055 ЕР " },
            { img: "./images/ВІ2317ВА.png", brand: "Mitsubishi Лансер", number: "ВІ 2317 ВА" },
            { img: "./images/ВА7714СА.png", brand: "Ford Kuga", number: "ВА 7714 СА" },
            { img: "./images/КА5874СА.png", brand: "Hyundai", number: "КА 5874 СА" },
            { img: "./images/no-image.png", brand: "Таврія", number: "АН 4877 ??" },
            { img: "./images/no-image.png", brand: "ЗАЗ", number: "АН 4877 МА" },
            { img: "./images/BB4460CP.png", brand: "Chevrolet", number: "ВВ 4460 СР" },
            { img: "./images/no-image.png", brand: "Газ Синій", number: "АХ 4062 ІО" },
            { img: "./images/no-image.png", brand: "Ніва Темносиня", number: "?23-33?" },
            { img: "./images/no-image.png", brand: "Fiat Doblo", number: "ВВ 5791 СО" },
            { img: "./images/no-image.png", brand: "Газ РУТА", number: "ВА 1906 ВО" },
            { img: "./images/no-image.png", brand: "ПАЗ", number: "ВМ 3848 АА" },
            { img: "./images/no-image.png", brand: "Renault Duster", number: "ВМ 4751 СТ" },
            { img: "./images/no-image.png", brand: "ГАЗ", number: "ВМ 3674 АК" },
            { img: "./images/no-image.png", brand: "ГАЗ", number: "ВМ 3960 АО" },
            { img: "./images/no-image.png", brand: "MERLO", number: "EE 18961 ВМ" },
            { img: "./images/no-image.png", brand: "МАЗ", number: "ВМ 1910 ВВ" },
            { img: "./images/no-image.png", brand: "Renault Master", number: "АР 9610 ЕН" },
            { img: "./images/no-image.png", brand: "Renault Duster", number: "АР 2269 ЕН" },
            { img: "./images/no-image.png", brand: "ВАЗ 2101", number: "ВВ 8753 ЕР" },
            { img: "./images/no-image.png", brand: "Volkswagen", number: "без номерів" },
            { img: "./images/no-image.png", brand: "Volkswagen Multivan", number: "АЕ????" },
            { img: "./images/no-image.png", brand: "Toyota Corolla", number: "ВВ????" },
            { img: "./images/no-image.png", brand: "Infiniti", number: "І30" },
            { img: "./images/no-image.png", brand: "Поліцейські", number: "1891" },
            { img: "./images/no-image.png", brand: "Поліцейські", number: "4949" },
            { img: "./images/no-image.png", brand: "Поліцейські", number: "8151" },
            { img: "./images/1773.png", brand: "Hyundai", number: "1773" },
            { img: "./images/no-image.png", brand: "Chevrolet Suburban", number: "4218" },
            { img: "./images/no-image.png", brand: "Renault Master", number: "АР 9610 ЕН" },
            { img: "./images/no-image.png", brand: "Renault Duster", number: "АР 2269 ЕН" },
            { img: "./images/no-image.png", brand: "Таврiя", number: "1806" },
            { img: "./images/no-image.png", brand: "ВАЗ 2109", number: "1810" },
            { img: "./images/no-image.png", brand: "ВАЗ 2109", number: "1808" },
            { img: "./images/no-image.png", brand: "ВАЗ 2104", number: "0638" },
            { img: "./images/no-image.png", brand: "ЗАЗ", number: "0654" },
            { img: "./images/no-image.png", brand: "ЗАЗ", number: "0687" },
            { img: "./images/no-image.png", brand: "ВАЗ 2107", number: "1805" },
            { img: "./images/no-image.png", brand: "ВАЗ 21099", number: "0798" },
            { img: "./images/no-image.png", brand: "ВАЗ 2107", number: "0681" },
            { img: "./images/no-image.png", brand: "ВАЗ 2107", number: "1414" },
            { img: "./images/no-image.png", brand: "ВАЗ 2107", number: "0751" },
            { img: "./images/no-image.png", brand: "Volkswagen", number: "0083" },
            { img: "./images/no-image.png", brand: "Skoda", number: "0731" },
            { img: "./images/no-image.png", brand: "Renault Dokker", number: "1826" },
            { img: "./images/no-image.png", brand: "Haval", number: "0687 " },
            { img: "./images/0224.png", brand: "Ваз 2109", number: "0224" },
            { img: "./images/no-image.png", brand: "Ford transit", number: "АА 299 G" },
            { img: "./images/no-image.png", brand: "Ваз 2113", number: "АР 4958 ?" },
            { img: "./images/no-image.png", brand: "Mitsubishi L200", number: "АХ 3338 АХ" },
            { img: "./images/no-image.png", brand: "Газель", number: "0994" },
            { img: "./images/no-image.png", brand: "Нiва", number: "АЕ 5173 МК" },
            { img: "./images/no-image.png", brand: "Skoda", number: "АЕ 2289 АВ" },
            { img: "./images/no-image.png", brand: "Volkswagen lt 35", number: "АХ 8081 ?" },
            { img: "./images/no-image.png", brand: "Renault traffic", number: "АХ 6949 СМ" },
            { img: "./images/no-image.png", brand: "Citroen jumper", number: "АХ 9906 ВА" },
            { img: "./images/no-image.png", brand: "Газель", number: "AX 5930 АР" },
            { img: "./images/no-image.png", brand: "Соболь", number: "АХ 0856 АХ" },
            { img: "./images/no-image.png", brand: "Renault Duster", number: "ВЕ 9976 ВМ" },
            { img: "./images/no-image.png", brand: "Нiва", number: "ВЕ 1369 ВО" },
            { img: "./images/no-image.png", brand: "Нiва", number: "ВЕ 9968 ВМ " },
            { img: "./images/no-image.png", brand: "Газель", number: "ВЕ 6963 ВО " },
            { img: "./images/1757.png", brand: "Peugeot", number: " 1757" },
            { img: "./images/6965.png", brand: "Skoda", number: "6965" },
            { img: "./images/no-image.png", brand: "Нiва", number: "2333" },
            { img: "./images/no-image.png", brand: "Renault Duster", number: "СВ 137 В" },
            { img: "./images/no-image.png", brand: "Volkswagen Amarok", number: "СВ 144 В" },
            { img: "./images/no-image.png", brand: "Поліцейські", number: "1356" },
            { img: "./images/0019.png", brand: "Skoda", number: "0019" },
            { img: "./images/1489.png", brand: "Renault", number: "1489" },
            { img: "./images/1217.png", brand: "Renault Kangoo", number: "1217" },
            { img: "./images/no-image.png", brand: "Suzuki", number: "? 3367 ?" },
            { img: "./images/no-image.png", brand: "УАЗ 3909", number: "АА 3199 РХ" },
            { img: "./images/no-image.png", brand: "УАЗ 3909", number: "АА 3197 РХ" },
            { img: "./images/no-image.png", brand: "Volksvagen", number: "АХ 0860 СК" },
            { img: "./images/no-image.png", brand: "Ваз 2109", number: "АР 5224 НЕ" },
            { img: "./images/no-image.png", brand: "Богдан", number: "0643" },
            { img: "./images/no-image.png", brand: "Toyota Land Cruiser", number: "0657" },
            { img: "./images/no-image.png", brand: "Ваз 21013", number: "4958" },
            { img: "./images/КА4435АХ.png", brand: "Subaru", number: "КА 4435 АХ" },
            { img: "./images/АА1114ЕР.png", brand: "Porsche", number: "АА 1114 ЕР" },
            { img: "./images/1170.png", brand: "УАЗ", number: "1170" },
            { img: "./images/ВЕ7046ЕМ.png", brand: "Mitsubishi", number: "ВЕ 7046 ЕМ" },
            { img: "./images/BE7549EM.png", brand: "Mitsubishi", number: "BE 7549 EM" },
            { img: "./images/AA2300OE.png", brand: "Mercedes", number: "AA 2300 OE" },
            { img: "./images/АА7785ВР.png", brand: "Volkswagen", number: "АА 7785 ВР" },
            { img: "./images/КА5257ВІ.png", brand: "Renault", number: "КА 5257 ВІ" },
            { img: "./images/КА0697СС.png", brand: "Skoda", number: "КА 0697 СС" },
            { img: "./images/AI4526IK.png", brand: "Dacia", number: "AI 4526 IK" },
            { img: "./images/АА4072ХВ.png", brand: "Ford", number: "АА 4072 ХВ" },
            { img: "./images/АР6289АМ.jpg", brand: "Karsan J9", number: "АР 6289 АМ" }, 
            { img: "./images/АР4987СР.jpg", brand: "Mitsubishi Pajero", number: "АР 4987 СР" },
            //{ img: "./images/no-image.png", brand: " ", number: " " },
            //{ img: "./images/no-image.png", brand: " ", number: " " },
            //{ img: "./images/no-image.png", brand: " ", number: " " },
            //{ img: "./images/no-image.png", brand: " ", number: " " }, 
            //{ img: "./images/no-image.png", brand: " ", number: " " }, 
            //{ img: "./images/no-image.png", brand: " ", number: " " }, 
            //{ img: "./images/no-image.png", brand: " ", number: " " },
            //{ img: "./images/no-image.png", brand: " ", number: " " },
            //{ img: "./images/no-image.png", brand: " ", number: " " },
            //{ img: "./images/no-image.png", brand: " ", number: " " },
            //{ img: "./images/no-image.png", brand: " ", number: " " },
            //{ img: "./images/no-image.png", brand: " ", number: " " },
            //{ img: "./images/no-image.png", brand: " ", number: " " },
            //{ img: "./images/no-image.png", brand: " ", number: " " },
            //{ img: "./images/no-image.png", brand: " ", number: " " },
            //{ img: "./images/no-image.png", brand: " ", number: " " },
            //{ img: "./images/no-image.png", brand: " ", number: " " },
            //{ img: "./images/no-image.png", brand: " ", number: " " },
            //{ img: "./images/no-image.png", brand: " ", number: " " }, 
            //{ img: "./images/no-image.png", brand: " ", number: " " },
            //{ img: "./images/no-image.png", brand: " ", number: " " },
            //{ img: "./images/no-image.png", brand: " ", number: " " },
            //{ img: "./images/no-image.png", brand: " ", number: " " },
            //{ img: "./images/no-image.png", brand: " ", number: " " }, 
            //{ img: "./images/no-image.png", brand: " ", number: " " }, 
            //{ img: "./images/no-image.png", brand: " ", number: " " }, 
        ];

