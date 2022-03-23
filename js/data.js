const data = [
            { img: "./images/AP415G.jpg", brand: "Chevrolet Niva", number: "АР 415 G" },
            { img: "./images/АО0028СЕ.png", brand: "BMW 530D", number: "АО 0028 СЕ" },
            { img: "./images/405-410.jpg", brand: "Богдан", number: "АР 410 G" },
            { img: "./images/405-410.jpg", brand: "Богдан", number: "АР 405 G" },
            { img: "./images/AP411G.jpg", brand: "Газ 66", number: "АР 411 G" },
            { img: "./images/AP412G.jpg", brand: "Зiл 5301", number: "АР 412 G" },
            { img: "./images/406-407.jpg", brand: "Зiл 433100", number: "АР 406 G" },
            { img: "./images/406-407.jpg", brand: "Зiл 433100", number: "АР 407 G" },
            { img: "./images/no-image.webp", brand: "Причеп", number: "АР 786 G" },
            { img: "./images/409-413.jpg", brand: "Маз", number: "АР 413 G" },
            { img: "./images/KozakNGU.jpg", brand: "Козак", number: "б/н" },
            { img: "./images/409-413.jpg", brand: "Маз", number: "АР 409 G" },
            { img: "./images/RenaultDusterNGU.jpg", brand: "Renault Duster", number: "б/н" },  
            { img: "./images/FordTransitNGU.jpg", brand: "Ford Transit", number: "б/н" },    
            { img: "./images/AP404G.jpg", brand: "Ford Ranger", number: "АР 404 G" },
            { img: "./images/no-image.webp", brand: "Причеп", number: "АР 785 G" },
            { img: "./images/no-image.webp", brand: "Причеп", number: "АР 784 G" },
            { img: "./images/no-image.webp", brand: "Причеп Спец", number: "АР 783 G" },
            { img: "./images/AP408G.jpg", brand: "Renault Duster", number: "АР 408 G" },
            { img: "./images/no-image.webp", brand: "Ford Tourneo", number: "АР 402 G" },
            { img: "./images/no-image.webp", brand: "Ford Tourneo", number: "АР 403 G" },
            { img: "./images/no-image.webp", brand: "Ford Transit", number: "АР 401 G" },
            { img: "./images/400.jpg", brand: "Ford Kuga", number: "АР 400 G" },
            { img: "./images/416.jpg", brand: "Ford Transit", number: "АР 416 G" },
            { img: "./images/no-image.webp", brand: "Renault Trafic", number: "ВТ 5527 СМ" },
            { img: "./images/no-image.webp", brand: "Renault Duster", number: "ВТ 8405 СМ" },
            { img: "./images/no-image.webp", brand: "Renault Trafic", number: "ВТ 3741 СІ" },
            { img: "./images/KA3714EB.png", brand: "Toyota RAV-4 Hybrid", number: "КА 3714 ЕВ" },
            { img: "./images/KA7634HT.png", brand: "Toyota RAV 4 Hybrid", number: "КА 7634 НТ" },
            { img: "./images/KA1517AT.png", brand: "Toyota RAV-4 Hybrid", number: "KA 1517 AT" },
            { img: "./images/AA2652XI.png", brand: "Toyota Proace", number: "AA 2652 XІ" },
            { img: "./images/KA0914CK.png", brand: "Toyota C-HR Hybrid", number: "КА 0914 СК" },
            { img: "./images/KA0529AO.png", brand: "Toyota Land Cruiser", number: "КА 0529 АО" },
            { img: "./images/KA9341EK.png", brand: "Toyota Land Cruiser", number: "КА 9341 ЕК" },
            { img: "./images/KA7925BC.png", brand: "Toyota Hilux", number: "КА 7925 ВС" },
            { img: "./images/KA9688AP.png", brand: "Lexus LX 450D", number: "КА 9688 АР" },
            { img: "./images/no-image.webp", brand: "BMW", number: "ВХ ? 694 ? ЕР" },
            { img: "./images/no-image.webp", brand: "Toyota Land Cruiser", number: "АН 5000 АО (ОА)" },
            { img: "./images/no-image.webp", brand: "Renault Duster", number: "АА 8004 РТ" },
            { img: "./images/ВС1203ЕА.png", brand: "Renault Scenic", number: "ВС 1203 ЕА" },
            { img: "./images/no-image.webp", brand: "Mercedes-Benz E220", number: "ВС 6137 СН" },
            { img: "./images/no-image.webp", brand: "Renault Trafic", number: "АН 4171 НН (МН)" },
            { img: "./images/АА0949РІ.png", brand: "Toyota Land Cruiser", number: "АА 0949 РІ" },
            { img: "./images/АМ5668ЕІ.png", brand: "Volksvagen Crafter", number: "АМ 5668 ЕІ" },
            { img: "./images/АМ1748ЕР.png", brand: "Volkswagen Crafter", number: "АМ 1748 ЕО" },
            { img: "./images/ВХ6982ЕР.png", brand: "Dacia Sandero", number: "ВХ 6982 ЕР" },
            { img: "./images/АА3492ОО.png", brand: "Ford ", number: "АН 3492 ОО" },
            { img: "./images/no-image.webp", brand: "BMW", number: "АЕ ? 760 ЕР" },
            { img: "./images/АТ9854ЕР.png", brand: "Nissan Qashqai", number: "АТ 9854 ЕР" },
            { img: "./images/АВ1055ЕР.png", brand: "Toyota Corolla", number: "АВ 1055 ЕР" },
            { img: "./images/ВІ2317ВА.png", brand: "Mitsubishi Lancer", number: "ВІ 2317 ВА" },
            { img: "./images/ВА7714СА.png", brand: "Ford Kuga", number: "ВА 7714 СА" },
            { img: "./images/КА5874СА.png", brand: "Hyundai Elantra", number: "КА 5874 СА" },
            { img: "./images/no-image.webp", brand: "Таврія", number: "АН 4877 ??" },
            { img: "./images/no-image.webp", brand: "ЗАЗ", number: "АН 4877 МА" },
            { img: "./images/no-image.webp", brand: "Renault Megane", number: "ВВ 4460 СР" },
            { img: "./images/no-image.webp", brand: "Газ 2705-434", number: "АХ 4062 ІО" },
            { img: "./images/no-image.webp", brand: "Ніва Темносиня", number: "?23-33?" },
            { img: "./images/no-image.webp", brand: "Fiat Doblo", number: "ВВ 5791 СО" },
            { img: "./images/no-image.webp", brand: "Рута 25D", number: "ВА 1906 ВО" },
            { img: "./images/no-image.webp", brand: "ПАЗ 4234", number: "ВМ 3848 АА" },
            { img: "./images/no-image.webp", brand: "Renault Duster", number: "ВМ 4751 СТ" },
            { img: "./images/no-image.webp", brand: "ГАЗ", number: "ВМ 3674 АК" },
            { img: "./images/no-image.webp", brand: "ГАЗ", number: "ВМ 3960 АО" },
            { img: "./images/no-image.webp", brand: "MERLO", number: "EE 18961 ВМ" },
            { img: "./images/no-image.webp", brand: "МАЗ 5551A2", number: "ВМ 1910 ВВ" },
            { img: "./images/no-image.webp", brand: "Renault Master", number: "АР 9610 ЕН" },
            { img: "./images/no-image.webp", brand: "Renault Duster", number: "АР 2269 ЕН" },
            { img: "./images/no-image.webp", brand: "ВАЗ 2101", number: "ВВ 8753 ЕР" },
            { img: "./images/no-image.webp", brand: "Поліцейські", number: "1891" },
            { img: "./images/no-image.webp", brand: "Поліцейські", number: "4949" },
            { img: "./images/no-image.webp", brand: "Поліцейські", number: "8151" },
            { img: "./images/1773.png", brand: "Hyundai", number: "1773" },
            { img: "./images/4218.png", brand: "Chevrolet Suburban", number: "4218" },
            { img: "./images/no-image.webp", brand: "Таврiя", number: "1806" },
            { img: "./images/no-image.webp", brand: "ВАЗ 2109", number: "1810" },
            { img: "./images/no-image.webp", brand: "ВАЗ 2109", number: "1808" },
            { img: "./images/no-image.webp", brand: "ВАЗ 2104", number: "0638" },
            { img: "./images/no-image.webp", brand: "ЗАЗ", number: "0654" },
            { img: "./images/no-image.webp", brand: "ВАЗ 2107", number: "1805" },
            { img: "./images/no-image.webp", brand: "ВАЗ 21099", number: "0798" },
            { img: "./images/no-image.webp", brand: "ВАЗ 2107", number: "0681" },
            { img: "./images/no-image.webp", brand: "ВАЗ 2107", number: "1414" },
            { img: "./images/no-image.webp", brand: "ВАЗ 2107", number: "0751" },
            { img: "./images/no-image.webp", brand: "Volkswagen", number: "0083" },
            { img: "./images/no-image.webp", brand: "Skoda", number: "0731" },
            { img: "./images/no-image.webp", brand: "Renault Dokker", number: "1826" },
            { img: "./images/0687.jpg", brand: "Haval", number: "0687" },
            { img: "./images/0224.webp", brand: "Ваз 2109", number: "0224" },
            { img: "./images/no-image.webp", brand: "Ford transit", number: "АА 299 G" },
            { img: "./images/no-image.webp", brand: "Ваз 2113", number: "АР 4958 ЕТ" },
            { img: "./images/no-image.webp", brand: "Mitsubishi L200", number: "АХ 3338 АХ" },
            { img: "./images/no-image.webp", brand: "Газель", number: "0994" },
            { img: "./images/no-image.webp", brand: "Нiва", number: "АЕ 5173 МК" },
            { img: "./images/no-image.webp", brand: "Skoda", number: "АЕ 2289 АВ" },
            { img: "./images/no-image.webp", brand: "Богдан", number: "0643 А2" },
            { img: "./images/no-image.webp", brand: "Volkswagen lt 35", number: "АХ 8081 ?" },
            { img: "./images/no-image.webp", brand: "Renault traffic", number: "АХ 6949 СМ" },
            { img: "./images/no-image.webp", brand: "Citroen jumper", number: "АХ 9906 ВА" },
            { img: "./images/no-image.webp", brand: "Газель", number: "AX 5930 АР" },
            { img: "./images/no-image.webp", brand: "Соболь", number: "АХ 0856 АХ" },
            { img: "./images/no-image.webp", brand: "Renault Duster", number: "ВЕ 9976 ВМ" },
            { img: "./images/no-image.webp", brand: "Нiва", number: "ВЕ 1369 ВО" },
            { img: "./images/no-image.webp", brand: "Нiва", number: "ВЕ 9968 ВМ" },
            { img: "./images/no-image.webp", brand: "Газель", number: "ВЕ 6963 ВО" },
            { img: "./images/1757.png", brand: "Peugeot", number: "1757" },
            { img: "./images/6965.png", brand: "Skoda", number: "6965" },
            { img: "./images/no-image.webp", brand: "Нiва", number: "2333" },
            { img: "./images/no-image.webp", brand: "Renault Duster", number: "СВ 137 В" },
            { img: "./images/no-image.webp", brand: "Volkswagen Amarok", number: "СВ 144 В" },
            { img: "./images/no-image.webp", brand: "Поліцейські", number: "1356" },
            { img: "./images/0019.png", brand: "Skoda", number: "0019" },
            { img: "./images/1489.png", brand: "Renault", number: "1489" },
            { img: "./images/1217.png", brand: "Renault Kangoo", number: "1217" },
            { img: "./images/no-image.webp", brand: "Suzuki", number: "? 3367 ?" },
            { img: "./images/no-image.webp", brand: "УАЗ 3909", number: "АА 3199 РХ" },
            { img: "./images/no-image.webp", brand: "УАЗ 3909", number: "АА 3197 РХ" },
            { img: "./images/no-image.webp", brand: "Volksvagen ", number: "АХ 0860 СК" },
            { img: "./images/no-image.webp", brand: "Ваз 2109", number: "АР 5224 НЕ" },
            { img: "./images/no-image.webp", brand: "Toyota Land Cruiser", number: "0657 А2" },
            { img: "./images/no-image.webp", brand: "Ваз 21013", number: "4958" },
            { img: "./images/КА4435АХ.png", brand: "Subaru Forester", number: "КА 4435 АХ" },
            { img: "./images/АА1114ЕР.png", brand: "Porsche Cayenne", number: "АА 1114 ЕР" },
            { img: "./images/1170.png", brand: "УАЗ", number: "1170" },
            { img: "./images/ВЕ7046ЕМ.png", brand: "Mitsubishi", number: "ВЕ 7046 ЕМ" },
            { img: "./images/BE7549EM.png", brand: "Mitsubishi Pajero", number: "BE 7549 EM" },
            { img: "./images/AA2300OE.png", brand: "Mercedes-Benz Matic", number: "AA 2300 OE" },
            { img: "./images/АА7785ВР.png", brand: "Volkswagen Touareg", number: "АА 7785 ВР" },
            { img: "./images/КА5257ВІ.png", brand: "Renault Trafic", number: "КА 5257 ВІ" },
            { img: "./images/КА0697СС.png", brand: "Skoda Octavia", number: "КА 0697 СС" },
            { img: "./images/AI4526IK.png", brand: "Dacia Sandero", number: "AI 4526 IK" },
            { img: "./images/АА4072ХВ.webp", brand: "Ford Mondeo", number: "АА 4072 ХВ" },
            { img: "./images/АР6289АМ.jpg", brand: "Karsan J9", number: "АР 6289 АМ" }, 
            { img: "./images/АР4987СР.jpg", brand: "Mitsubishi Pajero", number: "АР 4987 СР" },
            { img: "./images/АР9038АВ.webp", brand: "Ford Transit", number: "АР 9038 АВ" },
            //{ img: "./images/АР2034ЕР.png", brand: "Chevrolet Cruze", number: "АР 2034 ЕР" }, По Шевроле отбой. Его уже отработали - инфо из чата ЧЧ 16:32. 11.03.22
            { img: "./images/AA4007ХВ.jpg", brand: "Mercedes Sprinter", number: "АА 4007 ХВ" },
            //{ img: "./images/00362НС.png", brand: "Ваз 2103", number: "00362 HC" }, 16.03.22 Снято с ориентировки, отработали, передвигается сотрудник ТРО
            { img: "./images/no-image.webp", brand: "Volkswagen Tiguan", number: "АР 4646 СК" }, 
            { img: "./images/no-image.webp", brand: "Mitsubishi Outlander", number: "1637" }, 
            { img: "./images/АІ4610ОМ.webp", brand: "Volkswagen Passat", number: "АІ 4610 ОМ" },
            { img: "./images/no-image.webp", brand: "Hyundai Tucson", number: "АА 2068 КХ" },
            { img: "./images/no-image.webp", brand: "Hyundai Tucson", number: "АА 7962 ОА" },
            { img: "./images/no-image.webp", brand: " Lanos", number: "АР 3656 ??" },
            { img: "./images/no-image.webp", brand: "Mitsubishi L200", number: "АР 3557 НВ" },
            //{ img: "./images/АР1432НI.png", brand: "Lexus GS300", number: "АР 1432 НІ" }, 16.03.22 по информации киберов удалить
            { img: "./images/no-image.webp", brand: "Renault Duster", number: "АР 5970 СХ" },
            { img: "./images/КА1796ВЕ.webp", brand: "ГАЗ 3302", number: "КА 1796 ВЕ" },
            { img: "./images/no-image.webp", brand: "Citroen Jumper", number: "КА 7751 СК" },
            { img: "./images/no-image.webp", brand: "Peugeot 307", number: "АР 1474 СР" },
            { img: "./images/no-image.webp", brand: "ВАЗ 21214", number: "AA 3878 PM" },
            { img: "./images/no-image.webp", brand: "УАЗ 390994", number: "AA 3892 PM" },
            { img: "./images/no-image.webp", brand: "УАЗ 3909", number: "AA 3877 PM" }, 
            { img: "./images/no-image.webp", brand: "УАЗ 3909", number: "AA 3881 PM" },
            { img: "./images/no-image.webp", brand: "ГАЗ 2705", number: "AA 3866 PM" },
            { img: "./images/no-image.webp", brand: "УАЗ 3741", number: "AA 3882 PM" },
            { img: "./images/no-image.webp", brand: "ГАЗ 3302", number: "AA 3873 PM" },
            { img: "./images/no-image.webp", brand: "УАЗ 3741", number: "AA 3869 PM" }, 
            { img: "./images/no-image.webp", brand: "УАЗ 3909", number: "AA 3876 PM" }, 
            { img: "./images/no-image.webp", brand: "ГАЗ 3302", number: "AA 3875 PM" }, 
            { img: "./images/no-image.webp", brand: "УАЗ 3909", number: "AA 6015 PO" }, 
            { img: "./images/no-image.webp", brand: "Citroen Jumper", number: "AA 5096 EO" }, 
            { img: "./images/no-image.webp", brand: "Citroen BERLINGO", number: "KA 9925 CX" }, 
            { img: "./images/no-image.webp", brand: "Citroen BERLINGO ", number: "KA 9930 CX" },
            { img: "./images/no-image.webp", brand: "Citroen BERLINGO", number: "KA 9936 CX" },
            { img: "./images/no-image.webp", brand: "Citroen BERLINGO", number: "KA 9938 CX" },
            { img: "./images/no-image.webp", brand: "Citroen BERLINGO", number: "KA 9940 CX" },
            { img: "./images/no-image.webp", brand: "Citroen BERLINGO", number: "KA9942CX" },
            { img: "./images/no-image.webp", brand: "Citroen BERLINGO", number: "KA 9943 CX" },
            { img: "./images/no-image.webp", brand: "Citroen BERLINGO", number: "KA 9946 CX" },
            { img: "./images/no-image.webp", brand: "Citroen BERLINGO", number: "KA 9947 CX" },
            { img: "./images/no-image.webp", brand: "Citroen BERLINGO", number: "KA 9950 CX" },
            { img: "./images/no-image.webp", brand: "ВИС 2345", number: "AA 3884 PM" },
            { img: "./images/no-image.webp", brand: "ЗАЗ 110557", number: "AA 3867 PM" },
            { img: "./images/no-image.webp", brand: "УАЗ 2206", number: "AA 3872 PM" },
            { img: "./images/no-image.webp", brand: "ГАЗ 2705", number: "AA 3870 PM" }, 
            { img: "./images/no-image.webp", brand: "ГАЗ 2705", number: "AA 3880 PM" },
            { img: "./images/no-image.webp", brand: "УАЗ 3909", number: "AA 3885 PM" },
            { img: "./images/no-image.webp", brand: "УАЗ 3741", number: "AA 3871 PM" },
            { img: "./images/no-image.webp", brand: "УАЗ 3741", number: "AA 3874 PM" },
            { img: "./images/no-image.webp", brand: "УАЗ 3909", number: "AA 3879 PM" }, 
            { img: "./images/no-image.webp", brand: "УАЗ 3909", number: "BB 3170 BC" }, 
            { img: "./images/no-image.webp", brand: "УАЗ 3909", number: "BB 4630 AO" }, 
            { img: "./images/no-image.webp", brand: "УАЗ 3909", number: "AA 6018 PO" },
            { img: "./images/no-image.webp", brand: "УАЗ 3741", number: "AA 6023 PO" },
            { img: "./images/no-image.webp", brand: "ГАЗ 2705", number: "AA 6022 PO" },
            { img: "./images/no-image.webp", brand: "УАЗ 3741", number: "AA 3889 PM" },
            { img: "./images/no-image.webp", brand: "ГАЗ 2705", number: "AA 3887 PM" },
            { img: "./images/no-image.webp", brand: "УАЗ 3909", number: "AA 3886 PM" },
            { img: "./images/no-image.webp", brand: "Citroen BERLINGO", number: "KA 6542 EH" },
            { img: "./images/no-image.webp", brand: "Citroen BERLINGO", number: "KA 6927 EH" }, 
            { img: "./images/no-image.webp", brand: "Citroen BERLINGO", number: "KA 5940 EH" }, 
            { img: "./images/no-image.webp", brand: "Citroen BERLINGO", number: "KA 5966 EH" }, 
            { img: "./images/no-image.webp", brand: "Citroen BERLINGO", number: "KA6612ET" },
            { img: "./images/no-image.webp", brand: "Citroen BERLINGO", number: "KA6615ET" },
            { img: "./images/no-image.webp", brand: "Citroen BERLINGO", number: "KA6638EH" },
            { img: "./images/no-image.webp", brand: "Citroen BERLINGO", number: "KA6836EH" },
            { img: "./images/no-image.webp", brand: "Citroen BERLINGO", number: "KA6852EH" },
            { img: "./images/no-image.webp", brand: "ГАЗ 3302", number: "АА 1690 РК" },
            { img: "./images/no-image.webp", brand: "ГАЗ 2705", number: "АА 3903 РМ" },
            { img: "./images/no-image.webp", brand: "ВИС 2345", number: "АА 3897 РМ" }, 
            { img: "./images/no-image.webp", brand: "Citroen BERLINGO", number: "КА 6631 ЕН" }, 
            { img: "./images/no-image.webp", brand: "Citroen BERLINGO", number: "КА 6649 ЕН" }, 
            { img: "./images/no-image.webp", brand: "Citroen BERLINGO", number: "КА 6846 ЕН" },
            { img: "./images/no-image.webp", brand: "Citroen BERLINGO", number: "КА 5317 ЕІ" },
            { img: "./images/no-image.webp", brand: "Citroen BERLINGO", number: "КА 5948 ЕН" },
            { img: "./images/no-image.webp", brand: "Citroen BERLINGO", number: "КА 5308 ЕІ" },
            { img: "./images/no-image.webp", brand: "Citroen BERLINGO", number: "КА 6627 ЕТ" },
            { img: "./images/no-image.webp", brand: "УАЗ 3909", number: "АА 3899 РМ" },
            { img: "./images/no-image.webp", brand: "Богдан", number: "2336 Т 1" },
            { img: "./images/1652.png", brand: "Renault Dokker", number: "1652" }, 
            { img: "./images/no-image.webp", brand: "Renault Duster", number: "1692" }, 
            { img: "./images/no-image.webp", brand: "ВАЗ 2110", number: "0606" }, 
            { img: "./images/no-image.webp", brand: "Chevrolet Niva", number: "0593" },
            { img: "./images/no-image.webp", brand: "ВАЗ 2107", number: "1465" },
            { img: "./images/no-image.webp", brand: "ВАЗ 2107", number: "1408" },
            { img: "./images/no-image.webp", brand: "ВАЗ 2107", number: "1751" },
            { img: "./images/no-image.webp", brand: "Таврiя", number: " 0536" },
            { img: "./images/no-image.webp", brand: "ВАЗ 21099", number: "1118" },
            { img: "./images/no-image.webp", brand: "ВАЗ 2107", number: "1415" },
            { img: "./images/КА3720ЕТ-photo.png", brand: "Renault LODGY", number: "КА 3720 ЕТ" },
            { img: "./images/no-image.webp", brand: "Камаз 45142", number: "АР 1423 ЕЕ" }, 
            { img: "./images/no-image.webp", brand: "Renault Master", number: "АР 2158 ІР" }, 
            { img: "./images/no-image.webp", brand: "Renault Master", number: "АР 2161 ІР" },
            { img: "./images/АР9500СТ.png", brand: "Nissan X-Trail", number: "АР 9500 СТ" },
            { img: "./images/no-image.webp", brand: "Renault Logan", number: "АР 0619 СХ" },
            { img: "./images/no-image.webp", brand: "Renault Master", number: "АР 21?? ІР" },
            { img: "./images/АР0003АА.png", brand: "Toyota Camry", number: "АР 0003 АА" },
            { img: "./images/АР0080ЕЕ.png", brand: "Toyota Camry", number: "АР 0080 ЕЕ" },
            { img: "./images/АР5950АМ.png", brand: "Hyundai Н-1", number: "АР 5950 АМ" },
            { img: "./images/no-image.webp", brand: "Mitsubishi Outlander", number: "1617" }, 
            { img: "./images/АР4380СМ.webp", brand: "Ваз 2107", number: "АР 4380 СМ" }, 
            { img: "./images/no-image.webp", brand: "Hyundai Sonata", number: "АН 2754 ОІ" }, 
            { img: "./images/no-image.webp", brand: "Ford Focus", number: "AX 1226 MB" },
            { img: "./images/no-image.webp", brand: "Toyota Land Cruiser", number: "КР 8888 АЕ" },
            { img: "./images/no-image.webp", brand: "ВАЗ 2107", number: "АР 5938 СЕ" },
            { img: "./images/no-image.webp", brand: "Ford Transit", number: "AE 2872 EH" },
            { img: "./images/no-image.webp", brand: "Porshe Macan", number: "AX 7761 KE" },
            { img: "./images/KA5360AM.png", brand: "Peugeot 301", number: "КА 5360 АМ" },
            { img: "./images/no-image.webp", brand: "Renault Scenic", number: "КА 2425 СО" },
            { img: "./images/no-image.webp", brand: "Audi Q3", number: "АН 5855 ІХ" }, 
            { img: "./images/no-image.webp", brand: "ВАЗ 212140", number: "АР 4377 СВ" }, 
            { img: "./images/no-image.webp", brand: "Renault Dokker", number: "АР 9085 ЕС" }, 
            //{ img: "./images/AP5265AK.png", brand: "Mercedes-Benz Sprinter", number: "АР 5265 АК " }, Забрал наш военкомат, тз находиться у них в расположении
            { img: "./images/no-image.webp", brand: "Ваз 21063", number: "441-68 AM" },
            { img: "./images/no-image.webp", brand: "Volkswagen T4", number: "BB 5690 CX" },
            { img: "./images/no-image.webp", brand: "Kia Soul", number: "AM 1905 BE" },
            { img: "./images/no-image.webp", brand: "Mercedes Vito", number: "BB 1020 CK" },
            { img: "./images/no-image.webp", brand: "Great Wall Pegasus", number: "BB 3383 BI" },
            { img: "./images/no-image.webp", brand: "Renault Dokker", number: "BH 3458 HT" },
            { img: "./images/no-image.webp", brand: "Peugeot Bipper", number: "BB 4690 CP" }, 
            { img: "./images/no-image.webp", brand: "Газель", number: "20422 HP" }, 
            { img: "./images/no-image.webp", brand: "Уаз 3909", number: "18922 HP" }, 
            { img: "./images/no-image.webp", brand: "Уаз 3909", number: "AP 4310 AC" },
            { img: "./images/no-image.webp", brand: "Skoda Octavia", number: "АР 8543 СЕ" },
            { img: "./images/no-image.webp", brand: "УАЗ 3909", number: "AA 3763 PM" },
            { img: "./images/no-image.webp", brand: "УАЗ 3909", number: "AA 3764 PM" },
            { img: "./images/no-image.webp", brand: "Citroen Berlingo", number: "KA 1602 EI" },
            { img: "./images/no-image.webp", brand: "Citroen Berlingo", number: "KA 2236 EМ" },
            { img: "./images/no-image.webp", brand: "Citroen Berlingo", number: "KA 2239 EM" },
            { img: "./images/no-image.webp", brand: "Citroen Berlingo", number: "KA 2247 EM" }, 
            { img: "./images/no-image.webp", brand: "Citroen Berlingo", number: "KA 2249 EM" }, 
            { img: "./images/no-image.webp", brand: "Citroen Berlingo", number: "KA 2263 EM" }, 
            { img: "./images/no-image.webp", brand: "Citroen Berlingo", number: "KA 2273 EM" },
            { img: "./images/no-image.webp", brand: "Citroen Berlingo", number: "KA 2295 EM" },
            { img: "./images/no-image.webp", brand: "Citroen Berlingo", number: "KA 3813 EM" },
            { img: "./images/no-image.webp", brand: "Citroen Berlingo", number: "KA 3814 EM" },
            { img: "./images/no-image.webp", brand: "Citroen Berlingo", number: "KA 3866 EM" },
            { img: "./images/АР9434ІС.png", brand: "Volkswagen T6", number: "АР 9434 ІС" },
            //{ img: "./images/АР0858ЕТ.png", brand: "Mitsubishi Outlander", number: "АР0858ЕТ" }, Не подтверждается отбой, на Митсубиши военкомат, Оружие на руках у Тер обороны(Хортицкой полк)
            { img: "./images/no-image.webp", brand: "Chevrolet Aveo", number: "АМ 0755 ЕЕ" },
            { img: "./images/no-image.webp", brand: "Skoda Octavia A5", number: "АР 0010 ??" },
            { img: "./images/no-image.webp", brand: "BMW X5", number: "АО 1902 НН" },
            { img: "./images/no-image.webp", brand: "Toyota Camry", number: "КА 2791 НВ" },
            { img: "./images/no-image.webp", brand: "Chery E5 ", number: "AP 1978 EP" },
            { img: "./images/no-image.webp", brand: "Toyota Land Cruiser", number: "AP 5595 AE" },
            { img: "./images/no-image.webp", brand: "ВАЗ 21130", number: "AP 5544 CT" },
            { img: "./images/no-image.webp", brand: "Mitsubishi L200 ", number: "AP 7141 HT" }, 
            { img: "./images/E8217KI.png", brand: "Audi", number: "E 8217 KI" }, 
            { img: "./images/no-image.webp", brand: "Renault Logan", number: "АІ 4998 НІ" }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " },
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " }, 
            //{ img: "./images/no-image.webp", brand: " ", number: " " },         
];
