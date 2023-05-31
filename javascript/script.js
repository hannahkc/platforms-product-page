document.addEventListener("DOMContentLoaded", () => {
    const e = document.querySelector("#consentGranted"),
        t = document.querySelector("#consentRejected"),
        n = document.querySelector(".govuk-cookie-banner");
    function o(e) {
        "consentGranted" === e.target.id ? i("cookieConsent", "granted", 365) : i("cookieConsent", "rejected", 30), c();
    }
    function c() {
        n.style.display = "none";
    }
    function i(e, t, n) {
        let o = "";
        if (n) {
            const c = new Date();
            c.setTime(c.getTime() + 24 * n * 60 * 60 * 1e3), (o = "; expires=" + c.toUTCString());
        }
        document.cookie = e + "=" + t + o + "; path=/";
    }
    function r(e) {
        var n = e + "=",
            o = document.cookie.split(";");
        for (let t = 0; t < o.length; t++) {
            let e = o[t];
            for (; " " === e.charAt(0); ) e = e.substring(1, e.length);
            if (0 === e.indexOf(n)) return e.substring(n.length, e.length);
        }
        return null;
    }
    e.addEventListener("click", o), t.addEventListener("click", o);
    var d,
        s = r("cookieConsent");
    "granted" === s ? c() : "rejected" === s && (d = r("lastVisit")) ? Date.now() - 2592e6 < d && c() : i("lastVisit", Date.now(), 365);
});
