let textFromHtml = localStorage.getItem("textSecondHtml");
if (textFromHtml) {
    document.getElementById("user").textContent = textFromHtml;
}