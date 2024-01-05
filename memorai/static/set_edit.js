set_form__add_msg = document.getElementById("set_form__add_msg");
set_form__delete_cnfrm = document.getElementById("set_form__delete_cnfrm");
refresh();
function refresh() {
    set_form__contents = document.getElementById("set_form__contents");
    children = set_form__contents.children
    if (children.length == 0) {
        set_form__add_msg.classList.remove("hidden");
    } else {
        set_form__add_msg.classList.add("hidden");
    }
}
function set_form_delete(i) {
    set_form__contents = document.getElementById("set_form__contents");
    children = set_form__contents.children
    if (i == children.length) {
        i--;
    }
    set_form__contents.removeChild(children[i])
    refresh();
}
function set_form_add() {
    set_form__contents = document.getElementById("set_form__contents");
    i = set_form__contents.children.length;
    div = document.createElement("div");
    div.classList.add("set_form__qa");
    a = document.createElement("a");
    a.id = "set_form__delete";
    a.classList.add("button");
    a.classList.add("set_form__delete");
    a.addEventListener("click", () => { set_form_delete(i) }, false);
    a.innerHTML = "X";
    q_input = document.createElement("input");
    q_input.type = "text";
    q_input.classList.add("set_form__input");
    q_input.classList.add("set_form__input__mobile");
    q_input.classList.add("set_form__que_input");
    q_input.name = "qnew" + i;
    q_input.autocomplete = "off",
    q_input.placeholder = "Question";
    a_input = document.createElement("input");
    a_input.type = "text";
    a_input.classList.add("set_form__input");
    a_input.classList.add("set_form__input__mobile");
    a_input.classList.add("set_form__ans_input");
    a_input.name = "anew" + i;
    a_input.autocomplete = "off",
    a_input.placeholder = "Answer";
    div.appendChild(a);
    div.appendChild(q_input);
    div.appendChild(a_input);
    set_form__contents.appendChild(div);
    refresh();
}
function set_gen() {
    set_gen_chk = document.getElementById("set_gen_chk");
    set_gen_chk.checked = true;
}
function showModal() {
    set_form__delete_cnfrm.classList.add("next_set_create__hidden");
}
function hideModal() {
    set_form__delete_cnfrm.classList.remove("next_set_create__hidden");
}