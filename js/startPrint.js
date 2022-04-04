let delay = 55;
let nextm = 0;
let msg = [
    'Увага! Особи за орієнтуванням',
    'при собі можуть мати',
    'автоматичну та іншу зброю.',
    'При затриманні дотримуватися',
    'заходів особистої безпеки!'];

    function start_print() { do_print(msg[0], 0, 1); }

    function do_print(text, pos, dir) {
        let out = '<span class="start-print">' + text.substring(0, pos) + '</span>';

        document.getElementById("message").innerHTML = out;
        pos += dir;
        if (pos > text.length)
            setTimeout('do_print("' + text + '",' + pos + ',' + (-dir) + ')', delay * 10);
        else {
            if (pos < 0) {
                if (++nextm >= msg.length) nextm = 0;
                text = msg[nextm];
                dir = -dir;
            }
            setTimeout('do_print("' + text + '",' + pos + ',' + dir + ')', delay);
    }
}

start_print();