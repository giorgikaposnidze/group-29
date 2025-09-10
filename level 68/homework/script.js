    // 1)
    const content = document.getElementById("content");
    content.removeChild(content.firstElementChild);

    // 2)
    const ul = document.getElementById("myList");
    ul.removeChild(ul.lastElementChild);

    // 3)
    const container = document.getElementById("textContainer");
    const newP = document.createElement("p");
    newP.textContent = "New paragraph (replaced)";
    container.replaceChild(newP, container.firstElementChild);

    // 4)
    const btnContainer = document.getElementById("btnContainer");
    const newSpan = document.createElement("span");
    newSpan.textContent = "I am a new span";
    btnContainer.replaceChild(newSpan, btnContainer.firstElementChild);

    // 5)
    const oneItemList = document.getElementById("oneItemList");
    const newLi = document.createElement("li");
    newLi.textContent = "New Item (replaced)";
    oneItemList.replaceChild(newLi, oneItemList.firstElementChild);

    // 6)
    const header = document.getElementById("header");
    const newH1 = document.createElement("h1");
    newH1.textContent = "New Heading (h1)";
    header.replaceChild(newH1, header.firstElementChild);