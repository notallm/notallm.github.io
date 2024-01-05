dat = datt[0];
i = 0;
q_selected = 5;
set_forward_button = document.getElementById("set_forward");
set_current_card = document.getElementById("set_current_card");
set_current_card.innerHTML = i + 1 + "/" + dat.length;
set_flipcard__front = document.getElementById("set_flipcard__front");
set_flipcard__back = document.getElementById("set_flipcard__back");
set_progress__msg = document.getElementById("set_progress__msg");
ids = [];
dat.forEach(entry => {
    ids.push(entry[2]);
});
if (dat.length == 0) {
    done();
}
disable_next();
refresh();
function disable_next() {
    set_forward_button.classList.add("set_control_button__dim");
    set_progress__msg.innerHTML = "Select the quality (level of difficulty) of this card from 1 - 5 on the right to see the next question."
}
function enable_next() {
    set_forward_button.classList.remove("set_control_button__dim");
    set_progress__msg.innerHTML = "";
}
function refresh() {
    if (dat.length == 0) {
        set_current_card.innerHTML = "";
    } else {
        set_current_card.innerHTML = i + 1 + "/" + dat.length;
    }
    if (i >= dat.length) {
        set_forward();
        return;
    }
    q = dat[i][0];
    a = dat[i][1];
    set_flipcard__front.innerHTML = q;
    set_flipcard__back.innerHTML = a;
}
function done() {
    set_flipcard = document.getElementById("set_flipcard");
    toggle = document.getElementById("toggle");
    set_flipcard.classList.add("hidden");
    toggle.classList.add("hidden");
    done_div = document.getElementById("done");
    done_div.classList.remove("hidden");
    set_current_card.innerHTML = "";
}
function set_forward() {
    if (i >= dat.length) {
        done();
        return;
    }
    reg_spaced();
    i++;
    refresh();
    reset_spaced();
    disable_next();
}
function set_backward() {
    if (i == 0) {
        return;
    }
    i--;
    refresh();
}
function reset_spaced() {
    old = document.getElementById("set_spaced_" + q_selected);
    old.classList.remove("set_spaced_button__active");
}
function choose_spaced(q_selected_) {
    reset_spaced();
    q_selected = q_selected_;
    chosen = document.getElementById("set_spaced_" + q_selected);
    chosen.classList.add("set_spaced_button__active");
    enable_next();
}
async function reg_spaced() {
    _ = await fetch("/api/log_spaced", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: ids[i],
            q: q_selected
        })
    });
}