
const fpPromise = import("https://openfpcdn.io/fingerprintjs/v3").then(
  (FingerprintJS) =>
    FingerprintJS.load({
      monitoring: false,
    })
);

fpPromise
  .then((fp) => fp.get())
  .then((result) => {
    document.getElementById("fingerprint-hash").innerHTML +=
      "Fingerprint: " + result?.visitorId + "<br />";
    document.getElementById("fingerprint-hash").innerHTML +=
      "Confidence: " + result?.confidence?.score;
    console.log(result);
    document.getElementById("fingerprint-data").innerHTML =
      JSON.stringify(result?.components, null, 2);
  });


const tab_button_ids = [
  "fingerprint-hash",
  "fingerprint-data",
  "fingerprint-code",
];

document.getElementById("fingerprint-error").style.display = "none";
tab_button_ids
  .filter((s) => s !== "fingerprint-hash")
  .forEach(tab => {
    document.getElementById(tab).style.display = "none";
  });

function openTab(evt, tabId) {
  tab_button_ids.forEach((tab) => {
    document.getElementById(tab).style.display = "none";
  });
  if (tabId == 1) {
    // Open json in new window
    var wnd = window.open("data:text/json", "", "_blank");
    wnd.document.write(document.getElementById("fingerprint-data").innerHTML);
    wnd.focus();
  }
  else {
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tab_button_ids[tabId]).style.display = "block";

  }
}
