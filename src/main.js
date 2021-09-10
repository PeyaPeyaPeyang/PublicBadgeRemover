const remove = () => {
    Array.from(document.querySelectorAll("span.Label"))
        .forEach((label) => {
            switch (label.innerText)
            {
                case "Public":
                    label.style = "display: none;"
                    break;
                case "Public template":
                    label.innerText = "Template";
                    break;
                case "Public archive":
                    label.innerText = "Archive";
                    break;
            }
        });
}

const config = {
    childList: true,
    subtree: true,
    attributeOldValue: false,
    attributes: false,
    characterData: false
};

const observer = new MutationObserver((_) => {
    console.log("disc")
    observer.disconnect();
    remove();
    observer.observe(document, config);
});
remove()
observer.observe(document, config);
