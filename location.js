const reloadPage = () => {
    location.reload();

}
setTimeout(function () {
    console.log(location.hostname);
    console.log(location.href);
    console.log(location.origin);
    console.log(location.protocol);
}, 5000)