function cesar(str, shift, action) {
    var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

    var resultStr = String();
  
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            resultStr += " ";
            continue;
        }
    
        if (action === "encode") {
            var new_index = alphabet.indexOf(str[i]) + shift;
        }
        else if (action === "decode") {
            var new_index = alphabet.indexOf(str[i]) - shift;
        }

        if (new_index > alphabet.length) {
            resultStr += alphabet[new_index % alphabet.length];
        }
        else if (new_index < alphabet.length) {
          resultStr += alphabet[new_index];
        }
        else if (new_index < 0) {
            resultStr += alphabet[alphabet.length + new_index % alphabet.length];
        }
        else if (new_index >= 0){
            resultStr += alphabet[new_index];
        }
    }

    return resultStr;
}


// Расшифровка сообщения "эзтыхз фзъзъз". Ответ: "хакуна матата"
for (var i = 0; i < 50; i++) {
    console.log(cesar("эзтыхз фзъзъз", i, "decode"));
}
