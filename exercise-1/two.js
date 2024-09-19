const checkFileName = (fileName) => {
    console.log(fileName.slice(fileName.lastIndexOf(".")));
}

checkFileName("index.html")
checkFileName("script.js")
checkFileName("style.css")