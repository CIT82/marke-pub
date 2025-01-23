// custom JavaScript to replace [!NOTE] with **NOTE**

// unicode characters for the blockquote
// const note = "\u{1F4D6}";
// const tip = "\u{1F9D0}";
// const warning = "\u{26A0}";
// const important = "\u{2757}";
// const caution = "\u{1F6D1}";
// const info = "\u{2139}";

// character dictionary for the blockquote
const blockquoteCharDict = {
    note: "\u{1F4D6}",
    tip: "\u{1F4A1}",
    warning: "\u{26A0}",
    important: "\u{E654}",
    caution: "\u{1F6D1}",
    info: "\u{2139}"
}

// get all blockquotes
const blocQs = document.getElementsByTagName("blockquote");




// check if there are any blockquotes
if (blocQs.length !== 0) {
  for (let i = 0; i < blocQs.length; i++) {
    const item = blocQs[i];
    const text = (item.children[0].textContent.toString());
    setBlockquoteClassName(item, getBlockquoteClassName(text));
    setInnerText(item, text);
  }
}
// set the inner text of the blockquote
function setInnerText(item, text){
    switch (item.className){
        case "note":
            item.innerHTML = item.innerHTML.replace(
                "[!NOTE]",
                `<strong><i class="nf nf-md-book_edit"></i> NOTE</strong>:<br>`,
              );
            break;
        case "tip":
            item.innerHTML = item.innerHTML.replace(
                "[!TIP]",
                `<strong><i class="nf nf-fa-lightbulb"></i> TIP</strong>:<br>`,
              );
            break;
        case "warning":
            item.innerHTML = item.innerHTML.replace(
                "[!WARNING]",
                `<strong><i class="nf nf-fa-warning"></i> WARNING</strong>:<br>`,
              );
            break;
        case "important":
            item.innerHTML = item.innerHTML.replace(
                "[!IMPORTANT]",
                `<strong><i class="nf nf-md-exclamation"></i> IMPORTANT</strong>:<br>`,
              );
            break;
        case "caution":
            item.innerHTML = item.innerHTML.replace(
                "[!CAUTION]",
                `<strong><i class="nf nf-oct-stop"></i> CAUTION</strong>:<br>`,
              );
            break;
        case "info":
            item.innerHTML = item.innerHTML.replace(
                "[!INFO]",
                `<strong><i class="nf nf-cod-info"></i> INFO</strong>:<br>`,
              );
            break;
        default:    
            break;
    }
}
// set the class name of the blockquote
function setBlockquoteClassName(item, className){
    item.className = className;
}
// determine the class name of the blockquote
function getBlockquoteClassName(text){
    if (text.includes("[!NOTE]")){
        return "note";
    }else if (text.includes("[!TIP]")){
        return "tip";
    }else if (text.includes("[!WARNING]")){
        return "warning";
    }else if (text.includes("[!IMPORTANT]")){
        return "important";
    }else if (text.includes("[!CAUTION]")){
        return "caution";
    }else if (text.includes("[!INFO]")){
        return "info";
    }
    else{
        return "";
    }
}