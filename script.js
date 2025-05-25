function checkInternet() {
  const indicator = document.getElementById('indicator');
  const status = document.getElementById('status');
  const pingResult = document.getElementById('pingResult');

  const startTime = new Date().getTime();

  fetch("https://www.google.com", { mode: 'no-cors' })
    .then(() => {
      const endTime = new Date().getTime();
      const ping = endTime - startTime;

      indicator.style.backgroundColor = "green";
      status.innerText = "Connected ✅";
      pingResult.innerText = `Ping: ${ping} ms`;
    })
    .catch(() => {
      indicator.style.backgroundColor = "red";
      status.innerText = "No Internet ❌";
      pingResult.innerText = `Ping: ---`;
    });
}
