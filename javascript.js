// 1,ボタンが押される
const data_base = {
  "battlemaster": ["戦士", "武闘家"],
  "mahoukenshi": ["戦士", "魔法使い"],
  "kenja": ["魔法使い", "僧侶"],
  // "superstar": ["踊り子", "吟遊詩人", "笑わせ師"],
  "mamonohanter": ["羊飼い", "盗賊"],
  "kaizoku": ["盗賊", "船乗り"],
  "paradinn": ["僧侶", "武闘家"],
  "godhand": ["バトルマスター", "パラディン"],
  // "tennthiraimeishi": ["賢者", "スーパースター"],
}

const name_database = {
  "battlemaster": "バトルマスター",
  "mahoukenshi": "魔法剣士",
  "kenja": "賢者",
  "superstar": "スーパースター",
  "mamonohanter": "魔物ハンター",
  "kaizoku": "海賊",
  "paradinn": "パラディン",
  "godhand": "ゴッドハンド",
  "tennthiraimeishi": "天地雷鳴士",
  // "yusya": "勇者"
}
input_data = [];
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  let inputs = document.querySelectorAll(".input");
  console.log(inputs);
  // let text_content = document.createElement("ul");
  // text_content.classList.add("container");
  let text_content = document.getElementsByClassName("container")[0];
  let img = document.createElement("img");
  text_content.appendChild(img);
  let li = document.createElement("li");
  li.classList.add("job_text");
  // ul.appendChild(li);
  // job_text.textContent = "バトルマスター";
  console.log(inputs[0].value, inputs[1].value);
  if (inputs[0].value != inputs[1].value) {
    console.log(true);
    for (const input of inputs) {
      if (input.value != "") {
        input_data.push(input.value);
      }
    }
  } else if (inputs[0].value == inputs[1].value) {
    img.src = "./img/unnamed.png";
    img.alt = "職業";
    img.width = 300;
    img.height = 430;
    img.value;
    li.textContent = "その組み合わせはありません";
  }
  let count = 0;
  let result = {
    "battlemaster": 0,
    "mahoukenshi": 0,
    "kenja": 0,
    // "superstar": 0,
    "mamonohanter": 0,
    "kaizoku": 0,
    "paradinn": 0,
    "godhand": 0,
    // "tennthiraimeishi": 0,
  };
  for (const data of input_data) {
    for (const key in data_base) {
      count = 0;
      for (const item of data_base[key]) {
        if (data == item) {
          count++;
          result[key] += count;
        }
      }
    }
  }
  console.log(result);
  let flag = false;
  for (const key in result) {
    if (result[key] > 2 || result[key] > 1) {
      console.log(key);
      console.log(result[key]);
      console.log(name_database[key]);
      jobcreate(key);
      li.textContent = name_database[key];
      flag = true;
    }
  }
  if (!flag) {
    img.src = "./img/unnamed.png";
    img.alt = "職業";
    img.width = 300;
    img.height = 430;
    img.value;
    li.textContent = "その組み合わせはありません";
  }
  text_content.appendChild(li);
  
  function jobcreate(key) {
    img.src = `./img/${key}.png`;
    img.alt = "職業";
    img.width = 300;
    img.height = 430;
  }
  function delete_btn() {
    let delete_btn = document.createElement("div");
    console.log(delete_btn);
    if (inputs[0] != "") {
      delete_btn.textContent = "reset";
    }
    delete_btn.classList.add("delete");
    text_content.appendChild(delete_btn);
    // function reset(object) {
    //     for (const key in object) {
    //       object[key] = 0;
    //     }
    //   }
    delete_btn.addEventListener("click", function () {
      this.remove();
      img.src = "";
      img.alt = "";
      img.width = 0;
      img.height = 0;
      li.textContent = "";
      window.location.reload();
      // reset(result);
      console.log(result);
    })
  }
  delete_btn();
})