// Create cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Delete cookie
function deleteCookie(cname) {
    const d = new Date();
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=;" + expires + ";path=/";
}

// Read cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Set cookie consent
function acceptCookieConsent() {
    deleteCookie('user_cookie_consent');
    setCookie('user_cookie_consent', 1, 30);
    document.getElementById("cookieNotice").style.display = "none";
    var delayInMilliseconds = 1000; //1 second

    setTimeout(function() {
      showSubscribeModal();
    }, 20000);
    
}



// Set cookie consent
function setSubscribeCookie() {
    deleteCookie('user_subscribe_cookie');
    setCookie('user_subscribe_cookie', 1, 30);
    $('#newsletterpop').modal('hide');
}

function submitSubscribeForm() {
    setSubscribeCookie();
    $('#subscribeForm').submit();
}
/*************************************** */
function acceptCookieConsentNGS() {
    deleteCookie('user_cookie_consentNGS');
    setCookie('user_cookie_consentNGS', 1, 30);
    $('.cookieNoticeNGS').hide();
    setTimeout(function() {
      showSubscribeNGSModal();
    }, 20000);
}



// Set cookie consent
function setSubscribeCookieNGS() {
    deleteCookie('user_subscribe_cookieNGS');
    setCookie('user_subscribe_cookieNGS', 1, 30);
    $('.newsletterpopNGS').modal('hide');
}

function submitSubscribeFormNGS() {
    setSubscribeCookieNGS();
    $('#subscribeFormNGS').submit();
}

function showSubscribeModal() {
    let user_subscribe = getCookie("user_subscribe_cookie");
    if (user_subscribe != "") {
        $('#newsletterpop').modal('hide');
    } else {
        $("#newsletterpop").modal('show');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
    }
}

function showSubscribeNGSModal() {
    let user_subscribeNGS = getCookie("user_subscribe_cookieNGS");
    if (user_subscribeNGS != "") {
        $('.newsletterpopNGS').modal('hide');
    } else {
        $(".newsletterpopNGS").modal('show');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
    }
}


/************************************** */
$(document).ready(function() {
    let cookie_consent = getCookie("user_cookie_consent");
    if (cookie_consent != "") {
        if ($('#cookieNotice').length > 0) {
            $('#cookieNotice').hide();
            showSubscribeModal();
        }
    } else {
        if ($('#cookieNotice').length > 0) {
            $('#cookieNotice').show();
        }
    }
/************************************************/
    let cookie_consentNGS = getCookie("user_cookie_consentNGS");
    if (cookie_consentNGS != "") {
        if ($('.cookieNoticeNGS').length > 0) {
            $('.cookieNoticeNGS').hide();
            showSubscribeNGSModal();
        }
    } else {
        if ($('.cookieNoticeNGS').length > 0) {
            $('.cookieNoticeNGS').show();
        }
    }
});